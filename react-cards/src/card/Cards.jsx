import React, {Component} from 'react'
import Card from './CardUI';

import img1 from "../assets/axor.jpg";
import img2 from "../assets/actros.jpg";
import img3 from "../assets/atego.jpg";
import img4 from "../assets/arocs.jpg";

class Cards extends Component {
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="axor"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="actros"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="atego"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title="arocs"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;