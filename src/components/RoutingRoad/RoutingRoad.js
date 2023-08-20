import React from 'react';
import './RoutingRoad.css';

import { Breadcrumb } from 'antd';
import { routingRoadMenu } from '../../assets/constants';

const RoutingRoad = () => {
  return (
    <div className="routing-road">
      <Breadcrumb items={routingRoadMenu} />
    </div>
  );
};

export default RoutingRoad;
