import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/app';
import Feed from '../client/feed';
import Review from '../client/review';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders at least one feed and review component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Feed).length).toBe(1);
    expect(wrapper.find(Review).length).toBe(1);
  });
});

describe('<Feed />', () => {
  it('renders without crashing', () => {
    shallow(<Feed />);
  });
});

describe('<Review />', () => {
  it('renders without crashing', () => {
    shallow(<Review />);
  });
});

test('it adds two numbers', () => {
  expect(1 + 1).toBe(2);
});
