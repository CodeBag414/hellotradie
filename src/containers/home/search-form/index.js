import React from 'react';
import { withRouter } from 'react-router-dom';
import { Connect } from '../../../utils';
import { Container, Form, Grid } from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import './styles.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trade: '',
      postcode: '',
      memberName: '',
      searchBy: 'trade',
      errors: []
    };
  }

  componentWillReceiveProps(nextProps) {    
    const errors = [];
    this.setState({ errors });
  }

  validateFields = () => {
    return true;
  }

  changeForm = () => {
    this.setState({ searchBy: this.state.searchBy === 'trade' ? 'memberName' : 'trade' });
  }

  handleSubmit = () => {
    if (this.validateFields()) {
      console.log('validated');
    }
  }

  renderSearchForm() {
    const { trade, postcode, memberName, searchBy } = this.state;
    const formByTrade = [
      <Grid.Column width={6} key="trade">
        <Form.Input
          placeholder="Trade (eg Plumber)"
          type="text"
          name="trade"
          value={trade}
          onChange={this.handleChange}
        />
      </Grid.Column>,
      <Grid.Column width={6} key="postcode">
        <Form.Input
          placeholder="Postcode"
          type="text"
          name="postcode"
          value={postcode}
          onChange={this.handleChange}            
        />
      </Grid.Column>
    ];
    const formByName = [
      <Grid.Column width={12} key="membername">
        <Form.Input
          placeholder="Member's name (company or tradesperson's name)"
          type="text"
          name="memberName"
          value={memberName}
          onChange={this.handleChange}
        />
      </Grid.Column>
    ];

    return searchBy === 'trade' ? formByTrade : formByName;
  }
  render() {
    const { errors } = this.state;
    let trade = '';
    let postcode = '';

    return (
      <div className="search-form">        
        <div className="search-wrapper">
          <Container>
            <h2>Perth's best tradies</h2>
            <h3>As rated by other customers. Finally.</h3>
            <Form
              onSubmit={this.handleSubmit}
              error={!isEmpty(errors)}
              noValidate
            >
              <Grid>
                { this.renderSearchForm() }
                <Grid.Column width={4}>
                  <Form.Button
                    content="Search"
                    fluid
                  />
                </Grid.Column>
              </Grid>
            </Form>
            <button className="search-wrapper--btn-switch" onClick={() => this.changeForm()}>
              Or search {this.state.searchBy !== 'trade' ? 'by trade' : 'a member by name'} &gt;
            </button>
          </Container>
        </div>
        <div className="review-bar">
          <Container className="review-bar--content">
            <p className="review-bar--member-info">
              Brad - Element Plumbing & Gas - Scarborough (Member since 2017)
            </p>
            <div className="review-bar--caption">
              <p>
                Every review published helps a charity of your choice - Thank you!
              </p>
            </div>
          </Container>
          <div className="review-bar--bg-bar">
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Connect(
  null
)(SearchForm));
