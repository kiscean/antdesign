import React from 'react';
import { Col, Input, Row, Space, Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import './SearchEKB.css';

const { Search } = Input;
const onSearch = (value) => console.log(value);

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
        <p>
          Попробуйте поиск с точным соответствием, например{' '}
          <a href="#">HPZR-C56X</a>, или частичный поиск, например{' '}
          <a href="#">1N4148W</a>.
        </p>
      </Space>
    </div>
  );
};

export default SearchEKB;
