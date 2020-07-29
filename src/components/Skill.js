import React, { Component } from "react";
import {
    Container, Card, CardImg, CardBody, CardTitle
} from "reactstrap";


import "./Skill.css";

class Skill extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const skill = this.props.value;
        return (
            <Card className="card-outer">
                <div className="card-img-wrapper">
                    {/* <CardImg className="card-img" top width="100%" src={skill.IMG} alt="Card image cap" /> */}
                    <img src={skill.IMG} className="card-img" />
                </div>
                <CardBody className="card-body">
                    <CardTitle><h6>{skill.NAME}</h6></CardTitle>
                </CardBody>
            </Card>        
        );
    }
}
export default Skill;