// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name

import { Planet, data } from "../data/data";

//  must have destructured parameters
export function findPlanetByMoon({
  planets,
  moonName,
}: {
  planets: Planet[];
  moonName: string;
}) {
  const planet = planets.find(
    (p) =>
      p.hasOwnProperty("moons") &&
      p.moons!.map((m) => m.toLowerCase()).includes(moonName)
  );
  return planet ? planet["name"] : undefined;
}

console.log(findPlanetByMoon({ planets: data.planets, moonName: "Triton" }));
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
