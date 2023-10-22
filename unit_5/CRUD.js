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
async function readUser(id) {
    const users = await loadUsers();
    const user = users.find(user => user.id === id);
    console.log(user);
}

async function updateUser(id, name, email) {
    const users = await loadUsers();
    const user = users.find(user => user.id === id);
    if (name) {
        user.name = name;
    }
    if (email) {
        user.email = email;
    }
    await fs.writeFile('./users.json', JSON.stringify(users))
}

async function deletUser(id) {
    const users = await loadUsers();
    const index = users.findIndex(user => user.id === id);
    console.log(index);
    users.splice(index, 1);
    console.log(users);

}


async function run() {
    await createUser("uri", "uri@gmail.com");
    await createUser("ben", "ben@gmail.com");

    // check id in the users.json file and replace them

    // updateUser("id", "Uri")
    // updateUser("id", null, "Uri@gmail.com")
    // readUser("id")

    // deletUser("id");

}
run();
