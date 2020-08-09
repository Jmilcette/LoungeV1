import React from 'react';
import { Nav, Navbar, NavDropdown, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { pages } from '../App';
import { HouseDoorFill, Compass, PersonCircle, ChatSquareTextFill, PlusSquareFill } from 'react-bootstrap-icons';

interface NavBarProps {
  changePage: (page: pages) => void;
}

export default class NavNav extends React.Component<NavBarProps> {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand className="brand" href="#home"><p><img className="logoss" src={require('../images/WhiteLoungeLogo.png')} /></p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="button">Search</Button>
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Navbar buttons with page changing onclicks */}
            <Nav.Link className="nav-items" onClick={(e: any) => this.props.changePage(pages.HomePage)}><HouseDoorFill /></Nav.Link>
            <Nav.Link className="nav-items" onClick={(e: any) => this.props.changePage(pages.ExplorePage)}><Compass /></Nav.Link>
            <Nav.Link className="nav-items" onClick={(e: any) => this.props.changePage(pages.MessagesPage)}><ChatSquareTextFill /></Nav.Link>
            <Nav.Link className="nav-items" onClick={(e: any) => this.props.changePage(pages.Thread)}><PlusSquareFill /></Nav.Link>
            <Dropdown alignRight title="Dropdown right" id="dropdown-menu-align-right">
              <Dropdown.Toggle className="nav-link " id="dropdown-basic">
                <PersonCircle />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* Dropdown menu with page changing onclicks */}
                <Dropdown.Item onClick={(e: any) => this.props.changePage(pages.ProfilePage)}>Your Profile</Dropdown.Item>
                <Dropdown.Item onClick={(e: any) => this.props.changePage(pages.LoginPage)}>Login</Dropdown.Item>
                <Dropdown.Item onClick={(e: any) => this.props.changePage(pages.SignUpPage)}>Sign Up</Dropdown.Item>
                <Dropdown.Item href="#action/3.3">Help</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action/3.4">Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
