import React, { Component } from "react";
import { Button } from "reactstrap";

import "./Resume.css";
import DATA from "../portfolioData";

class Resume extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="resume">
                <a href={DATA.RESUME_FILENAME} download>
                    <Button color="warning" size="lg">Download Resume</Button>
                </a>
            </div>
        );
    }
}

export default Resume;