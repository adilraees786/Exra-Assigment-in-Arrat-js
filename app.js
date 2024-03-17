//Task 1
//Ek array mein integers ki series banao, aur phir usmein slice() ka istemal karke kisi specific range ke elements ko nikaal kar ek naya array banao.

var integers=[10, 20, 30, 40, 50 ,60]

console.log(integers);

var newArray= integers.slice(0, 2)

console.log(newArray);



//Task 2
//Ek array di gayi hai. Us array mein splice() ka istemal karke kuch elements hatao aur unhein ek alag array mein store karo.

var Names=["ali", "Anwar", "akmal", "ahmad", "usman", "zain" ]
console.log(Names);
var rem=Names.splice(2, 4)
console.log(rem);


//Task 3

//Ek array di gayi hai. Us array ko shift() karke uska pehla element hatao aur usse ek variable mein store karo.

var bakery=["Egg", "Milk", "Bread", "Nimko"];

console.log(bakery);

var delbakery= bakery.shift();
console.log(delbakery);
console.log(bakery);


//Task4
//Ek array di gayi hai. Us array mein unshift() ka istemal karke ek naya element add karo.

var items=["men","Women", "Child", "Boy"]

console.log(items);
items.unshift("Girls")
console.log(items);


//Task5
//Ek array di gayi hai. Us array mein push() ka istemal karke ek naya element add karo.


var hotel=["Biryani", "B.B.Q", "Juices", "Chineses"]
console.log(hotel);
hotel.push("Fast food", "Sweet")
console.log(hotel);



//Task6
//Ek array di gayi hai. Us array mein pop() ka istemal karke ek element remove karo aur usse ek variable mein store karo.

var animals=["Goat", "Cow", "Dog", "Cat"]
console.log(animals);
var popitem=animals.pop();

console.log(popitem);
console.log(animals);


//** Task7 */
//Ek array di gayi hai. Us array ko slice() ka istemal karke uske kuch elements ko naye array mein move karo aur original array ko intact rakho.

var boynames=["Ali", "Usama", "Mohsin", "Nadeem"]

console.log(boynames);
var mov=boynames.slice(0, 3)
console.log(mov);

//Task8

//Ek array di gayi hai. Us array mein splice() ka istemal karke kuch elements ko remove karo aur unhein ek naye array mein store karo.

var fastfood=["Zinger Burger","Chicken Burger", "Beef Burger", "Special Burger", "Sandwhich"]

console.log(fastfood);
var splice=fastfood.splice(2, 4);
console.log(fastfood);
console.log(splice);

//Task9
//Ek array di gayi hai. Us array mein shift() ka istemal karke elements ko ek ek karke remove karo aur unhein alag-alag variables mein store karo

var mobiles=["Nokia", "Samsung", "Tecno", "Vivo", "oppo", "Realme"]
 console.log(mobiles);
 var del_1=mobiles.shift();
 console.log(del_1);
 console.log(mobiles);

 var del_2=mobiles.shift();
 console.log(del_2);
 console.log(mobiles);

 var del_3=mobiles.shift();
 console.log(del_3);
 console.log(mobiles);

 var del_4=mobiles.shift();
 console.log(del_4);
 console.log(mobiles);

 var del_5=mobiles.shift();
 console.log(del_5);
 console.log(mobiles);


 var del_6=mobiles.shift();
 console.log(del_6);
 console.log(mobiles);


 var shift=[del_1, del_2, del_3, del_4, del_5, del_6]
 console.log(shift);