const container = document.querySelector(".container")
const coffees = [
  { name: "Figure 1", image: "images/img-1.jpg" },
  { name: "Figure 2", image: "images/img-2.jpg" },
  { name: "Figure 3", image: "images/img-3.jpg" },
  { name: "Figure 4", image: "images/img-4.jpg" },
  { name: " Figure 5", image: "images/img-5.jpg" },
  { name: " Figure 6", image: "images/img-1.jpg" },
  { name: "Figure 7", image: "images/img-2.jpg" },
  { name: "Figure 8", image: "images/img-3.jpg" },
  { name: "Figure 9", image: "images/img-4.jpg" },
]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
				<a class="card--link" href="#">Figure</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}