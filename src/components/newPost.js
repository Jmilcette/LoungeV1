import React, { useState } from "react";
import { render } from "@testing-library/react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";


class NewPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            setShow: false
        }
    }


  handleClose = () => {
      this.setState ({setShow: false});
      this.setState ({show: false});
  }
  
  handleShow = () => {
      this.setState ({setShow: true});
      this.setState ({show: true});
  }
  render() {
    return (
        <div>
        <Button size = "lg" className = "text-center mt-5 mb-3" id = "dropdown-basic" onClick={this.handleShow}> 
        New Post
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="email" placeholder="Title" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Type of Content</Form.Label>
    <Form.Control as="select">
      <option>Text</option>
      <option>Picture</option>
      <option>Video</option>
      <option>Attachment</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Add Content</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description for Picture/Video/Attachment</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea2">
    <Form.Label>Hashtags</Form.Label>
    <Form.Control as="textarea" rows="1" />
  </Form.Group>
</Form>
</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button id = "dropdown-basic" onClick={this.handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default NewPost;
