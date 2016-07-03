block('header')(
  content()(function () {
    'use strict';

    const childrenNum = this.ctx.childrenNum;
    const children = [];
    let i = 0;

    while(i < childrenNum) {
      children.push({
        elem: 'child',
        attrs: { id: `header-${i++}` }
      });
    }

    return children;
  })
);

block('content')(
  content()(function () {
    'use strict';

    const childrenNum = this.ctx.childrenNum;
    const children = [];
    let i = 0;

    while(i < childrenNum) {
      children.push({
        tag: 'b',
        content: `bold-${i}`
      }, {
        tag: 'i',
        content: `italic-${i++}`
      }, {
        block: 'undeclared',
        content: {
          block: 'undeclared',
          content: {
            block: 'undeclared',
            content: {
              block: 'undeclared',
              content: 'div'
            }
          }
        }
      });
    }

    return children;
  })
);

block('footer')(
  content()(function () {
    'use strict';

    const childrenNum = this.ctx.childrenNum;
    const children = [];
    let i = 0;

    while(i < childrenNum) {
      children.push({
        elem: 'child',
        attrs: { id: `footer-${i++}` }
      });
    }

    return children;
  })
);
