import React from 'react'
import {Form,Button} from 'react-bootstrap'

export const Contact = () => (
  
  <div>
    <h3>Get in Touch</h3>
    <p>Please fill out the quick form and we will be in touch with lightening speed.</p>
    <Form>
  

  <Form.Group controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Naman" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  
  
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  <Button variant="primary" type="submit" href="http://localhost:3000/">
    Submit
  </Button>
</Form>
  </div>
)
