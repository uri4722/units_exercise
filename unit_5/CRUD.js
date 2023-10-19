const fs = require('fs/promises');
const uniqid = require('uniqid')

async function loadUsers() {
    let users = await fs.readFile('./users.json', 'utf-8')
    users = JSON.parse(users)
    return users;
}

function isExist(newUser, users) {
    const exist = users.find(user => user.email == newUser.email);
    return exist ? true : false;

}

async function createUser(name, email) {
    if (name && email) {
        const user = { name: name, email: email }
        const users = await loadUsers();
        if (!isExist(user, users)) {
            user.id = uniqid();
            users.push(user);
            await fs.writeFile('./users.json', JSON.stringify(users))
        }
    }
}
async function readUser(name) {
    const users = await loadUsers();
    const user = users.find(user => user.name == name);
    console.log(user);
}

async function run() {
    await createUser("uri", "uri@gmail.com");
    await createUser("ben", "ben@gmail.com");
    readUser('uri');
}
run();
