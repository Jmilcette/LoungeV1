import React from "react";
import { pages } from "../App";
import "./styles/MessagesPage.css";
import { Message } from "../components/MessageList";
import { MentorScreen } from "../components/MentorScreen";
import { MentorScreen2 } from "../components/MentorScreen2";
import { MentorScreen3 } from "../components/MentorScreen3";
import {Star, StarFill} from"react-bootstrap-icons"
// import MentorChatScreen from "../components/MentorChatScreen";

// export interface Message{
//     user: string,
//     text: string
// }

// const messages: Message[] = [
//     {user:"Linda", text: "video"},
//     {user:"Alex", text:"Nice video! Thanks for sharing! :)" },
//     {user:"Emily", text:"I have to"},
//     {user:"Andre", text: "Powerful message!"},
//     {user:"Susan", text:"I'm gonna share this video to others"}
// ]



interface MessagesPageProps {
    changePage: (page: pages) => void;
}
interface IState {
    userListClicked: boolean;
    secondClicked:boolean;
    mentorClicked:boolean;
}

export class MessagesPage extends React.Component<MessagesPageProps, IState> {

    constructor(props) {
        super(props);
        this.state = { userListClicked: false , secondClicked:false, mentorClicked:false}
        // this.state = {secondClicked:false}
    }

    handleUserClick() {
        this.setState({ userListClicked: !this.state.userListClicked })
    }

    handleSecond(){
        this.setState({secondClicked: !this.state.secondClicked})
    }

    handleThird(){
        this.setState({mentorClicked: !this.state.mentorClicked})
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className="pageTitle"> Messages </h2>
                    <aside>
                        <ol className="UserList">
                            <li onClick={(e) => this.handleUserClick()}>Pinewood Middle School</li>
                            <li onClick={(e) => this.handleSecond()}>Assembly Team</li>
                            <li onClick={(e) => this.handleUserClick()}>Susan <StarFill/> </li>
                            <li onClick={(e) => this.handleUserClick()}>Social Studies Department</li>
                            <li onClick={(e) => this.handleUserClick()}>Fire Drill Team</li>
                            <li onClick={(e) => this.handleUserClick()}>Mark</li>
                            <li onClick={(e) => this.handleUserClick()}>Principal Henry</li>
                            <li onClick={(e) => this.handleThird()}>Gabe <StarFill /></li>
                            <li onClick={(e) => this.handleThird()}>Todd</li>
                            {/* <li onClick={(e) => this.handleSecond()}>Policeman On The Rise!</li> */}
                        </ol>
                    </aside>

                    {this.state.userListClicked ? <MentorScreen /> : <></>}
                    {this.state.secondClicked ? <MentorScreen2 /> : <></>}
                    {this.state.mentorClicked? <MentorScreen3 /> : <></>}
                    {/* {this.state.userListClicked ? <MentorScreen /> : <></>} */}
                    {/* {this.state.userListClicked ? <MentorScreen /> : <></>} */}
                    {/* {this.state.userListClicked ? <MentorScreen /> : <></>} */}
                </div>

            </div>
          
        );
    }

    message(): Message[] {
        return [
            { user: "Linda", text: "video" },
            { user: "Alex", text: "Nice video! Thanks for sharing! :)" },
            { user: "Emily", text: "I have to" },
            { user: "Andre", text: "Powerful message!" },
            { user: "Susan", text: "I'm gonna share this video to others" }
        ]
    }
}
