// 1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const res1 = (arr) => {
  return arr.map((item) => ({
    quantity: item.quantity * 2,
    price: item.price * 2,
  }));
};

console.log(res1(itemsObject));

const res2 = (arr) => {
  return arr.filter((obj) => {
    return obj.quantity > 2 && obj.price > 300;
  });
};

console.log(res2(itemsObject));

let totalQ = 0;
let totalP = 0;
itemsObject.forEach((obj) => {
  totalQ += obj.quantity;
  totalP += obj.price;
});
console.log(totalQ);
console.log(totalP);

// 2
const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";
let newString = string
  .toLowerCase()
  .replace(/[^a-zA-Z ]/g, "")
  .split(" ")
  .join(" ");
console.log(newString);

// 3
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const arr = [...first, ...second];

arr.forEach((obj) => {
  if (obj.name && !obj.role) {
    obj.role = "null";
  } else {
    obj.name = "null";
  }
});

arr.sort((a, b) => {
  return a.uuid - b.uuid;
});

console.log(arr);

// const map = {};
// arr.forEach((ele) => {
//   if (!map[ele.uuid]) {
//     map[ele.uuid] = {
//       uuid: ele.uuid,
//       name: !ele.name ? null : ele.name,
//       role: !ele.role ? null : ele.role,
//     };
//   } else {
//     map[ele.uuid] = { ...map[ele.uuid], ...ele };
//   }
// });

// const sortedArray = Object.values(map).sort((left, right) => {
//   return left.uuid - right.uuid;
// });
// console.log(sortedArray);
