import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/Calculate';

import '../styles/index.css';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(dataObject => calculate(dataObject, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="app">
        <Display operation={operation} next={next || '0'} total={total || '0'} />
        {' '}
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
