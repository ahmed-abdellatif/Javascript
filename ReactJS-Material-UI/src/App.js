import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import {lightBlue600} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';


import 'typeface-roboto'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div>
        <AppBar style={{backgroundColor: lightBlue600}}
          title="Material-UI & React"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />

        <Drawer overlayStyle={{backgroundColor: 'rgba(149,199,233,.8)'}}
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}
        >
          <AppBar title="Material-UI & React" onLeftIconButtonTouchTap={this.toggleDrawer}
            style={{backgroundColor: lightBlue600}}/>
          <MenuItem
            primaryText="Home"
            leftIcon={<ActionHome />}
            containerElement={<Link to="/" />}
            onTouchTap={() => {
              this.toggleDrawer()
            }}
          />
          <MenuItem
            primaryText="About Me"
            leftIcon= {<FontIcon className="material-icons">account_circle</FontIcon>}
            containerElement={<Link to="/about" />}
            onTouchTap={() => {
              this.toggleDrawer()
            }}
          />
          <MenuItem
            primaryText="Web Development"
            leftIcon= {<FontIcon className="material-icons">computer</FontIcon>}
            containerElement={<Link to="/webdevelopment" />}
            onTouchTap={() => {
              this.toggleDrawer()
            }}
          />
          <MenuItem
            primaryText="Learn More"
            leftIcon= {<FontIcon className="material-icons">language</FontIcon>}
            containerElement={<Link to="/LearnMore" />}
            onTouchTap={() => {
              this.toggleDrawer()
            }}
          />
          <MenuItem
            primaryText="Contact"
            leftIcon= {<FontIcon className="material-icons">computer</FontIcon>}
            containerElement={<Link to="/contact" />}
            onTouchTap={() => {
              this.toggleDrawer()
            }}
          />

        </Drawer>
        <div style={{ textAlign: 'center' }}>
          {this.props.children}

        </div>
      </div>
    )
  }
}

export default App
