import { intCodeProgram, intCodeProgram2 } from './helpers';

describe('Day 2: 1202 Program Alarm', () => {
  test.each`
    input                            | output
    ${[1, 0, 0, 0, 99]}              | ${[2, 0, 0, 0, 99]}
    ${[2, 3, 0, 3, 99]}              | ${[2, 3, 0, 6, 99]}
    ${[2, 4, 4, 5, 99, 0]}           | ${[2, 4, 4, 5, 99, 9801]}
    ${[1, 1, 1, 4, 99, 5, 6, 0, 99]} | ${[30, 1, 1, 4, 2, 5, 6, 0, 99]}
  `('$input computes to $output', ({ input, output }) => {
    const originalInput = [...input];
    // expect(intCodeProgram(input)).toMatchObject(output);
    // expect(input).toMatchObject(originalInput);
    expect(intCodeProgram2(input)).toMatchObject(output);
    expect(input).toMatchObject(originalInput);
  });
});
