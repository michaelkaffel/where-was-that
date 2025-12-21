import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)





function Navigationbar() {

  const dropdownTitle = (
    <span>
      <FontAwesomeIcon icon='fa-solid fa-list-check'/> Saved Locations
    </span>
  )
  return (
    <Navbar expand="lg"  color='success' fixed='top' className="bg-body-tertiary nav-background">
      <Container>
        <Navbar.Brand to='/' as={Link} >Where Was That?</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
            <FontAwesomeIcon icon="fa-solid fa-house" size="lg"  />
            Home
            </Nav.Link>
            <Nav.Link as={Link} to="/add-locations">
               <FontAwesomeIcon icon='fa-solid fa-file' size='lg' />
                 Add Locations
              </Nav.Link>

            <NavDropdown title={dropdownTitle} id="basic-nav-dropdown">

              <NavDropdown.Item as={Link} to='/hiking-trails'>
                     Hiking Trails</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/camping-spots'>
                     Camping Spots
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/scenic-overlooks'>
                     Scenic Lookouts
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;

// import { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from 'reactstrap';
// import { NavLink as RRNavLink } from 'react-router-dom';

// function NavigationBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar dark className='nav-background' color='success' fixed='top' expand='md' >
//         <NavbarBrand href="/" className='nav-color'>
          
//           Where Was That?
//         </NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="me-auto" navbar>
//             <NavItem>
//               <NavLink className='me-2' to="/">
//               <i class="fa-solid fa-house fa-lg" style={{color: "#1C3424"}}></i>
//               Home</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink className='me-2' to="/add-locations">
//               <i class="fa-solid fa-file fa-lg" style={{color: "#1C3424"}}></i>
//                 Add Locations
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle className='' nav caret>
//                 <i class="fa-solid fa-list-check fa-lg me-1" style={{color: "#1C3424;"}}></i>
//                 Saved Locations
//               </DropdownToggle>
//               <DropdownMenu right >
//                 <DropdownItem>
//                   <NavLink className='cust-nav-link' style={{ color: 'black' }} to='/hiking-trails'>
//                     Hiking Trails
//                   </NavLink>
//                 </DropdownItem>
//                 <DropdownItem>
//                   <NavLink className='cust-nav-link' style={{ color: 'black' }} to='/camping-spots'>
//                     Camping Spots
//                   </NavLink>
//                 </DropdownItem>
//                 <DropdownItem>
//                   <NavLink className='cust-nav-link' style={{ color: 'black' }} to='/scenic-overlooks'>
//                     Scenic Lookouts
//                   </NavLink>
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText className='nav-color'>By Michael Kaffel</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default NavigationBar;