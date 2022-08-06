const api_url = 'https://swapi.dev/api/people/';

const response = fetch(api_url, { method: 'get' })
  .then(
    (response) => response.json(),
    (error) => console.error(error),
  )
  .then((data) => {
    console.log(data.results);
    getHuman(data.results);
  });
function getHuman(data) {
  data.map((element) => {
    let div = document.createElement('div');
    let name = document.createElement('h1');
    name.innerText = `Name: ${element.name}`;

    let gender = document.createElement('p');
    gender.innerText = `Gender: ${element.gender}`;

    let bDay = document.createElement('p');
    bDay.innerText = `Date of Birth: ${element.birth_year}`;

    div.append(name, gender, bDay);
    div.className = 'card';

    document.querySelector(`body`).appendChild(div);
  });
}
