//can use shorthand for property names
function createMonster(name, power) {
  return {
    type: 'Monster',
    name,
    power,
    attack(target) {
      return `${this.name} attacked ${target.name}`;
    }
  };
}
const godzilla = createMonster('Godzilla', 1000);
const mechaGodzilla = createMonster('MechaGodzilla', 5000);

//can use expressions as property names
function createCandy(type, description) {
  return {
    tasty: true,
    type,
    [type.toUpperCase() + type.length]: description
  };
}

const twixDescription =
  'Twix is a chocolate bar made by Mars, Inc., consisting of biscuit applied with other ' +
  'confectionery toppings and coatings. Twix bars are packaged in pairs, although smaller single bars are available.';
const twixType = 'twix';
const snickers = createCandy('twix', twixDescription);
