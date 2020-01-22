import React from 'react';
import wirePaths from './input.json';
import { getClosestToCentralPoint } from './helpers.js';

export default function Day3() {
  return (
    <div>
      <Part1 />
      {/* <Part2 /> */}
    </div>
  );
}

// TODO: Use webworker to calculate.
function Part1() {
  return <div>{getClosestToCentralPoint(wirePaths)}</div>;
}

// function Part2() {
//   return <div></div>;
// }
