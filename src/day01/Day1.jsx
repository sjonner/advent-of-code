import React from 'react';
import modules from './input.json';
import { getFuelForSpacecraft, getFuelForSpacecraft2 } from './helpers.js';

export default function Day1() {
  return (
    <div>
      <Part1 />
      <Part2 />
    </div>
  );
}

function Part1() {
  return <div>{getFuelForSpacecraft(modules)}</div>;
}

function Part2() {
  return <div>{getFuelForSpacecraft2(modules)}</div>;
}
