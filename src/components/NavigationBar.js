import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark className='nav-background' color='success' fixed='top' expand='md' >
        <NavbarBrand href="/" className='nav-color'>
          
          Where Was That?
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className='nav-color cust-link-style me-2' tag={RRNavLink} to="/">
              <i class="fa-solid fa-house fa-lg" style={{color: "#1C3424"}}></i>
              Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >
              <i class="fa-solid fa-file fa-lg" style={{color: "#1C3424"}}></i>
                Project Page
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='nav-color cust-link-style' nav caret>
                <i class="fa-solid fa-list-check fa-lg me-1" style={{color: "#1C3424;"}}></i>
                Exercises
              </DropdownToggle>
              <DropdownMenu right >
                <DropdownItem>
                  <NavLink >
                    Option 1
                  </NavLink>
                </DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink >
                    All Exercises
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className='nav-color'>By Michael Kaffel</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;