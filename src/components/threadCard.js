import React, { useState } from "react";
import LikeButton from "../components/likeButton";
import CommentButton from "../components/commentButton";
import ShareButton from "../components/shareButton";
import { render } from "@testing-library/react";

class Card2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "pictures",
      count: Math.floor(Math.random() * 50) + 5,
      imagePosts: [
        {
          title: "Classroom Setup",
          image: "src/images/classroom-setup.jpg",
          description: "This is my classroom setup for seminars",
          hastags: "#classroom #seats #setup #organization",
        },
      ],
    };
  }

  render() {
    return (
      <div className="card mb-5">
        <div class="card-header">Classroom Setup</div>
        <div className="card-body p-0">
          <div className="embed-responsive embed-responsive-1by1">
            <img
              className="embed-responsive-item"
              src="https://teacheractivist.files.wordpress.com/2019/12/advisory-group.jpg?w=825&h=510&crop=1"
              
            ></img>
          </div>
          <ul class="list-group">
            <div className="d-flex justify-content-left p-1">
              <h5 className="card-title">This is my classroom setup for seminars</h5>
            </div>
            <li class="list-group-item">#classroom #setup #organization #desks</li>
          </ul>
          <div className="d-flex justify-content-center align-self-center">
            <ul className="list-inline w-100" id="ul1">
              <div className="btn-toolbar justify-content-center align-self-center">
                <li className="list-inline item mr-5 justify-content-center align-self-center ml-5">
                  <button className="btn">
                    <div
                      className="rounded-circle overflow-hidden d-flex align-self-center border border"
                      id="profilePic"
                    >
                      <img src="https://picsum.photos/50/50"></img>
                    </div>
                    <h6>James</h6>
                  </button>
                  
                </li>

                <LikeButton></LikeButton>
                <CommentButton></CommentButton>
                <ShareButton></ShareButton>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Card2;
