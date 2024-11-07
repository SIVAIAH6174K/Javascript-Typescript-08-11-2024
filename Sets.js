//! Sets:=
const superHeros = new Set();
superHeros.add("Bumble Bee");
superHeros.add("Optimus Prime");
superHeros.add("Thor");
superHeros.add("Hulk");
superHeros.add("Antman");

console.log(superHeros);
console.log(superHeros.size);
console.log(superHeros.has("Optimus Prime"));
console.log(superHeros.delete("Antman"));

const Games = new Set([
  "Free Fire Max India",
  "Pubg",
  "Farlight84",
  "Call of Duty",
]);
console.log(Games);
console.log(Games.size);

console.log(typeof Games);
console.log(Games instanceof Set);

const combinedSet = new Set([...superHeros, ...Games]);
console.log(combinedSet);

const myValues = Games.values();
for (let val of myValues) {
  console.log(val);
}

const myKeys = superHeros.keys();
for (let key of myKeys) {
  console.log(key);
}
