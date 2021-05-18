import React from 'react';
import { Container, Row, Col, Table,  Modal, ModalHeader, ModalBody, ModalFooter, Button,  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import DataTable from 'react-data-table-component';

interface Props {}


interface Ddetails {
    name: string;
    position: string;
    email: string;
}

interface State {
    details: Array<Ddetails>,
    modal: boolean,
    nameEmployee: string,
    email: string,
    position: string
}

class EmployeeTable extends React.Component<Props, State> {
    state: (State) = {
        details: [],
        modal: false,
        nameEmployee: '',
        email: '',
        position: ''
    }

    componentDidMount() {
        axios.get(`https://60a35d197c6e8b0017e26c11.mockapi.io/details`)
        .then(res => {
            const persons = res.data;
            this.setState({details: persons})
        })
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        this.setState({
            ...this.state,
            [name]: e.target.value
        })
    }

    onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const { nameEmployee, email, position } = this.state;
        const data = {
            name: nameEmployee,
            email: email,
            position: position
        }
        axios.post('https://60a35d197c6e8b0017e26c11.mockapi.io/details', JSON.stringify(data))
        .then(response => console.log(response.data));
        this.setState({
            modal: false
        })
    }

    render() {
        const { details, modal, nameEmployee, email, position } = this.state;
        const columns = [
            {
                name: 'Name',
                selector: 'name',
                sortable: false
            },
            {
                name: 'Email',
                selector: 'email',
                sortable: false
            },
            {
                name: 'Position',
                selector: 'position',
                sortable: false
            } 
        ]
        return(
            <Container>
                <Row>
                    <Col>
                        <Button color="secondary" onClick={this.toggleModal}>Add</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DataTable
                            title="Employee Data"
                            columns={columns}
                            data={details}
                            pagination
                            paginationPerPage={5}
                        />
                    </Col>
                </Row>
                <Modal isOpen={modal}  toggle={this.toggleModal}>
                    <ModalHeader>Add Details</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label for="nameEmployee" sm={2}>Name</Label>
                                <Col sm={10}>
                                <Input type="text" name="nameEmployee" id="nameEmployee" placeholder="Enter Name" value={nameEmployee} onChange={this.onChangeHandler} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email</Label>
                                <Col sm={10}>
                                <Input type="email" name="email" id="email" placeholder="with a placeholder" value={email} onChange={this.onChangeHandler}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="position" sm={2}>Email</Label>
                                <Col sm={10}>
                                <Input type="text" name="position" id="position" placeholder="Enter Position" value={position} onChange={this.onChangeHandler}/>
                                </Col>
                            </FormGroup> 
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.onSubmit}>Add</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default EmployeeTable