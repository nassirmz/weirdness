import React from 'react';
import { Row, Col } from 'react-bootstrap';

import SearchSection from '../search-section';
import Favorites from '../favorites';
const Dashboard = () => {
  return (
      <Row>
        <Col>
          <SearchSection />
        </Col>
        <Col>
          <Favorites />
        </Col>
      </Row>
  );
};

export default Dashboard;
