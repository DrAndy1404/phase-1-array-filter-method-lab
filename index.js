const drivers = [
  { name: "Helen", city: "Limassol" },
  { name: "John", city: "Thessaloniki" },
  { name: "Nick", city: "Athens" },
  { name: "Michael", city: "Krete" },
  { name: "Maria", city: "Piraeus" },
];

function findMatching(driversArray, query) {
  return driversArray.filter(
    (driver) => driver.toLowerCase() === query.toLowerCase()
  );
}

function fuzzyMatch(driversArray, query) {
  return driversArray.filter((driver) =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}

function matchName(driversArray, query) {
  return driversArray.filter(
    (driver) => driver.name.toLowerCase() === query.toLowerCase()
  );
}
