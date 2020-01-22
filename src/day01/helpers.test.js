import {
  getFuelForModuleMass,
  getFuelForSpacecraft,
  getFuelForSpacecraft2,
} from './helpers';
import { head, last } from 'lodash/fp';

const cases = [[12, 2], [14, 2], [1969, 654], [100756, 33583]];
const masses = cases.map(head);
const fuels = cases.map(last);
const totalFuel = fuels.reduce((total, moduleFuel) => total + moduleFuel, 0);
// const totalFuel = 34241;

describe('Day 1: The Tyranny of the Rocket Equation', () => {
  test.each(cases)('%p mass requires %p fuel', (mass, fuel) => {
    expect(getFuelForModuleMass(mass)).toBe(fuel);
  });

  test('sums fuel for modules', () => {
    expect(getFuelForSpacecraft(masses)).toBe(totalFuel);
  });
});

describe('calculates fuel for module mass + fuel', () => {
  test('sums fuel for modules', () => {
    expect(getFuelForSpacecraft2([100756])).toBe(50346);
  });
});
