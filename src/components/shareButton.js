import React, { useState } from "react";
import { render } from "@testing-library/react";

class LikeButton extends React.Component {
constructor(props){
    super(props);
    this.state = {
        count: Math.floor(Math.random() * 30) + 3
    }
}
  comment = () => {
  }
  
  render() {
    return (
        <li className="list-inline item mr-5 ml-5 justify-content-center align-self-center">
        <button className="btn p-0 align-self-center justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="55"
            height="55"
          >
            <path
              fill-rule="evenodd"
              d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
            ></path>
          </svg>
          <h6>{this.state.count}</h6>
        </button>
        
      </li>
    );
  }
}

export default LikeButton;