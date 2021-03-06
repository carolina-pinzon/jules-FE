import React from 'react';
import renderer from 'react-test-renderer';
import Footer from 'components/Footer/Footer.jsx';

test('Basic render test', () => {
  const component = renderer.create(
    <Footer />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
