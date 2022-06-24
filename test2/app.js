let paths = [
  "./img/define.jpg",
  "./img/design.jpg",
  "./img/implement.jpg",
  "./img/maintain.jpg",
  "./img/plan.jpg",
  "./img/test.jpg",
];

let img = document.getElementById("img");
let i = 0;
let images = setInterval(function () {
  if (i >= paths.length) {
    clearInterval(images);
    return;
  }
  img.setAttribute('class', 'img')
  img.src = paths[i++];
}, 2000);

let j = 0;
let menus = ["define", "design", "implement", "maintain", "plan", "test"];

let ul = document.getElementById("ul");
let item = setInterval(function () {
  if (j >= menus.length) {
    clearInterval(item);
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = menus[j++];
  ul.appendChild(li);
}, 2000);
