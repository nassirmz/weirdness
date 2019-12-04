import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Paragraph from '../paragraph';
import GifsList from '../favorites';
import SearchSection from '../search-section';
const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col>
          <SearchSection />
        </Col>
        <Col>
          <GifsList />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
