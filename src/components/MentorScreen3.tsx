import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import { Form, Button } from "react-bootstrap"
import "../pages/styles/MentorScreen.css";


export  const MentorScreen3 = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Gabe',
            image: 'Image for user',
            message: 'Hey Mandy, I am your new mentor. I noticed that you were struggling in trying to teach your students about the causes of the Civil War here is an article that I think can help with that.'
        },

        {
            name: "Gabe",
            image: 'Image afain',
            message: "https://www.ducksters.com/history/civil_war/causes_of_the_civil_war.php"

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
            <h3 className="chatScreen_timeStamp">Gabe (Mentor)</h3>
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
