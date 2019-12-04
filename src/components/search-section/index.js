import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Paragraph from '../paragraph';
import Search from '../search';
import SearchResult from '../search-result';

const SearchSection = () => {
  return (
    <div>
      <Row>
        <Col>
          <Paragraph/>
          <Search/>
          <SearchResult/>
        </Col>
      </Row>
    </div>
  );
};

export default SearchSection;
