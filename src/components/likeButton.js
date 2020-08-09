import React, { useState } from "react";
import { render } from "@testing-library/react";

class LikeButton extends React.Component {
constructor(props){
    super(props);
    this.state = {
        count: Math.floor(Math.random() * 250) + 10,
        switch: 0,
        color: "black"
    }
}
  like = () => {
    if(this.state.switch == 0){
    this.setState ({count: this.state.count + 1})
    this.setState ({switch: 1})
    this.setState({color: "red"})
    }
    else if(this.state.switch == 1){
        this.setState ({count: this.state.count - 1})
        this.setState ({switch: 0})
        this.setState({color: "black"})
        }
  }
  render() {
    return (
      <div>
        <li className="list-inline item mr-5 ml-5 justify-content-center align-self-center">
          <button id = "heart" className="btn pt-2 align-self-center" onClick={this.like}>
            <svg
              width="3.25em"
              height="3.25em"
              viewBox="0 0 16 16"
              className="bi bi-heart"
              fill={this.state.color}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>
            <h6>{this.state.count}</h6>
          </button>
          
        </li>
      </div>
    );
  }
}

export default LikeButton;
