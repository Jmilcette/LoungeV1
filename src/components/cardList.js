import React, {Component} from 'react';
import Card from "./picCard"
import HomePage from "../pages/HomePage"
import FilterBy from "../components/filterBy"
import { render } from '@testing-library/react';



class CardList extends React.Component{
    showContent = () => {
        const showPics = this.props.textStatus
        const showText = this.props.picsStatus
        if (showPics) {
            return(
                <div>
            <Card title = "Classroom Setup" image = "https://ncte.org/wp-content/uploads/2018/09/Classroom-community-1024x683.jpg" description = "This is my classroom setup for seminars" hashtags = "#classroom #setup #organization #desks" name = "James"></Card>
            <Card title = "Classroom Setup" image = "https://ncte.org/wp-content/uploads/2018/09/Classroom-community-1024x683.jpg" description = "This is my classroom setup for seminars" hashtags = "#classroom #setup #organization #desks" name = "Megan"></Card>
            <Card title = "Classroom Setup" image = "https://ncte.org/wp-content/uploads/2018/09/Classroom-community-1024x683.jpg" description = "This is my classroom setup for seminars" hashtags = "#classroom #setup #organization #desks" name = "Emily"></Card>
            </div>
            )
        }
        else if (showText)
        {
            return(
            <div>
            <Card title = "Should be text" image = "https://ncte.org/wp-content/uploads/2018/09/Classroom-community-1024x683.jpg" description = "This is my classroom setup for seminars" hashtags = "#classroom #setup #organization #desks" name = "James"></Card>
            </div>
            )
        }
        else{
            return(
            <div>
            <Card title = "Classroom Setup" image = "https://ncte.org/wp-content/uploads/2018/09/Classroom-community-1024x683.jpg" description = "This is my classroom setup for seminars" hashtags = "#classroom #setup #organization #desks" name = "James"></Card>
            <Card title = "Classroom Setup" image = "https://ncte.org/wp-content/uploads/2018/09/Classroom-community-1024x683.jpg" description = "This is my classroom setup for seminars" hashtags = "#classroom #setup #organization #desks" name = "Megan"></Card>
            <Card title = "Classroom Setup" image = "https://ncte.org/wp-content/uploads/2018/09/Classroom-community-1024x683.jpg" description = "This is my classroom setup for seminars" hashtags = "#classroom #setup #organization #desks" name = "Emily"></Card>
            </div>
            )
        }
      }
    
    render(){
    return(
        <div>
            {
          this.showContent
            }
        </div>
    );
}
}

export default CardList;