import React from 'react';
import intCodes from './input.json';
import { run1202ProgramAlarm } from './helpers.js';
import { findIntCodeProgramInputs } from './helpers2.js';

export default function Day2() {
  return (
    <div>
      <Part1 />
      <Part2 />
    </div>
  );
}

function Part1() {
  return <div>{run1202ProgramAlarm(intCodes)[0]}</div>;
}

function Part2() {
  return <div>{findIntCodeProgramInputs(intCodes)}</div>;
}
