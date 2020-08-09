import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import { pages } from "../App";
import { Form, Button } from "react-bootstrap"
import "../pages/styles/MentorScreen.css";

interface TestScreenProps {
    changePage: (Page: pages) => void;
}
export class TestScreen extends React.Component<TestScreenProps> {
    private input: any;
    private messages:any;
    private setInput: any;
    private setMessages:any;

    constructor (props:any) {
        super(props);
    
            this.input = "";
            this.messages = [
         {
            name: 'Gabe',
            image: 'Image for user',
            message: 'Pinewood High School Community'
        },

        {
            name: "Gabe",
            image: 'Image afain',
            message: "Join us for fun!"

        },
        {
            message:""
        }

    ]
    }

    private handleSend = (e:any) => {
        e.preventDefault();
        this.setInput("");
        this.setMessages([...this.messages, { message: this.input }]);
       
    };

    render() {
        return (
        <div className="chatScreen">
            <p className="chatScreen_timeStamp">Pinewood High Schools </p>
            {this.messages.map((message) => (
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar
                            className="chatScreen_image"
                            alt={message.name}
                            src={message.image} 
                        />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen_message">
                            <p className="chatScreen_textUser">{message.message}</p>
                        </div>
                    )
            ))}

            <form className="chatScreen_input">
                <input className="chatScreen_inputField" type="text" placeholder="MESSAGE" value={this.input} onChange={e => this.setInput(e.target.value)} />
                <button className="chatScreen_inputButton" onClick={this.handleSend} type="submit">SEND</button>
            </form>
        </div>
        )
}
}

// export default MentorScreen;
