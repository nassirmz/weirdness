import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import SearchSection from '../search-section';
import Favorites from '../favorites';
const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col>
          <SearchSection />
        </Col>
        <Col>
          <Favorites />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
