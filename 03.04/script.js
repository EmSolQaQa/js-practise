// let arr = [
//     {
//       name: "test",
//       key: 111,
//     },
//     {
//       name: "task",
//       key: 2,
//     },
//     {
//       name: "tanqo",
//       key: 3,
//     },
//     {
//       name: "like",
//       key: 4,
//     },
//     {
//       name: "task",
//       key: 5,
//     },
//     {
//       name: "trust",
//       key: 6,
//     },
//     {
//       name: "test",
//       key: 7,
//     },
//     {
//       name: "last",
//       key: 8,
//     },
//     {
//       name: "tanqo",
//       key: 9,
//     },
//     {
//       name: "elephant",
//       key: 10,
//     },
//     {
//       name: "love",
//       key: 11,
//     },
//     {
//       name: "small",
//       key: 12,
//     },
//     {
//       name: "little",
//       key: 13,
//     },
//   ];
//   let array = [2,6,2,33,42,324,4,3,2,]
//   let counter = 0
//   let sum = arr.filter((number)=>{
//     return number.key > 5 && counter++
    
//   }).reduce((total,number)=>{
//     return total+number.key
//   }, 0)
//   console.log(sum/counter);



//   let count = 0
//   arr.forEach(item => {
//     if (item.name.startsWith("e") && item.name.endsWith("t")) {
//         count++
//     }
//   });
//   console.log(count);
//   let emptyarr = []
//   let arrayexample = [324,4,5,3,2,32,4234,5,6]
//   let res = arrayexample.map((number) =>{
//     if (number % 2 == 0) {
//        emptyarr.push(number) 
//     }
//     return emptyarr
    
//   })
//   console.log(res);
// let array = 
// [
//     {
//       "id": 2,
//       "description": "Sweet and savory sauces relishes spreads and seasonings",
//       "name": "Condiments"
//     },
//     {
//       "id": 1,
//       "description": "Soft drinks coffees teas beers and ales",
//       "name": "Beverages"
//     },
//     {
//       "id": 3,
//       "description": "Desserts candies and sweet breads",
//       "name": "Confections"
//     },
//     {
//       "id": 4,
//       "description": "Cheeses",
//       "name": "Dairy Products"
//     },
//     {
//       "id": 5,
//       "description": "Breads crackers pasta and cereal",
//       "name": "Grains/Cereals"
//     },
//     {
//       "id": 6,
//       "description": "Prepared meats",
//       "name": "Meat/Poultry"
//     },
//     {
//       "id": 7,
//       "description": "Dried fruit and bean curd",
//       "name": "Produce"
//     },
//     {
//       "id": 8,
//       "description": "Seaweed and fish",
//       "name": "Seafood"
//     }
//   ]
//   let arrayname = array.filter((item)=> {
//     // if (item.name.length > 10) {
//         return item.id%2 == 0 && item.name.length > 10 
//     // }
    
//   })
//   console.log(arrayname);
// String.prototype.half= function () {
//     output = " "
//     for (let i = 0; i < this.length; i++) {
//         if (i<(this.length/2)) {
//             output += this[i].toUpperCase()
//         }
//         else{
//             output += this[i].toLowerCase()
//         }
        
//     }
//     return output
// }
// let text = window.prompt("Metn daxil edin:")
// console.log(text.half());
let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];
//   let filteredArr = arr.filter((item)=> {
//   return item.name.startsWith("t")
//   })
//   console.log(filteredArr);
// let newarr = []
// arr.forEach((number)=>{
    
//     if (number.name.startsWith("t") && number.name.endsWith("t")) {
//       newarr.push(number.name) 
//     }
// })
// console.log(newarr);
// let sum = 0
// arr.filter((number)=> {
//     if (number.name.startsWith("t") && number.name.endsWith("t")) {
//         sum += number.key
//     }
// })
// console.log(sum);
// let newarr = arr.filter((item)=>{
//     if (item.name.endsWith("e")) {
//         return item.name = "Superdev"
//     }
// })
// console.log(newarr);
// let max = arr[0].name
// arr.filter((item)=>{
//     if (item.name.length>max.length) {
//         return max = item.name
//     }
// })
// console.log(max);
let max = arr[0].name
arr.filter((item)=>{
    if (item.name.length>max.length) {
        max = item
        return max.key
    }
})
console.log(max);
