import React from "react";
import { Item, Grid, Image, Menu } from "semantic-ui-react";
import { bindActionCreators } from 'redux';
import Connect from "../../utils/connect";
import responsive_icon from '../../assets/responsive-icon.png';
import app_store from '../../assets/app-store.png';
import instagram_icon from '../../assets/instagram-icon.png';
import facebook_icon from '../../assets/facebook-icon.png';
import twitter_icon from '../../assets/twitter-icon.png';
import logo_ute from '../../assets/logo-ute.png';
import './styles.css';

class Footer extends React.Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div className="footer">
        <Grid>
          <Grid.Column floated='left' width={6} verticalAlign='bottom' className="left-footer">
            <Item.Group>
              <Item>
                <Item.Image size='tiny' src={responsive_icon} />
                <Item.Content verticalAlign='middle'>
                  <Item.Description>Optimised for all devices</Item.Description>
                </Item.Content>
                <Item.Image className="last-img" size='tiny' src={app_store} />
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column width={4} className="footer-menu" centered>
            <p>Copyright @ 2018</p>
            <Menu secondary>
              <Menu.Item name='About' />
              <Menu.Item name='Policies' />
              <Menu.Item name='Sitemap' />
              <Menu.Item name='Contact' />
            </Menu>
          </Grid.Column>
          <Grid.Column floated='right' width={6} verticalAlign='bottom' className="right-footer">            
            <Image src={instagram_icon}  ui={false} verticalAlign='bottom' size={isMobile ? 'tiny' : 'small'} />
            <Image src={facebook_icon} ui={false} verticalAlign='bottom' size={isMobile ? 'tiny' : 'small'} />
            <Image src={twitter_icon} ui={false} verticalAlign='bottom' size={isMobile ? 'tiny' : 'small'} />
            <Image src={logo_ute} ui={false} verticalAlign='bottom' size={isMobile ? 'tiny' : 'small'} />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({  
}, dispatch);

export default Connect(
  null,
  mapDispatchToProps
)(Footer);