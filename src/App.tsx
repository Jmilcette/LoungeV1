import React from "react";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { ExplorePage } from "./pages/ExplorePage";
import { MessagesPage } from "./pages/MessagesPage";
import { ProfilePage } from "./pages/ProfilePage";
import {SignUpPage} from "./pages/SignUpPage";
import {LandingPage} from "./pages/LandingPage";
import NavNav from "./components/NavBar";
import { Thread } from "./pages/Thread";


export enum pages {
  LoginPage,
  HomePage,
  ExplorePage,
  MessagesPage,
  ProfilePage,
  SignUpPage,
  Thread,
  LandingPage
}

interface AppState {
  currentPage: pages;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { currentPage: pages.LandingPage };
  }
  render() {
      return <div className="App">
        <NavNav changePage={this.changeScreen}/>
        <header>
          <div>{this.getCurrentScreen()}</div>
        </header>

      </div>
  }

  private getCurrentScreen = (): JSX.Element => {
    switch (this.state.currentPage) {
      case pages.LoginPage:
        return <LoginPage changePage={this.changeScreen} />;
      case pages.HomePage:
        return <HomePage changePage={this.changeScreen} />;
      case pages.ExplorePage:
        return <ExplorePage changePage={this.changeScreen} />;
      case pages.MessagesPage:
        return <MessagesPage changePage={this.changeScreen} />;
      case pages.ProfilePage:
        return <ProfilePage changePage={this.changeScreen} />;
      case pages.SignUpPage:
        return <SignUpPage changePage = {this.changeScreen}/>;
      case pages.Thread:
        return <Thread changePage = {this.changeScreen} />;     
      case pages.LandingPage:
        return <LandingPage changePage = {this.changeScreen} />;   
    }
  };

  private changeScreen = (nextPage: pages) => {
    this.setState((state, props) => ({
      currentPage: nextPage,
    }));
  };
}

export default App;
