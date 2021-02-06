// Union type
// Unio merit: type guard
function logMessage(message: string | number) {
    if (typeof message === 'string') {
        message.charAt(1);
    } else if (typeof message === 'number') {
        message.toExponential();
    }
    throw new TypeError('Message must be number or string.');
}
logMessage('hello');
logMessage(20);

var timmy: string | boolean | number;


interface Musician {
    name: string;
    instrument: string;
}

interface Player {
    name: string,
    sport: string
}

function askJob(someone: Musician | Player) {
    someone.name;
    someone.instrument;
    someone.sport;
}