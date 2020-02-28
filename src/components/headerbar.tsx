import * as React from 'react'
import { HeaderProps } from "../interface/headerInterface";
import { Navbar,Nav,Form,FormControl,Button,NavDropdown } from "react-bootstrap";
import { UniqueTimeStamp } from "../utils/utils";
import './style.scss';
const menuLinks = [{string:'Home',href:'#home'},{string:'Link',href:'#link'}];
const nestedMenuLinks = [
  {title:'Dropdown',menus: [{string:'Home',href:'#home'},{string:'Link',href:'#link'}]},
  {title:'Droppp',menus: [{string:'Home',href:'#home'},{string:'Link',href:'#link'}]}
];
export const HeaderBar:React.SFC<HeaderProps> = (props) =>{
    return (
        <React.StrictMode>
            <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">{props.logoAltName || "No Name Found"}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/* root level menu items START  */}
      {menuLinks.map(data=><Nav.Link key={UniqueTimeStamp()} href={data.href}>{data.string}</Nav.Link>)}
      {/* root level menu items END */}

      {/* Multilevel menu items START */}
      {nestedMenuLinks.map(data=> 
      <NavDropdown title={data.title} key={UniqueTimeStamp()} id="basic-nav-dropdown">
      {data.menus.map(data=> <NavDropdown.Item key={UniqueTimeStamp()} href={data.href}>{data.string}</NavDropdown.Item>)}
      </NavDropdown>
      )} 
    {/* Multilevel menu items END */}

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
 
  
</React.StrictMode>
    )
}