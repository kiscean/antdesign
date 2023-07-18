import React from "react";
import {Col, Input, Row, Space} from 'antd';

const { Search } = Input;
const onSearch = (value) => console.log(value);

const SearchEKB = () => {
    return (
        <Space
            direction="vertical"
        >
            <Row>
                <Col span={2}>

                </Col>
                <Col span={22}>
                    <Search
                        placeholder="введите текст для поиска"
                        allowClear
                        enterButton="Искать"
                        size="large"
                        onSearch={onSearch}
                        style={{ width: 800 }}
                    />
                </Col>
            </Row>
            <p>Попробуйте поиск с точным соответствием, например <a href="#">HPZR-C56X</a>, или частичный поиск, например <a href="#">1N4148W</a>.</p>
        </Space>
    );
};

export default SearchEKB;