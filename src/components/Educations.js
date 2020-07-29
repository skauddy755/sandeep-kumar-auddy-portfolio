import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import DATA from "../portfolioData";
import Education from "./Education";
import "./Educations.css";

class Educations extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const educations = DATA.EDUCATIONS.map((value) =>
            <Row lg="1">
                <Col lg="12">
                    <Education value={value} />
                </Col>
            </Row>
        );

        return (
            <div id="educations" className="educations-pool">
                <br />
                <br />
                <br />
                <br />
                <Container>
                    <br />
                    <h1 className="educations-section-head">EDUCATION</h1>
                    <br />
                    <div className="educations-section-body">
                        <Container>
                            <Col xs="0" sm="1" md="2" lg="3"></Col>
                            <Col xs="12" sm="10" md="8" lg="6">
                                {educations}
                            </Col>
                            <Col xs="0" sm="1" md="2" lg="3"></Col>
                        </Container>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Educations;