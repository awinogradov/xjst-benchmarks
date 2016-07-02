'use strict';

const React = require('react');
const ReactDomServer = require('react-dom/server');

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
    const children = [];
    let i = 0;

    while(i < childrenNum) {
      children.push(React.createElement('div', {
        className: 'header__child',
        id: `header-${i++}`
      }));
    }

    return React.createElement('div', { className: 'header' }, children);
  }
}

class Content extends React.Component {
  render() {
    const childrenNum = this.props.childrenNum;
    const children = [];
    let i = 0;

    while(i < childrenNum) {
      children.push(
        React.createElement('b', null, `bold-${i}`),
        React.createElement('i', null, `italic-${i++}`),
        React.createElement(
          'div',
          { className: 'undeclared' },
          React.createElement(
            'div',
            { className: 'undeclared' },
            React.createElement(
              'div',
              { className: 'undeclared' },
              React.createElement(
                'div',
                { className: 'undeclared' },
                'div')))));
    }

    return React.createElement('div', { className: 'content' }, children);
  }
}

class Footer extends React.Component {
  render() {
    const childrenNum = this.props.childrenNum;
    const children = [];
    let i = 0;

    while(i < childrenNum) {
      children.push(React.createElement('div', { id: `footer-${i++}` }));
    }

    return React.createElement('div', { className : 'footer' }, children);
  }
}

module.exports = childrenNum => () => ReactDomServer.renderToString(React.createElement(App, { childrenNum }));
