
document.getElementById("btn1").addEventListener("click", () => {
  document.getElementById("container").setAttribute("class", "layout1");
});
document.getElementById("btn2").addEventListener("click", () => {
  document.getElementById("container").setAttribute("class", "layout2");
  document.getElementById("card1").setAttribute("class", "card1")
  document.getElementById("card2").setAttribute("class", "card2")
  document.getElementById("card3").setAttribute("class", "card3")
  document.getElementById("card4").setAttribute("class", "card4")
  document.getElementById("card5").setAttribute("class", "card5")
});
document.getElementById("btn3").addEventListener("click", () => {
  document.getElementById("container").setAttribute("class", "layout3");
  document.getElementById("card1").removeAttribute("class", "card1")
  document.getElementById("card2").removeAttribute("class", "card2")
  document.getElementById("card3").removeAttribute("class", "card3")
  document.getElementById("card4").removeAttribute("class", "card4")
  document.getElementById("card5").removeAttribute("class", "card5")
});
