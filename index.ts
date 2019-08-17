// class Student {

//     constructor(public readonly name: string, public family: string) {}

//     sayHello(): void {
//         this.family = '';
//         console.log(`Hi My Name is ${this.name} ${this.family}`);
//     }
// }

// let stu: Student = new Student('Ali', 'Edp');


// console.log(stu['name']);
// console.log(stu['family']);
// stu.sayHello();

// let array1: number[] = [1,2,3];
// let array2: Array<number> = [1,2,3];

// enum SpeakerColor {
//     GREEN, BLUE, RED, Banafsh
// }

// let colorName: string = SpeakerColor[2];

// const UnlimitWork: () => never = () => {
//     throw new Error('Moshkel Daram');
// }


// UnlimitWork();


// const func: (message?: string) => string = (message?: string) => {
//     if (message != undefined) {
//         return message;
//     }
//     return 'No Error Found !'
// }

// func();

let array: number[] = [1,2,3];


console.log(array[1]);
