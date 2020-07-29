import React, { Component } from "react";

import {
    Container, Jumbotron
} from "reactstrap";

// import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DATA from "../portfolioData";
import "./Homepage.css";
import Resume from "./Resume.js";

class Homepage extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        const space = " ";

        const abouts = DATA.HOMEPAGE.ABOUT.map((value) => 
            <h6 className="about"><i>{value}</i></h6>
        );

        const socialLinks = DATA.HOMEPAGE.SOCIAL_LINKS.map((value) => 
            <span style={{areaHidden: true}}>
                <a className="social-icons" href={value.LINK}>
                    <FontAwesomeIcon icon={value.ICON} size="lg" />
                </a>{space}
            </span>
        );

        return (
            <div id="home" className="landingTop">
                <br />
                <br />
                <br />
                <br />
                <Container className="cont">
                    <div className="landing">
                        <Jumbotron className="jumbo">
                            <h1><strong><i>{DATA.HOMEPAGE.INTRO}</i></strong></h1>
                            <h1><strong><b>{DATA.HOMEPAGE.NAME}</b></strong></h1><br/>
                            <div>{abouts}</div>
                        </Jumbotron>
                        <br />
                        <Resume />
                        <br />
                        <hr />
                        <h3>
                            {socialLinks}
                        </h3>
                        <br />
                        <br />
                        
                    </div>
                </Container>
            </div>
        );
    }
}

export default Homepage;