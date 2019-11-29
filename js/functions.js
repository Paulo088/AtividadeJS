let People = class People {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }
};

let peoples = [];

function save() {
  let people = new People(
    document.getElementById("name").value,
    document.getElementById("age").value,
    document.getElementById("email").value,
    document.getElementById("pwd").value
  );

  peoples.push(people);

  let table = document.getElementById("tbl");
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = people.name;
  cell2.innerHTML = people.age;
  cell3.innerHTML = people.email;
}
