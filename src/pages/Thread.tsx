import React from "react";
import { pages } from "../App";
import "../pages/styles/Thread.css";
import styled from "styled-components";
import FilterBy from "../components/filterBy";
import BootstrapCard from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from 'react-bootstrap/Image';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from "react-bootstrap";
import PicCard from "../components/picCard";
import TextCard from '../components/textCard';



//Derived from HomePage

const MainWrapper = styled.section`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 130px;
`;

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

const TopButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 30px;
`;


// code to display Thread
interface ThreadProps {
  changePage: (page: pages) => void;
}

export class Thread extends React.Component<ThreadProps> {
  render() {
    return (
      <MainWrapper>
        <div>
          <div className="btn-toolbar justify-content-center p-3">
            <Image //width="60rem"// class="center"
              height={350}
              width={800}
              className="round"
              src="https://miro.medium.com/max/1200/0*gmRe3TpjwHg807OC.png" />
          </div>
          <div className="theBox">A community for the teachers of Seattle Public Schools</div>
          <div className="space">
            <TopButtons>
              <DropdownButton id="dropdown-basic-button" title="Trending" className="spaced">
                <Dropdown.Item href="#/action-1">New</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Top</Dropdown.Item>
                < Dropdown.Item href="#/action-3">Archives</Dropdown.Item>
              </DropdownButton>
              <button
                type="button"
                className="btn btn-outline-dark btn-lg mr-5"
              >
                Join
                      </button>
            </TopButtons>
          </div>
          <Horizontal>
            <BootstrapCard
              className="ml-5 mr-5"
              style={{ width: "18rem", height: "15rem" }}
            >
              <BootstrapCard.Header>Your Communities</BootstrapCard.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <button
                    type="button"
                    className="btn btn-md"
                  >
                    Washington Public Schools
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button
                    type="button"
                    className="btn btn-md"
                  >
                    JKP High Math Department
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button
                    type="button"
                    className="btn btn-md"
                  >
                    Retired Teachers
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button
                    type="button"
                    className="btn btn-md"
                  >
                    Find More Communities
                  </button>
                </ListGroup.Item>
              </ListGroup>
            </BootstrapCard>
            <div className="d-flex flex-column mt-2 mb-4" style={{ width: "30rem" }}>
              <TextCard
                profile="http://placeimg.com/50/50/tech"
                title="Music Friday"
                text="To make Fridays more fun for the students and a day they look forward to, I like to reward them for a good week by playing background music while they are working. I even let them choose what songs they want to hear that day as long as they are clean."
                hashtags="#fun #games #test #kahoot"
                name="James"
              ></TextCard>
              <PicCard
                profile="http://placeimg.com/50/50/tech"
                title="Classroom Setup"
                image="https://ncte.org/wp-content/uploads/2018/09/Classroom-community-1024x683.jpg"
                description="This is my classroom setup for seminars"
                hashtags="#classroom #setup #organization #seminar #students"
                name="James"
              ></PicCard>
              <PicCard
                profile="http://placeimg.com/50/50/tech"
                title="Getting Students Attention"
                image="https://debbiediller.files.wordpress.com/2009/09/using-tambourine-to-get-stu.jpg?w=225&h=300"
                description="I am able to get my students' attention by using a tambourine"
                hashtags="#attention #classroom #noise #focus"
                name="James"
              ></PicCard>
              <TextCard
                profile="http://placeimg.com/50/50/tech"
                title="Bathroom Rule"
                text="I like using the 'Bathroom Rule' in my classroom, which is a rule that does not let any of my students go to the bathroom during the first or last 10 minutes of class because those time periods are when the most key information is being given out."
                hashtags="#fun #games #test #kahoot"
                name="James"
              ></TextCard>
              <PicCard
                profile="http://placeimg.com/50/50/tech"
                title="Desk Setup"
                image="https://i.pinimg.com/originals/18/7a/f5/187af56528232bcece19a15e57e20a0f.jpg"
                description="This is how I organize my desk."
                hashtags="#classroom #setup #organization #desk #teacher"
                name="James"
              ></PicCard>
              <TextCard
                profile="http://placeimg.com/50/50/tech"
                title="Virtual Field Trips"
                text="In light of the coronavirus, in-person field trips in most parts of the country will be cancelled. To make up for this, I am being creative by making a virtual field trip for them. There are plenty of interactive virtual field trip websites that make it seem like you are there in person! You should try them out!"
                hashtags="#virtual #fieldtrip #internet #stayayhome #coronavirus"
                name="James"
              ></TextCard>
              <PicCard
                profile="http://placeimg.com/50/50/tech"
                title="Duct Tape Pencil Pouch"
                image="https://www.booksourcebanter.com/wp-content/uploads/Duct-Tape-pensils.jpg"
                description="I used duct tape to make a pencil pouch so that no more pencils roll on the floor and get lost!"
                hashtags="#desk #tape #pencils #students #organization"
                name="James"
              ></PicCard>
              <TextCard
                profile="http://placeimg.com/50/50/tech"
                title="Fun Ways to Test Understanding"
                text="My favorite ways to test my students' understanding of any topic is to use Kahoot, Quizzizz, or Quizlet Live."
                hashtags="#fun #games #test #kahoot"
                name="James"
              ></TextCard>
            </div>
          </Horizontal>
        </div>
      </MainWrapper>
    );
  }
}
//Next...fill in data with videos, pics and text posts and show minimum three comments each
