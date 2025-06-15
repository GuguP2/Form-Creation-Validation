async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data')

  try{
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = '';

  users = [
  { name: "Gugu" },
  { name: "Mbali" },
  { name: "Rato" }
];

const dataContainer = document.getElementById('data-container');
const userList = document.createElement('ul');

users.forEach(user => {
  const listItem = document.createElement('li');

  listItem.textContent = user.name;

  userList.appendChild(listItem);
});
 
dataContainer.appendChild(userList);

  } catch (error) {
    console.error('Failed to load user data.', error.message);
  }
}
document.addEventListener = 'DOMContentLoaded';