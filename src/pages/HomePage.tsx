import React from "react";
import { pages } from "../App";
import "../pages/styles/HomePage.css";
import styled from "styled-components";
import picCard from "../components/picCard";
import FilterBy from "../components/filterBy";
import BootstrapCard from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardList from "../components/cardList";
import NewPost from "../components/newPost"
// styled components!

const Title = styled.h2`
  font-family: Arial;
  color: black;
  font-weight: bold;
  padding: 40px;
  width: 100%;
  margin: auto;
`;

// const Button = styled.button`
//   font-family: san-serif;
// `;

const MainWrapper = styled.section`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 150px;
`;

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 130px;
`;

const Post = styled.div`
  background: white;
  margin: 20px;
`;

const Header = styled.h2`
  text-align: center;
`;

const ImgContent = styled.img``;

const Date = styled.span``;

// code to display Home Page
interface HomePageProps {
  changePage: (page: pages) => void;
}

export class HomePage extends React.Component<HomePageProps> {
  
  render() {
    return (
      <MainWrapper>
         
        <div>
        <Horizontal>
      <div className = "mt-5">
        <Vertical>
      <NewPost></NewPost>
        <BootstrapCard
              className="mt-3"
              style={{ width: "18rem", height: "15rem" }}
            >
              <BootstrapCard.Header className = "text-center">Notifications</BootstrapCard.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className = "text-center">
                  <button
                    type="button"
                    className="btn btn-md"
                  >Anna sent you a message
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button
                    type="button"
                    className="btn btn-md"
                  >
                    Your most recent post reached 250 likes
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button
                    type="button"
                    className="btn btn-md"
                  >
                    Sophia commented "I love this idea!"
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button
                    type="button"
                    className="btn btn-md"
                  >
                    Julian (Mentor) sent you a message
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button
                    type="button"
                    className="btn btn-md"
                  >
                    #organization is the most trending hashtag today
                  </button>
                </ListGroup.Item>
              </ListGroup>
            </BootstrapCard>
            </Vertical>
            </div>


          <div className="btn-toolbar justify-content-center p-3">
            
              <div className="ml-5 align-self-center">
                <FilterBy textStatus = {true} picsStatus = {false} vidsStatus = {false} ></FilterBy>
              </div>
            
          </div>

            {/* <div className="d-flex flex-column ml-5">
              
            </div> */}
          </Horizontal>
        </div>
      </MainWrapper>
    );
  }
}
