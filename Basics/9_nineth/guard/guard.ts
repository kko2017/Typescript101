interface BallPlayer {
    name: string,
    position: string
}

interface Artist {
    name: string,
    skill: string
}

let Jun: BallPlayer | Artist = {
    name: 'Jun',
    position: 'Centre',
    skill: 'Piano'
};
// Error! Because developer only can call properties used in both interface when the instance can be delcared and implemented by union type.
console.log(Jun.position);

if ((Jun as BallPlayer).position) {
    const position = (Jun as BallPlayer).position;
    console.log(position);
}else if ((Jun as Artist).skill) {
    const skill = (Jun as Artist).skill;
    console.log(skill);
}


// The way of type guards
// Definition of type guards
function isArtist(target: Artist | BallPlayer): target is Artist {
    return (target as Artist).skill !== undefined;
}

if (isArtist(Jun)) {
    console.log(Jun.skill);
} else {
    console.log(Jun.position);
}