import React from "react";
import { pages } from "../App";
import { Form, Button } from "react-bootstrap"
// import MentorComponent from "../components/MentorScreen"
import "./styles/LoginPage.css"

interface LoginPageProps {
    changePage: (page: pages) => void;
}



export class LoginPage extends React.Component<LoginPageProps> {
    render() {
        return (
            <div className="LoginPage"> 
                <h1 className = "loginPageHeader"> LOUNGE</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email or Username" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>


                    <Button onClick={(e) => this.props.changePage(pages.HomePage)}>
                        Login
                    </Button>

                    <span><p onClick={(e) => this.props.changePage(pages.HomePage)}>Forgot Password</p></span>
                    <p onClick={(e) => this.props.changePage(pages.SignUpPage)}>Join The Lounge</p>

                </Form>
                {/* <Button onClick ={(e) => this.props.changePage(pages.MessagesPage)}>GET A MENTOR</Button> */}
             </div>

        );
    }
}
