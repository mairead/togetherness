import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import Letter from '../components/Letter';

const Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });

describe('Letter', () => {
  test('Should return the distance from the center of the letter', () => {
    const wrapper = shallow(<Letter
      char="a"
      mouseXPos={50}
      mouseYPos={50}
      xPos={0}
      yPos={200}
    />);
    const instance = wrapper.instance();

    const boardPosX = 100;
    const getDistanceFromCenter = instance.getDistanceFromCenter(boardPosX);

    expect(getDistanceFromCenter).toBe(50);
  });
});
