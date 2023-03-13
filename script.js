const citydesc = document.querySelector("#data");

fetch("http://52.91.135.178:5000")
  .then((res) => res.json())
  .then((data) => {
    citydesc.innerText = data;
  })
  .catch((err) => {
    console.log(err);
  });
