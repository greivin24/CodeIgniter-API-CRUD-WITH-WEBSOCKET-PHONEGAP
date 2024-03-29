<?php
defined('BASEPATH') OR exit('No direct script access allowed');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
require APPPATH . 'libraries/REST_Controller.php';


class News extends REST_Controller {
    
    public function __construct(){
        
        parent::__construct();$this->load->database();
    }
    
    public function getNews_get(){
        
        //El cuarto segmento de la URI es el ID
        $id =$this->uri->segment(4);
        if(!empty($id)){$data = $this->db->get_where('news', ['id' => $id])->row_array();
        
        }else{
            $data = $this->db->get('news')->result();
        
        }
        if(!$data)
            $data = 'No hay registros con este ID.';
        
        $this->response($data, REST_Controller::HTTP_OK);
    }
    
    public function insertNews_post(){
        $data = $this->input->post();
        if($this->db->insert('news', $data))
            $this->response('Item creado con éxito.', REST_Controller::HTTP_OK); 
        }
        
    
    public function updateNews_post()
        {
            
            $data = $this->input->post();
            $id = $data['id'];
            if($this->db->update('news', $data, array('id'=>$id)))
                $this->response('Item actualizado con éxito.', REST_Controller::HTTP_OK);
        }
    
    public function deleteNews_get()
        {
            $id = $this->uri->segment(4);

            if($this->db->delete('news', array('id'=>$id)))
                $this->response('Item eliminado con éxito.', REST_Controller::HTTP_OK);
        }
}