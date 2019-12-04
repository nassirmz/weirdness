import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Paragraph from '../paragraph';
import Search from '../search';

const GifSection = () => {
  return (
    <div>
      <Row>
        <Col>
          <Paragraph/>
          <Search/>
        </Col>
      </Row>
    </div>
  );
};

export default GifSection;
