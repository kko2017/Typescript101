// api url
const url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

// user data
let user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
    return axios.get(url);
}

function startApp() {
    fetchUser()
        .then(function (response) {
            // console.log(response);
            user = response.data;
            console.log('user ', user);
            username.innerText = user.name;
            email.innerText = user.email;
            address.innerText = user.address.street; 
        })
        .catch((err) => {
            console.error(err);
        });
}

startApp();