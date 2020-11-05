import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Calculate from './Calculate';
import Status from './Status';

const Menu = () => <h1>Menu</h1>
const YourHealth = () => <h1>Your Health</h1>
const AboutUs = () => <h1>About us</h1>


const Navbar = styled.div`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  color: white;
  padding: 10px ;
  align-items: center;
  height: 28px;
`;

const Main = styled.div`
  height: 100vh;
  padding-top: 48px;
  background-color: lightblue;
`;

const NavbarEnd = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 10px;
`;

const Navendmenu = styled.div`
  background-color: red;
  display: block;
  padding: 15px 16px;
  color: white;
  
`;

class App extends Component {
  render() {
    return (
      <div >
        <nav>
          <Navbar>
            <div>Health Calculate</div>
            <NavbarEnd>
                <NavLink  exact to="/" ><Navendmenu>Home</Navendmenu></NavLink>
                <NavLink to="/menu" ><Navendmenu>Menu</Navendmenu></NavLink>              
                <NavLink to="/your_health" ><Navendmenu>Your Health</Navendmenu></NavLink>
                <NavLink to="/about_us" ><Navendmenu>About Us</Navendmenu></NavLink>
            </NavbarEnd>
          </Navbar>
        </nav>
        <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/your_health" component={YourHealth} />
          <Route path="/about_us" component={AboutUs} />
          <Route path="/calculate" component={Calculate} />
          <Route path="/status" component={Status} />
        </Switch>
        </Main>
      </div>
    );
  }
}

export default App;
