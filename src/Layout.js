import React from 'react';
import {Grid as Container, Image} from 'react-bootstrap';

export default function Layout({children}) {
    const ground = require('../img/ground.png');
    const left = require('../img/cloud-left.png');
    const right = require('../img/cloud-right.png');

    return (
        <div>
            <div className="bg-gradient" />
            <Image className="bg-image bg-cloud-right" src={right}/>
            <Image className="bg-image bg-cloud-left" src={left}/>
            <Image className="bg-image bg-ground" src={ground}/>
            <Container fluid={true}>
                {children}
            </Container>
        </div>
    );
}
