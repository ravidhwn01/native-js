import * as _ from "lodash";

const members = [
  { name: "Rakesh Gupta", age: 20 },
  { name: "Yash Jangid", age: 40 },
  { name: "Firoz Khan", age: 41 },
  { name: "Amrit Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];
//  1.
const firstName = _.map(members, (member) => {
  return member.name.split(" ")[0];
});
console.log(firstName);

// 2.

const updatedName = _.map(members, (member) => {
  return {
    ...member,
    name:
      member.name.split(" ")[0] + " " + member.name.split(" ")[1].toUpperCase(),
  };
});
console.log(updatedName);

// 3.
const filteredAges = _.filter(members, (member) => {
  return member.age && member.age >= 41 && member.age <= 60;
});
console.log(filteredAges);

// 4.

let count = 0;
const totalAge = _.reduce(
  members,
  (preAge, currAge) => {
    if (currAge.age) {
      preAge += currAge.age;
      count++;
    }
    return preAge;
  },
  0
);
const avgAge = totalAge / count;
console.log(avgAge);

// 5.

const maxAge = _.reduce(
  members,
  (pre, cur) => {
    if (cur.age) {
      return Math.max(pre, cur.age);
    }
    return pre;
  },
  0
);
console.log(maxAge);

// 6.

const memberGroups = _.reduce(
  members,
  (grp: any, currPerson) => {
    if (currPerson.age && currPerson.age < 35) {
      grp["young"].push(currPerson);
    } else if (currPerson.age && currPerson.age >= 35) {
      grp["old"].push(currPerson);
    } else {
      grp["noage"].push(currPerson);
    }

    return grp;
  },
  { young: [], old: [], noage: [] }
);
console.log(memberGroups);

// 7.

const newMember = { name: "ram kumar", age: 23 };

members.splice(2, 0, newMember);
console.log(members);

// 8.

const [first, second] = members;

console.log(first);
console.log(second);

// 9.
const newPerson = { name: "ramlala", age: 34 };

const updatedMembers = [newPerson, ...members];
console.log(updatedMembers);

// 10.

const address = { state: "jaipur", pincode: 202020, city: "rajasthan" };

const { state, pincode, city } = address;
console.log(state);
console.log(pincode);
console.log(city);

// 11.
const { state: localState } = address;

console.log(localState);

// 12.

const obj = {
  username: "rahul",
  favColor: "green",
  height: "5'4",
  id: 1,
  password: "12345678",
};
const { username, ...remainingObj } = obj;

console.log(username);
console.log(remainingObj);

// 13.

const newObj = { ...obj, favColor: "red" };

const { favColor } = newObj;

console.log(favColor);

// 14.

const array = ["hello", "my", "name", "is", "kalu"];
const person = {
  apple: 1,
  bats: 2,
  dogs: 3,
};

const str = _.reduce(array, (pre: any, curr) => {
  pre += " " + curr;

  return pre;
});
console.log(str);

const filledData = _.reduce(person, (pre, cur) => {
  return pre + cur;
});
console.log(filledData);
