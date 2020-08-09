import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { render } from "@testing-library/react";
import { Shuffle } from "react-bootstrap-icons";
import PicCard from "../components/picCard";
import TextCard from "../components/textCard";
import CardList from "../components/cardList";
import styled from "styled-components";

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

const TopButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 130px;
`;

class FilterBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "pictures",
      count: Math.floor(Math.random() * 50) + 5,
      textStatus: false,
      picsStatus: true,
      vidsStatus: false,
    };
  }

  filterText = () => {
    this.setState({ textStatus: true });
    this.setState({ picsStatus: false });
    this.setState({ vidsStatus: false });
  };
  filterPics = () => {
    this.setState({ textStatus: false });
    this.setState({ picsStatus: true });
    this.setState({ vidsStatus: false });
  };
  filterVideos = () => {
    this.setState({ textStatus: false });
    this.setState({ picsStatus: false });
    this.setState({ vidsStatus: true });
  };

  showCards = (textStatus, picsStatus) => {
    if (picsStatus) {
      return (
        <div className="d-flex flex-column mt-2 mb-4" style={{ width: "53rem" }}>
          <PicCard
            profile="http://placeimg.com/50/50/any"
            title="Classroom Setup"
            image="https://ncte.org/wp-content/uploads/2018/09/Classroom-community-1024x683.jpg"
            description="This is my classroom setup for seminars"
            hashtags="#classroom #setup #organization #seminar #students"
            name="James"
          ></PicCard>
          <PicCard
            profile="http://placeimg.com/50/50/people"
            title="Getting Students Attention"
            image="https://debbiediller.files.wordpress.com/2009/09/using-tambourine-to-get-stu.jpg?w=225&h=300"
            description="I am able to get my students' attention by using a tambourine"
            hashtags="#attention #classroom #noise #focus"
            name="Ryan"
          ></PicCard>
          <PicCard
            profile="http://placeimg.com/50/50/nature"
            title="Desk Setup"
            image="https://i.pinimg.com/originals/18/7a/f5/187af56528232bcece19a15e57e20a0f.jpg"
            description="This is how I organize my desk."
            hashtags="#classroom #setup #organization #desk #teacher"
            name="Emily"
          ></PicCard>
          <PicCard
            profile="http://placeimg.com/50/50/tech"
            title="Duct Tape Pencil Pouch"
            image="https://www.booksourcebanter.com/wp-content/uploads/Duct-Tape-pensils.jpg"
            description="I used duct tape to make a pencil pouch so that no more pencils roll on the floor and get lost!"
            hashtags="#desk #tape #pencils #students #organization"
            name="Olivia"
          ></PicCard>
        </div>
      );
    }
    if (textStatus) {
      return (
        <div
          className="d-flex flex-column mt-2 mb-4"
          style={{ width: "53rem" }}
        >
          <TextCard
            profile="http://placeimg.com/50/50/architecture"
            title="Virtual Field Trips"
            text="In light of the coronavirus, in-person field trips in most parts of the country will be cancelled. To make up for this, I am being creative by making a virtual field trip for them. There are plenty of interactive virtual field trip websites that make it seem like you are there in person! You should try them out!"
            hashtags="#virtual #fieldtrip #internet #stayayhome #coronavirus"
            name="Sarah"
          ></TextCard>
          <TextCard
            profile="http://placeimg.com/50/50/tech"
            title="Fun Ways to Test Understanding"
            text="My favorite ways to test my students' understanding of any topic is to use Kahoot, Quizzizz, or Quizlet Live."
            hashtags="#fun #games #test #kahoot"
            name="Gary"
          ></TextCard>
          <TextCard
            profile="http://placeimg.com/50/50/nature"
            title="Bathroom Rule"
            text="I like using the 'Bathroom Rule' in my classroom, which is a rule that does not let any of my students go to the bathroom during the first or last 10 minutes of class because those time periods are when the most key information is being given out."
            hashtags="#bathroom #rules #time #students"
            name="Tim"
          ></TextCard>
          <TextCard
            profile="http://placeimg.com/50/50/people"
            title="Music Friday"
            text="To make Fridays more fun for the students and a day they look forward to, I like to reward them for a good week by playing background music while they are working. I even let them choose what songs they want to hear that day as long as they are clean."
            hashtags="#fun #music #friday #students"
            name="Tiffany"
          ></TextCard>
        </div>
      );
    }
  };
  render() {
    // function shuffle(text) {
    //   for (let i = text.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * i);
    //     const temp = text[i];
    //     text[i] = text[j];
    //     text[j] = temp;
    //   }
    // }
    // this.state.text = shuffle(this.state.text);
    return (
      <div className="ml-5  align-self-center">
        <Horizontal>
          <TopButtons className="justify-content-left" id="ButtonsTop">
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg mr-5 ml-3"
            >
              Following
            </button>
          </TopButtons>
          <TopButtons className="justify-content-center" id="ButtonsTop">
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg ml-5 mr-5"
            >
              Recommended
            </button>
          </TopButtons>

          <Dropdown className="text-right justify-content-center ml-5 mr-3">
            <Dropdown.Toggle variant="secondary float-top" id="dropdown-basic">
              Filter By:
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={this.filterText}>
                Text
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={this.filterPics}>
                Pictures
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={this.filterVideos}>
                Videos
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Attachments</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Horizontal>
        {this.showCards(this.state.textStatus, this.state.picsStatus)}
      </div>
    );
  }
}

export default FilterBy;
