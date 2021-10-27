const usersList = document.querySelector('.js-users-list');
const listTemplate = document.getElementById('users-list-template');

let creatUsersList = user => {
    let userList = listTemplate.content.cloneNode(true);
    $_(".user__name", userList).textContent = user.first_name;
    $_(".user__email", userList).textContent = user.email
    $_(".user__image", userList).src = user.avatar;
    return userList;
  }

const render = array => {
    array.forEach(element => {
        usersList.appendChild(creatUsersList(element))
        console.log(element);
    });
}

;(async () => {
    const basicData = await fetch("https://reqres.in/api/users")
    const cleanData = await basicData.json()
    console.log(cleanData.data);
    render(cleanData.data)
})()