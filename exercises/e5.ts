// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']
// Note: This input should be destructured from the function parameter

import { Planet, data } from "../data/data";

export function getPlanetNamesWithMassValue({
  planets,
  greaterThanOrEqualTo,
}: {
  planets: Planet[];
  greaterThanOrEqualTo: number;
}) {
  return planets
    .filter((p) => p.mass.massValue >= greaterThanOrEqualTo)
    .map((p) => p.name);
}

//getPlanetNamesWithMassValue(data.planets, 4);
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
