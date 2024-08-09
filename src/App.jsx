import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AnimatedComponent from './components/AnimatedComponent';
import AudioPlayerComponent from './components/AudioPlayerComponent';
import AudioPlayerComponent2 from './components/AudioPlayerComponent2';
import AudioPlayerComponent3 from './components/AudioPlayerComponent3';
import ColorPickerComponent from './components/ColorPickerComponent';
import IconComponent from './components/IconComponent';
import DraggableComponent from './components/DraggableComponent';
import TypographyComponent from './components/TypographyComponent';
import ButtonToast from './components/ButtonToast';
import styled from 'styled-components';

// Styled components
const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 15px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <Router>
      <div>
      <Nav>
          <NavList>
            <NavItem>
              <NavLink to="/ToDoList">To-Do-List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/animation">Animation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/audio">Audio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/color">Color</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/icon">Icon</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/interaction">Interaction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/typography">Typography</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/toast">Toast</NavLink>
            </NavItem>
          </NavList>
        </Nav>

        <Routes>
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/animation" element={<AnimatedComponent />} />
          <Route path="/audio" element={<><AudioPlayerComponent /><AudioPlayerComponent2 /><AudioPlayerComponent3 /></>} />
          <Route path="/color" element={<ColorPickerComponent />} />
          <Route path="/icon" element={<IconComponent />} />
          <Route path="/interaction" element={<DraggableComponent />} />
          <Route path="/typography" element={<TypographyComponent />} />
          <Route path="/toast" element={<ButtonToast />} />
        </Routes>
      </div>
    </Router>

)
}

export default App
