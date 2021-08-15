import React,{useState} from 'react'
import './SignIn.css';
import {Container,Row,Col,Form,Button}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { ToastProvider, useToasts } from 'react-toast-notifications';

function SignIn() {
    let history = useHistory();
    const [email,setEmail] = useState('');    
    const [password,setPassword] = useState([]);
    const { addToast } = useToasts();
   
    function successLogin(response){
        addToast('Login Success', { appearance: 'success' });
        history.push("/");
        localStorage.setItem('token',response.jwt)

    }
    function failedLogin(response){
        console.log(""+response);
        addToast('Login Failed', { appearance: 'error' });
    }
    function submitSignIn(event) {
      let email =  event.currentTarget.form.elements['email'].value;
      let password =  event.currentTarget.form.elements['password'].value;
      fetch("http://localhost:8080/DVSTORE/auth/signin",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
      }
      )
      .then(res => res.json())
        .then(response => successLogin(response))
        .catch(response =>failedLogin(response));
      }

    return (
        <Container>
            <Row className="justify-content-md-center fromclass" style={{"width":"800px"}}>
                <Col xs lg="11" className="">
                    <Form>
                        <Row className="justify-content-md-center">
                            <Form.Label className="signupTitle">
                                Sign In
                            </Form.Label>
                        </Row>
                        <Form.Group as={Row}>
                            <Col sm="12">
                                <Form.Control size="lg" id="email" type="text"  placeholder="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm="12">
                                <Form.Control size="lg" id="password" type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Col sm="12" className="my-1 btn-block">
                            <Button type="button" variant="info" size="lg" block onClick={(e) => {submitSignIn(e)}}>Submit</Button>
                        </Col>
                    </Form>
                </Col>
        </Row>
      </Container>
    )
};
    

export default SignIn;
