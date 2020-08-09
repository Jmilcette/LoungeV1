import React from "react";
import { pages } from "../App";
import { Form, Button } from "react-bootstrap"
import "./styles/SignUpPage.css"

interface SignUpProps {
    changePage: (page: pages) => void;
}

export class SignUpPage extends React.Component<SignUpProps> {
    render() {
        return (
            <div className="SignUpPage">
                <h1 className="signUpPageHeader">Introduce Yourself</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group>

                        <Form.Label> Years of Experience </Form.Label>
                        <Form.Control type="text" placeholder="Years of Experience" />

                    </Form.Group>

                    <Form.Group>
                        <Form.Label> Email </Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label> Password </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control as="select">
                            <option>Math</option>
                            <option>Science</option>
                            <option>English</option>
                            <option>Geography</option>
                            <option>Social Studies</option>
                            <option>Special Education</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Grade</Form.Label>
                        <Form.Control as="select">
                            <option>Pre-K</option>
                            <option>Kindergarten</option>
                            <option>1st Grade</option>
                            <option>2nd Grade</option>
                            <option>3rd Grade</option>
                            <option>4th Grade</option>
                            <option>5th Grade</option>
                            <option>6th Grade</option>
                            <option>7th Grade</option>
                            <option>8th Grade</option>
                            <option>9th Grade</option>
                            <option>10th Grade</option>
                            <option>11th Grade</option>
                            <option>12th Grade</option>
                            <option>College</option>
                        </Form.Control>
                    </Form.Group>

                    <Button onClick={(e) => this.props.changePage(pages.LoginPage)}>
                        Register
                    </Button>

                </Form>
            </div>
        );
    }
}
