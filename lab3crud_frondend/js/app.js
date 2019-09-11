//URL de la API con la que deseamos interactuar
// var BaseApiUrl = "http://localhost/yourlab/index.php/api/news/";
var BaseApiUrl = "https://sistemavacunas.000webhostapp.com/lab3crud/index.php/api/news/";

var ws;
//  = "wss://connect.websocket.in/YOUR_CHANNEL_ID?room_id=YOUR_ROOM_ID";


function buildUrl(service) {
    return BaseApiUrl + service; //URL + la acción a invocar
}

//ejecutamos VUE hasta que se cargue el html primero completamenete
window.onload = function() {

    var vm = new Vue({
        el: '#app', //elemento html donde se cargará nuetra app
        data: {
            //campos personalizados de la tabla a desplegar en el html
            fields: ['id', 'title', 'text', 'actions'],
            news: [] //vector que almacenará los datos generados
        },
        mounted() {
            this.MyWebSocketCall();
            this.getData(); //invocamos la función de arranque
        },
        methods: {
            getData() {
                var url = buildUrl('getnews');
                axios.get(url).then((response) => {
                    this.news = response.data; //llenamos el vector con lo que genera response
                }).catch(error => { console.log(error); });
            },
            deleteData(id) {

                Swal.fire({
                    title: 'Estas seguro?',
                    text: "Una vez borrado no se puede restaurar",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Borrar.!'
                }).then((result) => {
                    if (result.value) {
                        Swal.fire(
                            'Borrado',
                            'La noticia ha sido borrada',
                            'success'
                        )

                        var url = buildUrl('deletenews/' + id); //se concante el id a eliminar a la URL
                        axios.get(url).then((response) => {
                            ws.send("delete");
                            vm.getData(); //actualizamos la tabla 
                        }).catch(error => { console.log(error); });

                    }
                })



            },
            updateData(id) {
                if ($("#txtTitle").val() !== '' && $("#txtText").val() !== '') {

                    var data = new FormData();
                    data.append('id', id);
                    data.append('title', $("#txtTitle").val());
                    data.append('text', $("#txtText").val());
                    var url = buildUrl('updatenews/');
                    axios.post(url, data).then((response) => {
                        ws.send("update");
                        vm.getData();
                        console.log(response);
                    }).catch(error => { console.log(error) });
                } else {
                    // alertify.error("Se deben completar los campos");
                }


            },
            insertData() {
                if ($("#txtTitle").val() !== '' && $("#txtText").val() !== '') {
                    var data = new FormData();
                    data.append('title', $("#txtTitle").val());
                    data.append('text', $("#txtText").val());
                    var url = buildUrl('insertnews/');
                    axios.post(url, data).then((response) => {
                        ws.send("insert");
                        this.closeModal();
                        this.getData();
                        Swal.fire({
                            type: 'success',
                            title: 'Elemento guardado',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        console.log(response);
                    }).catch(error => { console.log(error) });
                } else {
                    // alertify.error("Se deben completar los campos");
                }

            },
            insertOrUpdate() {
                if ($("#idNews").text() !== '')
                    this.updateData($("#idNews").text());
                else
                    this.insertData();
            },
            selectData(id) {
                var url = buildUrl('getnews/' + id);
                axios.get(url).then((response) => {
                    $("#txtTitle").val(response.data.title);
                    $("#txtText").val(response.data.text);
                    $("#idNews").text(response.data.id);
                }).catch(error => { console.log(error) });
            },
            newData: function() {
                $("#txtTitle").val("");
                $("#txtText").val("");
                $("#idNews").text("");
            },
            closeModal: function() {
                $("#modalDismiss").click();
            },
            MyWebSocketCall() {

                if ("WebSocket" in window) {
                    console.log("WebSocket is supported by your Browser!");
                    // Let us open a web socket        
                    //personalizamos la url con nuestro propio room_id    
                    //wss://connect.websocket.in/YOUR_CHANNEL_ID?room_id=YOUR_ROOM_ID        
                    ws = new WebSocket("wss://connect.websocket.in/zero_channel?room_id=zero123");

                    ws.onopen = function() { // Web Socket is connected, send data using send()        
                        ws.send("open");
                        console.log("WebSocket  is open...");
                    };

                    ws.onmessage = function(evt) {
                        //cada vez que se invoca el ws.send() se recibe una respuesta de forma asincrónica 
                        vm.getData();
                        console.log("Message is received: " + evt.data); //evt.data contiene el msj recibido      
                    };

                    ws.onclose = function() { // websocket is closed.        
                        console.log("Connection is closed...");
                    };
                } else { // The browser doesn't support WebSocket      
                    alert("WebSocket NOT supported by your Browser!");
                }
            }
        }

    });

}