# Scope Homework: Who Dunnit

### Learning Objectives

- Understand function scope
- Know the difference in between the let and const keywords

## Brief

Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

### MVP

#### Episode 1

```js
const scenario = {
  murderer: "Miss Scarlet",
  room: "Library",
  weapon: "Rope",
};

const declareMurderer = function () {
  return `The murderer is ${scenario.murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);

// The murderer is Miss Scarlet.
// because the value of scenario.murderer is 'Miss Scarlet'.
```

#### Episode 2

```js
const murderer = "Professor Plum";

const changeMurderer = function () {
  murderer = "Mrs. Peacock";
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// This will give an error because murderer is a constant so it cannot be changed after being assigned.
```

#### Episode 3

```js
let murderer = "Professor Plum";

const declareMurderer = function () {
  let murderer = "Mrs. Peacock";
  return `The murderer is ${murderer}.`;
};

const firstVerdict = declareMurderer();
console.log("First Verdict: ", firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log("Second Verdict: ", secondVerdict);

// The first murderer is Mrs Peacock and the second is Prof Plum.
// This is because the Mrs Peacock variable is a separate variable whose scope
// only applies inside the function. The Prof Plum variable value is unchanged.
```

#### Episode 4

```js
let suspectOne = "Miss Scarlet";
let suspectTwo = "Professor Plum";
let suspectThree = "Mrs. Peacock";

const declareAllSuspects = function () {
  let suspectThree = "Colonel Mustard";
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
};

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Suspect three is Mrs Peacock because the value Col Mustard only applies inside of the function.
// suspectThree outside the function isn't changed.
```

#### Episode 5

```js
const scenario = {
  murderer: "Miss Scarlet",
  room: "Kitchen",
  weapon: "Candle Stick",
};

const changeWeapon = function (newWeapon) {
  scenario.weapon = newWeapon;
};

const declareWeapon = function () {
  return `The weapon is the ${scenario.weapon}.`;
};

changeWeapon("Revolver");
const verdict = declareWeapon();
console.log(verdict);

// The weapon is the revolver because the changeWeapon function has changed the value
// of weapon in the scenario object.
```

#### Episode 6

```js
let murderer = "Colonel Mustard";

const changeMurderer = function () {
  murderer = "Mr. Green";

  const plotTwist = function () {
    murderer = "Mrs. White";
  };

  plotTwist();
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// The murderer is MRs White because the variable is declared outside the functions
// the value can then be changed within the functions
```

#### Episode 7

```js
let murderer = "Professor Plum";

const changeMurderer = function () {
  murderer = "Mr. Green";

  const plotTwist = function () {
    let murderer = "Colonel Mustard";

    const unexpectedOutcome = function () {
      murderer = "Miss Scarlet";
    };

    unexpectedOutcome();
  };

  plotTwist();
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// The murderer is Mr Green because the variable is declared outside the function
// There's then a second murderer variable declared within the plotTwist function but
// this is separate so doesn't affect the original variable. The unexpectedOutcome function
// then changes this second variable, not the first one.
```

#### Episode 8

```js
const scenario = {
  murderer: "Mrs. Peacock",
  room: "Conservatory",
  weapon: "Lead Pipe",
};

const changeScenario = function () {
  scenario.murderer = "Mrs. Peacock";
  scenario.room = "Dining Room";

  const plotTwist = function (room) {
    if (scenario.room === room) {
      scenario.murderer = "Colonel Mustard";
    }

    const unexpectedOutcome = function (murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = "Candle Stick";
      }
    };

    unexpectedOutcome("Colonel Mustard");
  };

  plotTwist("Dining Room");
};

const declareWeapon = function () {
  return `The weapon is ${scenario.weapon}.`;
};

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// The weapon is candle stick because the room and murderer are changed by the changeScenario function.
// Then the plotTwist function is called and checks that the room is Dining Room, which it now is.
// This function then changes murderer to Col Mustard and calls unexpectedOutcome to check that the
// murderer is Col Mustard. This is true so the weapon is set to Candle Stick.
```

#### Episode 9

```js
let murderer = "Professor Plum";

if (murderer === "Professor Plum") {
  let murderer = "Mrs. Peacock";
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);
// The murderer is Prof Plum because the murderer variable within the if block is a separate variable.
```

### Extensions

Make up your own episode!
