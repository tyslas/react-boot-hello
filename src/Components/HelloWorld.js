import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="danger">Hello World Danger</Button>
        <Button bsStyle="primary">Hello World Primary</Button>
        <Button bsStyle="success">Hello World Success</Button>
      </div>
    )
  }
}

export default HelloWorld;
