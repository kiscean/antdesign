import React from 'react';
import { Input, Space, Button, Select, Radio, Divider } from 'antd';
import { FileAddFilled } from '@ant-design/icons';
import './SearchEKB.css';
import useResize from '../../hooks/useResize';

const SearchEKB = () => {
  const { Search } = Input;
  const { Option } = Select;

  const selectBefore = (
    <Select
      defaultValue="параметрический поиск"
      style={{
        fontSize: '15px',
      }}>
      <Option value="add">параметрический поиск</Option>
      <Option value="minus">поиск по компоненту</Option>
    </Select>
  );

  const size = useResize();
  console.log('size:', size);

  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <section className="main-search">
      <Space direction="vertical" className="main-search__container">
        <Button
          className="main-search__bom"
          type="primary"
          icon={<FileAddFilled />}
          size="large">
          BOM запрос
        </Button>

        <Divider className="main-search__divider" />

        <Search
          className="main-search__input"
          addonBefore={size.width > 1050 && selectBefore}
          placeholder="введите текст для поиска"
          allowClear
          enterButton
          size="large"
          onSearch={onSearch}
        />

        <div className="main-search__btns-container">
          <Radio.Group
            defaultValue="a"
            style={{
              marginTop: 16,
            }}>
            <Radio.Button value="a" className="main-search__button">
              параметрический поиск
            </Radio.Button>
            <Radio.Button value="b" className="main-search__button">
              поиск по компоненту
            </Radio.Button>
          </Radio.Group>
          <Radio.Group
            defaultValue="a"
            size="small"
            style={{
              marginTop: 16,
            }}
          />
        </div>

        <p>
          Попробуйте поиск с точным соответствием, например{' '}
          <a href="#">HPZR-C56X</a>,
          <br />
          или частичный поиск, например <a href="#">1N4148W</a>.
        </p>
      </Space>
    </section>
  );
};

export default SearchEKB;
