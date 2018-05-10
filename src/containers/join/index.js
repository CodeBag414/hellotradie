import React from 'react';
import { withRouter } from 'react-router-dom';
import { Connect } from '../../utils';
import { Container, Header, Grid, Form, Button, Checkbox } from 'semantic-ui-react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import './styles.css';
import 'react-notifications/lib/notifications.css';

import DoIQualify from './DoIQualify';
import WhatDoIGet from './WhatDoIGet';

class Join extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0
    };
  }

  componentDidMount() {
    setTimeout(function() {
      NotificationManager.info('', 'Nothing to lose. Everything to gain.', 30000)
    }, 30000);
  }

  onClickTabItem = (index) => {
    this.setState({ tabIndex: index });
  }

  renderHeaderBar = () => {
    return this.state.tabIndex === 0
      ? <Header as="h5" textAlign="center" className="sub-header">Apply to join</Header>
      : <div className="tab-header">
        <Container>
          <Button.Group widths="4" basic>
              <Button toggle active={this.state.tabIndex === 1} onClick={() => this.onClickTabItem(1)}>Do I qualify?</Button>
              <Button toggle active={this.state.tabIndex === 2} onClick={() => this.onClickTabItem(2)}>What do I get?</Button>
              <Button toggle active={this.state.tabIndex === 3} onClick={() => this.onClickTabItem(3)}>What do others say?</Button>
              <Button toggle active={this.state.tabIndex === 4} onClick={() => this.onClickTabItem(4)}>FAQs</Button>
          </Button.Group>
        </Container>
      </div>;
  }

  IndexTabPan = () => {
    return (
      <div className="pan">
        <div>
          <p><b>Only the best tradies are endorsed on this site</b></p>
          <p>Our reputation depends on it.  If you are proud of your work and you want to amplify your great reputation to Perth customers, we are keen to hear from you.</p>
          <p>Please complete the form on this page and we will be in touch with you very soon (most often, same day).</p>
        </div>
        <div className="first-line">
          <button onClick={() => this.onClickTabItem(1)} className="index-button">Do I qualify?</button>
        </div>
        <div className="second-line">
          <button onClick={() => this.onClickTabItem(2)} className="index-button">What do I get?</button>
          <button onClick={() => this.onClickTabItem(3)} className="index-button">What do others say?</button>
        </div>
        <div className="third-line">
          <button onClick={() => this.onClickTabItem(4)} className="index-button">FAQs</button>
        </div>
      </div>
    )
  }

  renderTabPans = () => {
    switch(this.state.tabIndex) {
      case 0: return this.IndexTabPan()
      case 1: return <DoIQualify />
      case 2: return <WhatDoIGet />
      case 3:
      case 4:
    }
  }

  render() {
    return (
      <Container fluid className="page page--join">
        <Header as="h1" textAlign="center" className="page-title">Are you one of Perth's best tradies?</Header>
        { this.renderHeaderBar() }
        <Container>
          <Grid doubling columns={2}>
            <Grid.Column>
              { this.renderTabPans() }
            </Grid.Column>
            <Grid.Column>
              <Form className="join-form">
                <Form.Input label='Company Name' />
                <Form.Input label='Your Full Name' />
                <Form.Input label='Trade Category' />
                <Form.Input label='Address' />
                <Form.Input label='Contact Number' />
                <Form.Input label='Email Address' />
                <label>How we may contact you in future?</label>
                <Form.Group inline>
                  <Form.Field><Checkbox label='I agree to the Terms and Conditions' /></Form.Field>
                  <Form.Field><Checkbox label='Telephone' /></Form.Field>
                  <Form.Field><Checkbox label='Email' /></Form.Field>
                  <Form.Field><Checkbox label='Letter (post)' /></Form.Field>
                </Form.Group>
                <Button type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Container>
        <NotificationContainer />
      </Container>
    );
  }
}

export default withRouter(Connect(
  null
)(Join));
