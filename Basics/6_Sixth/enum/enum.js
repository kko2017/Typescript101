// enum Shoes {
//     Loafers,
//     Oxfords,
//     Slippers
// }
// let myShoes = Shoes.Loafers;
// console.log(myShoes); // 0
var Shoes;
(function (Shoes) {
    Shoes["Loafers"] = "Loafers";
    Shoes["Oxfords"] = "Oxfords";
    Shoes["Slippers"] = "Slippers";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Loafers;
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
var Answer;
(function (Answer) {
    Answer["Yes"] = "Yessss";
    Answer["No"] = "Nooooo";
})(Answer || (Answer = {}));
function askQuestion(answer) {
    if (answer === Answer.Yes) {
        console.log(answer);
    }
    if (answer === Answer.No) {
        console.log(answer);
    }
}
askQuestion(Answer.Yes);
askQuestion(Answer.No);
