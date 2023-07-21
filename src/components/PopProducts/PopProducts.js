import React from "react";
import {Col, Divider, Row, Avatar, Card, Space} from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const PopProducts = () => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <Divider orientation="left">Чаще всего ищат</Divider>
                </Col>
                <Col span={12}>
                    <Divider orientation="right">
                        <a href="#">топ 50</a>
                    </Divider>
                </Col>
            </Row>
            <Row justify={"center"}
                style={{
                    alignSelf: "center",
                }}>
                <Col>

                </Col>
                <Space direction="horizontal" size={80}>
                <Col span={8}>
                    <Card
                        style={{
                            width: 300,
                        }}
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{
                            width: 300,
                        }}
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{
                            width: 300,
                        }}
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col>

                </Col>
                </Space>
            </Row>
        </>
    );
};

export default PopProducts;