const noop = () => {};

function getAddress() {
  return {
    city: 'Oslo City',
    state: 'Oslo',
    zip: 0373,
    coords: {
      lat: 40.776608,
      long: -111.920485
    }
  };
}

function getNumbers() {
  return [1, 2, 3, 4, 5, 6];
}

function getNestedNumbers() {
  return [1, 2, [3, 4, [5, 6]]];
}

//can be used to pull apart objects
const { city, state, zip } = getAddress();

//sets missing values to undefined
const { address } = getAddress();

//can alias destructured variables
const { city: c, state: s, zip: z } = getAddress();

//can destructure nested variables
const {
  coords: { lat, long }
} = getAddress();

//can skip indexes in arrays
const [one, , three] = getNumbers();

//can reach nested arrays
const [one, , [three, , [, six]]] = getNestedNumbers();
