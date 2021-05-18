import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Container>
            <Row>
                <Col>
                    <Link to="/">Counter</Link>
                    <Link to="/table">Table</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;