//  Equality and inequality test1.
console.log("Equality test with strings: ","apple"==="apple")

//  Equality and inequality test2.
console.log("inequality test with strings: ",("apple"as string)!="orange")

//tests using the lower case function.
console.log("lower case function test:", "Hello" .toLowerCase()==="hello")

// numerical tests involving equlity .
console.log("equality test with numbers: ", 26 ===26)
// numerical tests involving  inequality.
console.log("inequality test with numbers: ", (26 as number) != 16)

// greater than and less than.
console.log("Greater than test: ", 10>5)

// less than.
console.log("less than test: ", 5<10)

// greater than or equal to 
console.log("greater than and equal to test: ",11>=11)

// less than or equal to
console.log("less than or equal to test: ", 5 <=10)

// tests using "and"  operator.
console.log("And operator test:" ,5===5 && 10>5 ,)
// tests using "or"  operator.
console.log("or operator test:" ,5===5 || false ,)
// test whether an item is in a array
const fruits :string[] =['banana','orange','apple']
console.log('testing "banana" is in array' , fruits.includes("banana"))
// test whether an item is not in a array
console.log('testing "pappaya" is not in array' , !fruits.includes("pappaya"))