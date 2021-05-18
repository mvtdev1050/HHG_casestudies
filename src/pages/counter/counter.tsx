import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonComponent from '../../components/Button/Button';
import './counter.css';

interface Props {}

interface State {
    count: number
}

class Counter extends React.Component<Props, State> {
    state: State = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        });
    }

    reset = () => {
        this.setState({
            count: 0
        });
    }

    render() {
        const { count } = this.state;
        return (
            <Container className="counterContainer">
                <Row>
                    <Col className="text-center">
                        <ButtonComponent
                            title="Increment"
                            functionCounter={this.increment}
                            styleClass="filled-button"
                        />    
                    </Col>
                    <Col className="text-center">
                        <h4>{count}</h4>
                    </Col>
                    <Col className="text-center">
                        <ButtonComponent
                            title="Reset"
                            functionCounter={this.reset}
                            styleClass="outlined-button"
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Counter;