import React, { Component } from "react";
import { Card, Container, Row, Col, CardTitle, CardSubtitle, CardBody, CardLink, Button } from "reactstrap";

import "./Education.css";

class Education extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const education = this.props.value;

        return (
            <Card className="education-card-outer">
                <Container>
                    <Row xs="1" sm="1" md="2" lg="2">
                        <Col xs="12" sm="12" md="4" lg="3">
                            <div className="education-card-img-wrapper">
                                <img src={education.LOGO} className="education-card-img" />
                            </div>
                        </Col>

                        <Col xs="12" sm="12" md="8" lg="9">
                            <CardTitle><h2 className="education-title"><strong>{education.INSTITUTE_NAME}</strong></h2></CardTitle>
                            <CardBody>
                                <h3 className="education-specialization">{education.SPECIALIZATION}</h3><br />
                                <h3 className="education-achievements">{education.ACHIEVEMENTS}</h3>
                                <CardLink className="education-link" href={education.LINK}>
                                    <Button outline block color="success">VISIT PAGE</Button>
                                </CardLink>
                            </CardBody>
                        </Col>
                    </Row>
                </Container>
            </Card>
        );
    }
}

export default Education;