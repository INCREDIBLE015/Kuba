import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Avatar, Button } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./Header.css"
import Hidden from "@material-ui/core/Hidden";

function Header() {
    return (
        <div className="header">
            <div className="header__vpn">
                <h4>VPN Website</h4>
            </div>
            <Hidden mdDown>
            <div className="header__mail">
                <MailOutlineIcon  className="header__mail"/>
                <h4 className="header__div">CONTACT US</h4>
            </div>
            <div className="header__how">
                <StarBorderIcon className="header__star" />
                <h4 className="header__div">HOW IT WORKS</h4>
            </div>
            </Hidden>
            <div className="header__user">
            <Button variant="outlined" className="header__button" fullWidth>
                <Avatar src="https://pbs.twimg.com/profile_images/1052233810375512065/mkVpI6Np_400x400.jpg" />
                <h4 className="header__h4">userName</h4>
                <ExitToAppIcon className="header__exit" />
            </Button>
            </div>
        </div>
    )
}

export default Header
