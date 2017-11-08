import React from 'react';
import {Grid as Container, Image} from 'react-bootstrap';
import {Div} from 'react-tag';

export default function Layout({children}) {
    const ground = require('../img/ground.png');
    const left = require('../img/cloud-left.png');
    const right = require('../img/cloud-right.png');

    return (
        <Div>
            <Div className="bg-gradient">
                <Image className="bg-image bg-cloud-right" src={right}/>
                <Image className="bg-image bg-cloud-left" src={left}/>
                <Image className="bg-image bg-ground" src={ground}/>
            </Div>
            <Container fluid={true}>
                {children}
            </Container>
        </Div>
    );
}
