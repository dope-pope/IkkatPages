//Dependencies
import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardFooter, CardHeader, CardText } from "reactstrap"
import { Grid, Cell, Spacer, Button } from "react-mdl";

//Internals
// import "./index.css";

const Header = () => {
    return (
        <div className="container">
        <div className="row">
            <Card className="col-12 col-md-3 " >
                <CardImg  src={"kid.jpg"} />    
            </Card>
            <Card className="col-12 col-md-3 " >
                <CardImg src={"man.jpeg"} />
            </Card>
            <Card className="col-12 col-md-3 " >
                <CardImg src={"woman.jpg"} />
            </Card>
            </div>
            </div>
            
                    
       
    );
};

export default Header;