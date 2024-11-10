// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

//alphabetically sorts provices
const alphSortedProv = provinces.sort();
console.log(alphSortedProv);

//dispatches provinces with no Cape
const provincesNoCape = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(provincesNoCape);

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

//checks if a name has an 's/S' in it
const nameHasS = names.map((name) =>
  name.split("").some((character) => character === "S" || character === "s")
);
console.log(nameHasS);

//checks the name length
const nameLength = names.map((name) => name.length);
console.log(nameLength);

//changes provinces to upper case letters
names.forEach((name, i) => {
  console.log(`${name} : ${provinces[i]}`);
});
const upperCaseProv = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProv);

const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//log product name

products.forEach((product) => {
  console.log(product.product);
});
