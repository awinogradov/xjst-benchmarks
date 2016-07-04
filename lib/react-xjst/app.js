'use strict';

const React = require('react');
const provide = require('./adapter');

class App extends React.Component {
  render() {
    const childrenNum = this.props.childrenNum;
    return React.createElement('div', { className: 'app' }, [
      React.createElement(Header, { childrenNum }),
      React.createElement(Content, { childrenNum }),
      React.createElement(Footer, { childrenNum })
    ]);
  }
}

class Header extends React.Component {
  render() {
    const childrenNum = this.props.childrenNum;
    return provide({
      block: 'header',
      childrenNum: childrenNum
    });
  }
}

class Content extends React.Component {
  render() {
    const childrenNum = this.props.childrenNum;
    return provide({
      block: 'content',
      childrenNum: childrenNum
    });
  }
}

class Footer extends React.Component {
  render() {
    const childrenNum = this.props.childrenNum;
    return provide({
      block: 'footer',
      childrenNum: childrenNum
    });
  }
}

module.exports = App;
