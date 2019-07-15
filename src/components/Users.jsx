import React, { Component } from "react";
import SearchInput from "./Search";
import { Button, Row, Form, Col, Icon } from "antd";
import "./User.css";
class UserSearchForm extends Component {
    render() {
        const suffix = <Icon type="close-circle"  />;
        return (
            <div className="seccion_user">
                <Form id="user-list-search-form">
                    <Row>
                        <Col>
                            <Form.Item
                                label="Busque asegurado">
                                <SearchInput />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Col>
                        <Button form="task-tray-search-form">Buscar</Button>
                        </Col>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default UserSearchForm;