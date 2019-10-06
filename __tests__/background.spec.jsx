import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import Background from '../components/Background';

const Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });

describe('Background', () => {
  test('Should return a randomised number between passed limits', () => {
    const wrapper = shallow(<Background/>);
    const instance = wrapper.instance();
    const max = 100;
    const min = 50;
    const randomNumber = instance.getRandomisedNumber(min, max);

    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });
});