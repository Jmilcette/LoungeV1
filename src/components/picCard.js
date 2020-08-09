import React, { useState } from "react";
import LikeButton from "./likeButton";
import CommentButton from "./commentButton";
import ShareButton from "./shareButton";
import { render } from "@testing-library/react";
import "./filterBy";

class picCard extends React.Component {
  render() {

    return (
      <div className="card mb-5 ">
        <h4 class="card-header text-center">{this.props.title}</h4>
        <div className="card-body p-0">
          <div className="embed-responsive embed-responsive-1by1">
            <img
              className="embed-responsive-item"
              src={this.props.image}

            ></img>
          </div>
          <ul class="list-group">
            <div className="d-flex text-left p-1">
              <h5 className="card-title">{this.props.description}</h5>
            </div>
            <li class="list-group-item text-left">{this.props.hashtags}</li>
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
                      <img className="smallImage" src={this.props.profile}></img>
                    </div>
                    <h6>{this.props.name}</h6>
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
export default picCard;
