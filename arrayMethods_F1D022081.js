const wizardSquads = [
  {
    squad: "Order of the Phoenix", characters: [
      { id: 1, character: "Harry Potter", nickname: "The Boy Who Lived", strength: 92, specialty: "Leader" },
      { id: 2, character: "Hermione Granger", nickname: "Brightest Witch", strength: 90, specialty: "Strategist" },
      { id: 3, character: "Ron Weasley", nickname: "Ron", strength: 75, specialty: "Support" },
      { id: 4, character: "Albus Dumbledore", nickname: "Headmaster", strength: 99, specialty: "Supreme Wizard" },
      { id: 5, character: "Sirius Black", nickname: "Padfoot", strength: 85, specialty: "Protector" },
      { id: 6, character: "Severus Snape", nickname: "Half-Blood Prince", strength: 93, specialty: "Double Agent" },
      { id: 7, character: "Minerva McGonagall", nickname: "Professor McG", strength: 88, specialty: "Transfiguration" },
    ],
  },
  {
    squad: "Death Eaters", characters: [
      { id: 8, character: "Lord Voldemort", nickname: "Dark Lord", strength: 100, specialty: "Dark Magic" },
      { id: 9, character: "Bellatrix Lestrange", nickname: "Bellatrix", strength: 95, specialty: "Dark Witch" },
      { id: 10, character: "Lucius Malfoy", nickname: "Lucius", strength: 85, specialty: "Schemer" },
      { id: 11, character: "Draco Malfoy", nickname: "Draco", strength: 76, specialty: "Duelist" },
      { id: 12, character: "Nagini", nickname: "Snake", strength: 88, specialty: "Beast" },
    ],
  },
];

const merge = wizardSquads.flatMap(team => team.characters);

// 1. map() => ambil nickname semua karakter huruf besar
const testMap = () => {
  const names = merge.map(c => c.character.toUpperCase());
  console.log("\n map() =>", names);
};

// 2. filter() => cari wizard kuat
const testFilter = () => {
  const overPowered = merge.filter(c => c.strength >= 95);
  console.log("\n filter() =>", overPowered);
};

// 3. reduce() => jumlah total kekuatan
const testReduce = () => {
  const sumStrength = merge.reduce((total, c) => total + c.strength, 0);
  console.log("\n reduce() =>", sumStrength);
};

// 4. find() => cari karakter pertama bernama 'Harry'
const testFind = () => {
  const found = merge.find(c => c.character.includes("Harry"));
  console.log("\n find() =>", found);
};

// 5. some() => cek apakah ada Dark Magic user
const testSome = () => {
  const hasDark = merge.some(c => c.specialty === "Dark Magic");
  console.log("\n some() =>", hasDark);
};

// 6. every() => cek apakah semua punya strength >= 70
const testEvery = () => {
  const allStrong = merge.every(c => c.strength >= 70);
  console.log("\n every() =>", allStrong);
};

// Run 
[testMap, testFilter, testReduce, testFind, testSome, testEvery].forEach(fn => fn());