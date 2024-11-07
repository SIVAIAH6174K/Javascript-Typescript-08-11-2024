// ! Maps:=
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

const MCU = new Map();
MCU.set(100, "Bumble Bee");
MCU.set(101, "Optimus Prime");
MCU.set(102, "Iron Man");
MCU.set(103, "Spyderman");
MCU.set(104, "Captain America");
MCU.set(105, "Black Widow");
console.log(MCU);
console.log(MCU.get(102));
console.log(MCU.size);
console.log(MCU.has(105));
console.log(MCU.delete(105));
console.log(MCU.delete(108));
// MCU.clear();
// console.log(MCU);

// keys:=
let myKeys = "";
for (let k of MCU.keys()) {
  myKeys += k + " ";
}
console.log(myKeys);

// Values:=
let myValues = "";
for (let k of MCU.values()) {
  myValues += k + "\n";
}
console.log(myValues);

console.log(typeof MCU);
console.log(MCU instanceof Map);
