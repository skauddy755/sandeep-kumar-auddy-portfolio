import React, { Component } from "react";
import {
    Container, Row, Col
} from "reactstrap";

import "./Projects.css";
import DATA from "../portfolioData";
import Project from "./Project.js";

class Projects extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const projects = DATA.PROJECTS.map((value) => 
            <Project value={value} />
        );

        return (
            <div id="projects" className="projects-pool">
                <br />
                <br />
                <br />
                <br />
                <Container>
                    <br />
                    <h1 className="projects-section-head">PROJECTS</h1>
                    <br />
                    <div className="projects-section-body">
                        <Container>
                            <Row xs="1" sm="2" md="3" lg="4">
                                {projects}
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Projects;