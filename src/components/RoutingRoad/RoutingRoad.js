import React from 'react';
import './RoutingRoad.css';

import { Breadcrumb } from 'antd';
import { routingRoadMenu } from '../../assets/constants';

const RoutingRoad = () => {
  return (
    <section className="routing-road">
      <Breadcrumb items={routingRoadMenu} />
    </section>
  );
};

export default RoutingRoad;
