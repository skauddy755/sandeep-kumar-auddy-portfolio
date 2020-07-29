import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Footer.css";
import DATA from "../portfolioData";

class Footer extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const space = " ";
        const socialLinks = DATA.HOMEPAGE.SOCIAL_LINKS.map((value) => 
            <span style={{areaHidden: true}}>
                <a className="footer-social-icon" href={value.LINK}>
                    <FontAwesomeIcon icon={value.ICON} size="lg" />
                </a>{space}
            </span>
        );

        return (
            <div id="footer" className="footer">
                <br />
                <br />
                <br />
                <Container>
                    <Row xs="1" sm="3" md="3" lg="3">
                        <Col xs="0" sm="1" md="2" lg="3"></Col>
                        <Col xs="12" sm="10" md="8" lg="6">
                            <h6 className="footer-info">Follow me on:</h6>
                            <h6 className="footer-info">{socialLinks}</h6>
                            <br />
                            <h6 className="footer-info">
                                <FontAwesomeIcon className="footer-info-btn" icon={DATA.CONTACT.ICON} size="lg" />
                                {space}Contact : <i className="footer-info-content">{DATA.CONTACT.NUM}</i>
                            </h6>
                            <h6 className="footer-info">
                                <FontAwesomeIcon className="footer-info-btn" icon={DATA.EMAIL.ICON} size="lg" />
                                {space}Email : <i className="footer-info-content">{DATA.EMAIL.ID}</i>
                            </h6><br />
                            
                        </Col>
                        <Col xs="0" sm="1" md="2" lg="3"></Col>
                    </Row>
                    <h1 className="footer-top-icon-container">
                        <a className="footer-top-icon" href="#home">
                            <FontAwesomeIcon icon={["fas", "arrow-circle-up"]} size="lg" />
                        </a>
                    </h1>
                    <br />
                    <br />
                    <br />
                </Container>
            </div>
        );
    }
}

export default Footer;