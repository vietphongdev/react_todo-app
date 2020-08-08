import React from 'react';
import { Row, Spinner } from 'reactstrap';

const Searching = () => {
  return (
    <Row>
      <div className="mx-auto">
        <Spinner type="grow" color="secondary" className="mr-2" size="sm" />
        <Spinner type="grow" color="secondary" className="mr-2" size="sm" />
        <Spinner type="grow" color="secondary" size="sm" />
      </div>
    </Row>
  );
};

export default Searching;
