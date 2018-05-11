import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Connect } from '../../../utils';
import { Container, Form, Grid } from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import './styles.css';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div className="review-section m-t-2 m-b-2">
        <Container>
          <div className="review-section__button-block m-b-2">            
            <div className="review-section__buttons-wrapper">
              <Link className="review-section__balloon m-l-1 m-r-1" to="/join">
                I'm a <span>tradie</span>.<br />I think I need to join
              </Link>
              <Link className="review-section__balloon m-l-1 m-r-1" to="/description">
                I'm a <span>customer</span>.<br /> Why use HelloTradie?
              </Link>
            </div>
          </div>
          <div className="review-section__quotes-block">
            <p>
              "Finding a good tradie is like throwing darts at a dartboard blindfolded. It's really hard"
            </p>            
            <p>
              - Mt Hawthorn renovator 2015
            </p>
          </div>
        </Container>
      </div>
    )
  }
}

export default withRouter(Connect(
  null
)(ReviewSection));
