import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { setDescription } from '../components/redux';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';

//Mapping the state to the component props; this component prop = this redux state
const mapStateToProps = (state) => {
  return {
    description: state
  }
}

//
const mapDispatchToProps = (dispatch) => {
  return {
    setDescription: (text) => {
      //Sends the action to the store to update 
      dispatch(setDescription(text))
    }
  }
}

type profileUpdateOneProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export class ProfileUpdateOne extends React.Component<profileUpdateOneProps, { show: boolean }> {

  constructor(props: profileUpdateOneProps) {
    super(props);
    this.state = { show: false };

  }
  private handleClose = () => {
    this.setState({ show: false })
  };

  private handleShow = () => {
    this.setState({ show: true })
  };

  private onChange = (ev: React.ChangeEvent<any>) => {
    this.props.setDescription("Hey it worked!")
  }

  render() {
    return (
      <>
        <Button className="button" variant="primary" onClick={this.handleShow}>
          Edit Profile
          </Button >

        <Modal show={this.state.show} onHide={this.handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Update Your Bio</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  Website
                    </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <Form>
              <InputGroup.Prepend>
                <InputGroup.Text>Bio</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl onSubmit={this.onChange} value={this.props.description} id="basic-url" aria-describedby="basic-addon3" />
            </Form>

          </Modal.Body>

          <Modal.Footer>
            <Button className="button" variant="secondary" onClick={this.handleClose}>
              Cancel
              </Button>
            <Button type="submit" className="button" variant="primary" onClick={this.onChange}>
              Save Changes
            </Button>
          </Modal.Footer>
          {this.props.setDescription}
        </Modal>
      </>
    );
  }

}

//Connects component to the redux store
export const ProfileUpdate = connect(mapStateToProps, mapDispatchToProps)(ProfileUpdateOne)