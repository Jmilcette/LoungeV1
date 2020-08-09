import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import "../pages/styles/MentorScreen.css";


export  const MentorScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Pine',
            image: 'Image for user',
            message: 'We are having a Teams meeting today at 4 PM to practice explain the new plan to approach bad student behavior.'
        },

        {
            name: "Pine",
            image: 'Image afain',
            message: "https://teams.microsoft.com/l/meetup-join/93580479324"

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
            <h3 className="chatScreen_timeStamp">Pinewood Middle School </h3>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar
                            className="chatScreen_image"
                            alt={message.name}
                            src={require("../images/placeholder.png")} 
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
