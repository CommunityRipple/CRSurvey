import React from 'react';
import {Grid as Container, PageHeader} from 'react-bootstrap';

export default function Layout({children}) {
    return (
        <Container fluid={true}>
            {children}
        </Container>
    );
}
