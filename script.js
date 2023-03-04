const citydesc = document.querySelector("#data");

fetch("http://localhost:5000/")
  .then((res) => res.json())
  .then((data) => {
    citydesc.innerText = data;
  })
  .catch((err) => {
    console.log(err);
  });
