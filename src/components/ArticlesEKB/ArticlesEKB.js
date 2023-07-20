import React from "react";
import {Col, Divider, Row} from "antd";

const ArticlesEKB = () => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <Divider orientation="left">Новые статьи</Divider>
                </Col>
                <Col span={12}>
                    <Divider orientation="right">
                        <a href="#">все статьи</a>
                    </Divider>
                </Col>
            </Row>
        </>
    );
};

export default ArticlesEKB;