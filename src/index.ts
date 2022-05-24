//TYPES------------------------------
// let sales = 123_456_789;
// let course = "Typescript";
// let is_published = true;
// let level;

// function render(document) {
//   console.log(document);
// }

//ARRAYS-----------------------------
// let numbers:number[] = [];
// numbers.forEach(n => n.toExponential)

//TUPLES?----------------------------
// let user:[number, string] = [1, "Mosh"]
// user.push(1);

//ENUMS: list of related constants, pascal naming convention?
// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size {Small = 1, Medium, Large};

// let mySize: Size = Size.Small;
// console.log(mySize);

//FUNCTIONS------------------------------

// setting parameters to accept type of value but can also set function to return type of value or void if no return

// JS returns undefined if no value is returned => not a number
// param optional by addign question mark, you could give param default value

// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) return income * 1.2;
//   return income * 1.3;
// }

// calculateTax(10_000)

//notes:
// -properly anotate fxns w. params/return types
// -Enable: "noUnusedLocals", "noUnusedParameters", "noImplicitReturns"

// OBJECTS-------------------------------

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = { id: 1, name: "Jenny", retire: (date: Date) => console.log(date)};

//readonly modifier: typescript compiler prevents us from accidentally modifying value of property

//issues: if initializing another employee, then you will have to anotate a completely new object, verbose and redundant
//new employee might need to have different properties available to it, different shape
//hard to read

//ADVANCED TYPES ------------------------

//Type Alias

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Jenny",
//   retire: (date: Date) => console.log(date),
// };

//Union Types

function kgToLbs (weight: number | string): number {
    //Narrowing
    if(typeof weight === "number") {
        return weight * 2.2
    } else {
       return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10kg');

//union types dont pass on to  generated JS code, purely for compiler to do type checking