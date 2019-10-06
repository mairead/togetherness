// import React from 'react';
import Letter from '../components/Letter';

// TODO Need babel transformation in tests to call Component method
describe('Letter', () => {
  test('Should return the distance from the center of the letter', () => {
    const mousePosX = 100;
    const getDistanceFromCenter = Letter.getDistanceFromCenter(mousePosX);
    expect(getDistanceFromCenter).toBe(0);
  });
});
