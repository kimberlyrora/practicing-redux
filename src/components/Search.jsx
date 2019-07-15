import React, { Component } from "react";
import { Input, Row, Col, Button, Icon} from "antd";
import _ from 'lodash';


class SearchInput extends Component {
render(){
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Input.Search style={{ color: 'rgba(25,183,250,.45)' }} enterButton={<Button type="primary" icon="search" />} maxLength={1000}></Input.Search>
            </Col>
        </Row>
    )
}
} 
export default SearchInput