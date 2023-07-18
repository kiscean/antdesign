import React, {useState} from "react";
import {
    Col,
    Input,
    Row,
    Space,
    Button,
} from 'antd';
import {
    FileAddOutlined
} from '@ant-design/icons';
import lines from "../../static/img/line.png"
import {Content} from "antd/es/layout/layout";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const search_back = {
    backgroundImage: lines,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const SearchEKB = () => {
    const [size, setSize] = useState('large');
    return (
        <Content style={search_back}>
            <Space
                direction="vertical"
            >
                <Row>
                    <Col span={4}>
                        <Button type="primary" icon={<FileAddOutlined />} size={size}>
                            BOM запрос
                        </Button>
                    </Col>
                    <Col span={20}>
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
        </Content>
    );
};

export default SearchEKB;