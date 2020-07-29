import React, { Component } from "react";
import {Container, Row, Col, Card, CardImg, CardTitle, CardBody, CardLink, Button} from "reactstrap";

import "./Project.css";

class Project extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        const project = this.props.value;

        return (
            <Col xs="12" sm="6" md="4" lg="3">
                <Card className="project-card-outer">
                    <div className="peoject-card-img-wrapper">
                        <CardImg className="peoject-card-img" top width="100%" src={project.IMG} alt="Card image cap" />
                    </div>
                    
                    <CardBody>
                        <CardTitle><h6 className="project-title"><strong>{project.TITLE}</strong></h6></CardTitle>
                        <br />
                        <p className="project-desc">{project.DESC}</p><br /><br />
                        <CardLink className="project-link" href={project.LINK}>
                            <Button block color="primary">VIEW SITE</Button>
                        </CardLink>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Project;