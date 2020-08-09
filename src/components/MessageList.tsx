import React, {Component} from "react";
// import { Message } from "../pages/MessagesPage";
import "../pages/styles/MessagesPage.css"

interface MessageListProps {
    className: string,
    userMessageList: Message[]
}

export interface Message{
    user:string
    text:string
}

interface MessageTableProps{
    messageList: Message[]
}

class MessageComponent extends Component<MessageTableProps, Message>{
    render(){
        return(
        <p>
        {this.dataRows()}
        </p>
        )
    }

    private dataRows(){
        return(
            this.props.messageList.map((items) =>
            <tr><td>{items.user}</td><td>{items.text}</td></tr>
            )
        )
    }
}

export default MessageComponent;
// export const MessageList = ( props: MessageListProps) => {
//     return(
//         <h2>
//             {this.dataRows()}
//         </h2>
    
//     )

//     private dataRow(){
//         return (
//             this.props.messageList.map((items) =>
//             <tr></tr>
//             )
//         )
//     }
// }