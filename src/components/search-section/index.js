import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Paragraph from '../paragraph';
import Search from '../search';
import SearchResult from '../search-result';
import Slider from '../slider';

const SearchSection = () => {
  return (
    <div>
      <Row>
        <Col>
          <Paragraph/>
          <Search/>
          <SearchResult/>
          <Slider/>
        </Col>
      </Row>
    </div>
  );
};

export default SearchSection;
