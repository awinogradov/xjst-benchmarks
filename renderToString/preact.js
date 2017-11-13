'use strict';

const Preact = require('preact');
const renderToString = require('preact-render-to-string');

class App extends Preact.Component {
  render() {
    const childrenNum = this.props.childrenNum;
    return Preact.h('div', { class: 'app' }, [
      Preact.h(Header, { childrenNum }),
      Preact.h(Content, { childrenNum }),
      Preact.h(Footer, { childrenNum })
    ]);
  }
}

class Header extends Preact.Component {
  render() {
    const childrenNum = this.props.childrenNum;
    const children = [];
    let i = 0;

    while(i < childrenNum) {
      children.push(Preact.h('div', {
        class: 'header__child',
        id: `header-${i++}`
      }));
    }

    return Preact.h('div', { class: 'header' }, children);
  }
}

class Content extends Preact.Component {
  render() {
    const childrenNum = this.props.childrenNum;
    const children = [];
    let i = 0;

    while(i < childrenNum) {
      children.push(
        Preact.h('b', null, `bold-${i}`),
        Preact.h('i', null, `italic-${i++}`),
        Preact.h(
          'div',
          { class: 'undeclared' },
          Preact.h(
            'div',
            { class: 'undeclared' },
            Preact.h(
              'div',
              { class: 'undeclared' },
              Preact.h(
                'div',
                { class: 'undeclared' },
                'div')))));
    }

    return Preact.h('div', { class: 'content' }, children);
  }
}

class Footer extends Preact.Component {
  render() {
    const childrenNum = this.props.childrenNum;
    const children = [];
    let i = 0;

    while(i < childrenNum) {
      children.push(Preact.h('div', { id: `footer-${i++}` }));
    }

    return Preact.h('div', { class : 'footer' }, children);
  }
}

module.exports = childrenNum => () => renderToString(Preact.h(App, { childrenNum }));
