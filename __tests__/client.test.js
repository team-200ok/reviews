import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/app';
import Feed from '../client/feed';
import Review from '../client/review';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders at least one feed and review component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<Feed />)).to.have.lengthOf(1);
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
