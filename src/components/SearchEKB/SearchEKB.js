import React from 'react';
import {Col, Input, Row, Space, Button, Select} from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import './SearchEKB.css';

const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Option } = Select;
const selectBefore = (
    <Select
        defaultValue="параметрическтй поиск"
        style={{
          fontSize: "15px",
        }}
    >
      <Option value="add">параметрический поиск</Option>
      <Option value="minus">поиск по компоненту</Option>
    </Select>
);

const SearchEKB = () => {
  const [size, setSize] = React.useState('large');
  return (
    <div className={'main-search__background'}>
      <Space direction="vertical" align={"center"} className={'main-search'}>
          <Button type="primary" icon={<FileAddOutlined />} size={size}>BOM запрос</Button>
          <Search addonBefore={selectBefore} placeholder="введите текст для поиска" allowClear enterButton="ИСКАТЬ" size="large" onSearch={onSearch} />
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
