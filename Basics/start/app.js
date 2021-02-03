// api url
const url = 'https://jsonplaceholder.typicode.com/users';

// dom
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

// user data
let user = {};

function startApp() {
    axios
        .get(url)
        .then(function (response) {
            // console.log(response);
            user = response.data;
            console.log('users', user);
            username.innerText = user[0].name;
            email.innerText = user[0].email;
            address.innerText = user[0].address.street; 
        })
        .catch((err) => {
            console.error(err);
        });
}

startApp();