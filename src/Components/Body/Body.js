import React from 'react';
import "./Body.css";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Hidden from "@material-ui/core/Hidden";

function Body() {
    return (
        <div className="body">
        <Hidden mdDown>
            <div className="body__header">
                <div className="body__header__button">
                <Button className="body__button" variant="outlined" >
                    <h4>RENEW</h4>
                </Button> 
                </div>
                <div className="body__header__sub">
                    <h4>subscription expires in 7 days</h4>
                </div>
                <div className="body__header__icon">
                    <CloseIcon className="body__close" />
                </div>
            </div>
            </Hidden>
            <Card className="body__body">
                <div className="body__body__header">
                    <h5 className="body__body__header__text">DOWNLOAD VPN CONFIGURATIONS</h5>
                    <h3><span className="body__body__header__text">Step 1: </span>Select your operating system</h3>
                </div>
                <div className="body__body1">
                    <Card className="body__card1">
                        <img className="body__img" src="https://cergntnu.files.wordpress.com/2016/10/web-ios-logo.jpg?w=256" alt="" />
                        <h4 className="body__h1">ios</h4>
                    </Card>
                    <Card className="body__card1">
                        <img className="body__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png" alt="" />
                        <h4 className="body__h2">Andriod</h4>
                    </Card>
                    <Card className="body__card1">
                        <img className="body__img" src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201810271755" alt="" />
                        <h4 className="body__h3">Mac oS</h4>
                    </Card>
                </div>
                <div className="body__body1">
                    <Card className="body__card1">
                        <img className="body__img" src="data:image/png;base64,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" alt="" />
                        <h4 className="body__h4">windows</h4>
                    </Card>
                    <Card className="body__card2">
                        <img className="body__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/1024px-Logo-ubuntu_cof-orange-hex.svg.png" alt="" />
                        <h4 className="body__h5">Linux</h4>
                    </Card>
                    <Card className="body__card1">
                        <img className="body__img" src="https://i.pinimg.com/736x/aa/2a/a8/aa2aa81359701c83455b89fe2915f1a2.jpg" alt="" />
                        <h4 className="body__h6">AsusWRT</h4>
                    </Card>
                </div>
                <div className="body__footer">
                <div>
                <Button className="body__button1" variant="outlined" >
                    <h4>OTHER</h4>
                    <AddCircleOutlineIcon className="body__Add"/>
                </Button> 
                </div>
                <div>
                <Button className="body__button2" variant="outlined" >
                    <h4>NEXT</h4>
                    <ArrowForwardIcon />
                </Button> 
                </div>
            </div>
            </Card>
        </div>
    )
}

export default Body
