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
              <NavLink className='me-2' tag={RRNavLink} to="/">
              <i class="fa-solid fa-house fa-lg" style={{color: "#1C3424"}}></i>
              Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='me-2' tag={RRNavLink} to="/add-locations">
              <i class="fa-solid fa-file fa-lg" style={{color: "#1C3424"}}></i>
                Add Locations
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='' nav caret>
                <i class="fa-solid fa-list-check fa-lg me-1" style={{color: "#1C3424;"}}></i>
                Saved Locations
              </DropdownToggle>
              <DropdownMenu right >
                <DropdownItem>
                  <NavLink tag={RRNavLink} to='/hiking-trails'>
                    Hiking Trails
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={RRNavLink} to='/camping-spots'>
                    Camping Spots
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={RRNavLink} to='/scenic-overlooks'>
                    Scenic Lookouts
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