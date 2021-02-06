// enum Shoes {
//     Loafers,
//     Oxfords,
//     Slippers
// }

// let myShoes = Shoes.Loafers;
// console.log(myShoes); // 0

enum Shoes {
    Loafers = 'Loafers',
    Oxfords = 'Oxfords',
    Slippers = 'Slippers'
}

let myShoes = Shoes.Loafers;
console.log(myShoes); // 0

// for instance
// function askQuestion(answer: string) {
//     if (answer === 'yes') {
//         console.log('Yes');
//     }

//     if (answer === 'no') {
//         console.log('No');
//     }
// }

// askQuestion('yes');
// askQuestion('no');
// askQuestion('y');

enum Answer {
    Yes = 'Yessss',
    No = 'Nooooo'
}

function askQuestion(answer: Answer): void {
    if (answer === Answer.Yes) {
        console.log(answer);
    }

    if (answer === Answer.No) {
        console.log(answer);
    }
}

askQuestion(Answer.Yes);
askQuestion(Answer.No);