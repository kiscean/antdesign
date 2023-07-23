import React from 'react';
import {Col, Input, Row, Space, Button, Select} from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import './SearchEKB.css';

const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Option } = Select;
const selectBefore = (
    <Select
        defaultValue="add"
        style={{
          width: 200,
        }}
    >
      <Option value="add">Параметрическтй поиск</Option>
      <Option value="minus">Поиск по компоненту</Option>
    </Select>
);

const SearchEKB = () => {
  const [size, setSize] = React.useState('large');
  return (
    <div className={'bgSearch'}>
      <Space direction="vertical">
        <Row
          style={{
            marginTop: '30ch',
          }}>
          <Col span={4}>
            <Button type="primary" icon={<FileAddOutlined />} size={size}>
              BOM запрос
            </Button>
          </Col>
          <Col span={18}>
            <Space direction="vertical">
              <Search addonBefore={selectBefore} placeholder="введите текст для поиска" allowClear enterButton="Искать" size="large" onSearch={onSearch} />
            </Space>
          </Col>
        </Row>
        <p>
          Попробуйте поиск с точным соответствием, например{' '}
          <a href="#">HPZR-C56X</a>, или частичный поиск, например{' '}
          <a href="#">1N4148W</a>.
        </p>
        <Row>
          <Col span={6}>

          </Col>
          <Col span={6}>

          </Col>
          <Col span={6}>

          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default SearchEKB;
