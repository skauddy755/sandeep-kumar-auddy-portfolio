import React, { Component } from "react";
import {
    Container, Row, Col
} from "reactstrap";

import DATA from "../portfolioData";
import SkillSet from "./SkillSet.js";

import "./Skills.css";

class Skills extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const skillSets = DATA.SKILLS.map((value) => 
            <Row>
                <SkillSet value={value} />
            </Row>
        );

        return (
            <div id="skills" className="skills-pool">
                <br />
                <br />
                <br />
                <br />
                <Container>
                    <br />
                    <h1 className="section-head">SKILLS</h1>
                    <br />
                    <Container className="section-body">
                        {skillSets}
                    </Container>
                </Container>
            </div>
            
        );
    }
}

export default Skills;