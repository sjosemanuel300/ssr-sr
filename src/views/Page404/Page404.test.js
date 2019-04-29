import React from 'react';
import renderer from 'react-test-renderer';
import Page404 from './Page404';

test('Page404 changes the class when hovered', () => {
  const component = renderer.create(
    <Page404 />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});