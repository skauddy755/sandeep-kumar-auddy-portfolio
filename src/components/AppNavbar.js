import React, { Component } from "react";
import "./AppNavbar.css";

import {
    Container, Nav, NavItem, NavLink, Navbar, NavbarBrand, Collapse, NavbarToggler
} from "reactstrap";

class AppNavbar extends Component
{
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleClick = () => {
        alert("Clicked!!!");
    }

    render()
    {

        const brandStyle = {color: "rgba(255,255,200,0.88)", fontFamily: "Arial, Helvetica, sans-serif"};

        return (
            <div className="app-navbar">
                <Navbar className="dark-theme" color="dark" expands="sm" className="mb-5" light>
                    <Container>
                        <NavbarBrand style={brandStyle} href="/"><h3 className="brand">Sandeep Kumar Auddy</h3></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse className="app-navbar-collapse" isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem onClick={this.toggle} className="nav-link">
                                    <NavLink style={{color: "rgba(190,255,200,0.8)"}} href="#home"><h5 className="nav-link-h4">HOME</h5></NavLink>
                                </NavItem>
                                <NavItem onClick={this.toggle} className="nav-link">
                                    <NavLink style={{color: "rgba(190,255,200,0.8)"}} href="#skills"><h5 className="nav-link-h4">SKILLS</h5></NavLink>
                                </NavItem>
                                <NavItem onClick={this.toggle} className="nav-link">
                                    <NavLink style={{color: "rgba(190,255,200,0.8)"}} href="#projects"><h5 className="nav-link-h4">PROJECTS</h5></NavLink>
                                </NavItem>
                                <NavItem onClick={this.toggle} className="nav-link">
                                    <NavLink style={{color: "rgba(190,255,200,0.8)"}} href="#educations"><h5 className="nav-link-h4">EDUCATION</h5></NavLink>
                                </NavItem>
                                <NavItem onClick={this.toggle} className="nav-link">
                                    <NavLink style={{color: "rgba(190,255,200,0.8)"}} href="#footer"><h5 className="nav-link-h4">CONTACT</h5></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;