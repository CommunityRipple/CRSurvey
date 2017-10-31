import React from 'react';
import {Row, Col} from 'react-bootstrap';

export default function LayoutRow({children}) {
    return (
        <Row className={"top-row"}>
            <Col md={3}/>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}/>
        </Row>
    );
}
