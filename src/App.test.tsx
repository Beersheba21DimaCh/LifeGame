import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import lifeGameConfig from "./configuration/life-game-config.json" 
import LifeMatrix from './service/life-matrix';
import { getRandomMatrix } from './util/random';
import _ from "lodash";

test('renders learn react link', () => {
  expect(2 * 2).toBe(4);
  const ar=[1,2,3];
  const ar1=[1,2,3];
  expect(ar).toEqual(ar1);

});

test(`matrix`, () => {
  let matrix: number[][] = [
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
  ];
  let matrix1: number[][] = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
  ];
  expect(matrix).toEqual(new LifeMatrix(matrix1).nextStep());

})