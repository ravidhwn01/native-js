
const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

//   1. Get array of first names of everyone
  const firstNames = members.map(fname=>{
    return fname.name.split(" ")[0];
  })
  console.log(firstNames)

//   2. Make everyone's last names in UPPERCASE in given array of objects

 const updatedUser = members.map(member=>{
    return {
        ...member,
        name: member.name.split(" ")[0] + " " + member.name.split(" ")[1].toUpperCase()
    }
 })

console.log(updatedUser);


// 3. Get entries where age is between 41-60

const ages = members.filter(ageOfMembers =>{
    return ageOfMembers.age && ageOfMembers.age >= 41 && ageOfMembers.age <= 60
})

console.log(ages)


// 4. Get average age
let count = 0;
let totalAge = 0;

 members.forEach(ages=>{
    if(ages.age){
        totalAge += ages.age;
        count++;
    }
})
const avgAge = totalAge / count;
console.log(avgAge);

// 5. Get Person with maximum age

const maxAge = members.reduce((pre,curr)=>{
    // console.log(curr.age)
    if(curr.age){
        return Math.max(pre,curr.age)

    }
    return pre;
},0)

console.log(maxAge)


// 6. Divide persons in three groups, result should look like
// {
//   'young': [],
//   'old': [],
//   'noage': []
// }
// Less than 35yrs is young, above 35 is old


const groupOfPersons  =  members.reduce((grp,currPerson)=>{

    if(currPerson.age && currPerson.age< 35){
        grp["young"].push(currPerson);
        
    }
    else if(currPerson.age && currPerson.age >= 35){
        grp["old"].push(currPerson);
        
    }
    else {
        grp['noage'].push(currPerson)
    }
    
    return grp

},{ young:[],old:[], noage:[] })
console.log(groupOfPersons)

// 7. add a new member to same members array instance at index 2

const newMember = { name: "ravi kumar", age: 21 };
members.splice(2, 0, newMember);
console.log(members);

// 8. extract first and second element using destructing

const [first,second ] = members;
console.log(first)
console.log(second)


// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards

const newInstance = {name:"user1",age:30}

const newArrayInstance = [newInstance,...members]
console.log(newArrayInstance)


// 10. Extract properties of object using destructuring
const user = {fullname:"yash kumar",age:23, city:"jaipur"}

const {fullname,age,city} =  user
console.log(fullname)
console.log(age)
console.log(city)

// 11. Rename extracted property of object while destructing
const user1 = {username:"yash kumar",workingTime:9, town:"jaipur"}

const {username:profilename,workingTime :timing,town } = user1
console.log(profilename)
console.log(timing)



// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object

const posts = {
    id:1,
    title:"this is title",
    description:"this is description",
    totalPosts:100,

}
const { id, ...remaining} = posts

console.log(id)
console.log(remaining)


// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step

const rePosts = {...posts,title:{title:"title has changed"} }
console.log(rePosts)
const {title} = rePosts
console.log(title)

// 14. Use reduce function on array and object

const numbers = [12,3,4,67,8];

const sum = numbers.reduce((pre,curr)=>{
        pre += curr

        return pre
},0)
console.log(sum);