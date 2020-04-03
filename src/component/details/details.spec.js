import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { Details } from './details';
import { axe } from 'jest-axe';

it('should be accessible', async () => {
  const html = ReactDOMServer.renderToString(<main><Details><p>Hello, World!</p></Details></main>);
  expect(await axe(html)).toHaveNoViolations();
});
