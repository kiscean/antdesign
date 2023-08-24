import React from 'react';
import './ComponentPage.css';

import ComponentCard from '../ComponentCard/ComponentCard';
import { Breadcrumb, Layout } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

function ComponentPage() {
  const breadcrumbArr = [
    {
      href: '',
      title: <HomeOutlined />,
    },
    {
      href: '',
      title: 'Все категории',
    },
    {
      href: '',
      title: 'Оптические датчики',
    },
    {
      title: (
        <>
          <span>TEMD5120X01</span>
        </>
      ),
    },
  ];

  return (
    <Layout className="component-page">
      <Breadcrumb items={breadcrumbArr} />
      <ComponentCard />
    </Layout>
  );
}

export default ComponentPage;
