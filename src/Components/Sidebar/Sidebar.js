import React from 'react';
import "./Sidebar.css";
import CachedIcon from '@material-ui/icons/Cached';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

  

function Sidebar() {

    return (
        <div className="sidebar">
            <h3>My Account</h3>
            <Card className="sidebar__container">
                <div  className="img__con">
                    <img className="img" src="https://www.peoples.com/content/dam/peoples/images/products/card-front/personal-debit-mastercard-plus-advantage-front.png" alt="" />
                </div>
                <div className="sidebar__details">
                    <div >
                    <h4><span ><FiberManualRecordIcon className="sidebar__dot"/></span> EXPIRES IN:</h4>
                    <h2>7 days</h2>
                    </div>
                    <div className="sidebar__but">
                        <Button variant="outlined" className="sidebar__button" >
                            <h4>RENEW </h4>
                            <CachedIcon />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Sidebar
