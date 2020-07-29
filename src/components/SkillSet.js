import React, { Component } from "react";
import {
    Container, Row, Col
} from "reactstrap";

import DATA from "../portfolioData";
import Skill from "./Skill.js";

import "./SkillSet.css";

class SkillSet extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const skillSet = this.props.value;
        console.log(skillSet);
        const skills = skillSet.LIST.map((v) => 
            <Col className="column" key={v.NAME} xs="6" sm="4" md="4" lg="3">
                <Skill value={v} />
            </Col>
        );

        return (
            <div className="skills-pool">
                <Container>
                    <br />
                    <Row><h4 className="skill-category-name">{skillSet.CATEGORY}</h4></Row>
                    <br />
                    <Row xs="2" sm="3" md="3" lg="4">
                        {skills}
                    </Row>
                    <br />
                </Container>
            </div>
            
        );
    }
}

export default SkillSet;