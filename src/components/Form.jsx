import React, { Component } from "react";
import { connect } from "react-redux";
import addArticle from '../actions/Action';
import uuidv1 from "uuid";
import { Button, Input, Form } from 'antd';

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}
class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({ title: '' });
    }
    render() {
        const { title } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                        <Input
                            type='text'
                            className='form-control'
                            id='title'
                            value={title}
                            onChange={this.handleChange}
                            placeholder='Add a new article'
                        />
                </Form.Item>
                <Form.Item>
                    <Button type="submit" onClick={(e) => this.handleSubmit(e)} className='btn btn-succes btn-lg'>
                        SAVE
                    </Button>
                </Form.Item>
            </Form >
        );
    }
}
const Formulario = connect(null, mapDispatchToProps)(ConnectedForm);
export default Formulario;