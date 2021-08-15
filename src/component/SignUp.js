import React,{useContext} from 'react'
import './SignUp.css';
import {Container,Row,Col,Form,Button}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext  from '../AppContext';
import { useHistory } from 'react-router-dom';

function SignUp() {
    let history = useHistory();
    const [value, setValue] = useContext(UserContext);
    function submitSignUp(event) {
        event.preventDefault();
       setValue(event.target.elements['firstname'].value);
       history.push('/');
      }

    return (
        <Container>
            <Row className="justify-content-md-center fromclass" style={{"width":"800px"}}>
                <Col xs lg="11" className="">
                    <Form onSubmit={submitSignUp}>
                        <Row className="justify-content-md-center">
                            <Col xs lg="6">
                                <Form.Label className="signupTitle">
                                   Create New Account
                                </Form.Label>
                            </Col>    
                        </Row>

                        <Form.Group as={Row}>
                            <Col sm="12">
                                <Form.Control size="lg" id="firstname" type="text"  placeholder="First Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm="12">
                                <Form.Control size="lg" id="lastname" type="password" placeholder="Last Name" />
                            </Col>
                        </Form.Group>

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
                            <Button type="submit" variant="info" size="lg" block>Submit</Button>
                        </Col>
                    </Form>
                </Col>
        </Row>
      </Container>
    )
};
    

export default SignUp;
