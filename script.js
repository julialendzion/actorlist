fetch("actors.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    showData(data);
  });

function showData(data) {
  console.log("data", data);
  data.forEach(actor);
}
function actor(data) {
  //grab the template

  const template = document.querySelector("template").content;
  //clone
  const copy = template.cloneNode(true);

  //adjust stuff
  copy.querySelector(".fullname").textContent = data.fullname;
  copy.querySelector(".name").addEventListener("click", showDetails);
  //apend it
  document.querySelector("#actorlist").appendChild(copy);

  function showDetails() {
    console.log("dziala!!");
    document.querySelector(".details").classList.remove("hidden");
    document.querySelector(".movie").textContent = data.movie;
    document.querySelector(".close").addEventListener("click", closeBox);
  }

  function closeBox() {
    document.querySelector(".details").classList.add("hidden");
  }
}
