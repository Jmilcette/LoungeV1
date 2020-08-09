import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import { Form, Button } from "react-bootstrap"
import "../pages/styles/MentorScreen.css";


export  const MentorScreen2 = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Seattle',
            image: 'Image for user',
            message: 'Seattle High School Community'
        },

        {
            name: "Seattle",
            image: 'Image afain',
            message: "Seattle based teachers, aprende con nosotros!"

        },
        {
            message:""
        }

    ]);

    const handleSend = (e:any) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen_timeStamp">Seattle Public Schools</p>
            {messages.map((message) => (
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
                <input className="chatScreen_inputField" type="text" placeholder="MESSAGE" value={input} onChange={e => setInput(e.target.value)} />
                <button className="chatScreen_inputButton" onClick={handleSend} type="submit">SEND</button>
            </form>
        </div>

    );
}

// export default MentorScreen;
