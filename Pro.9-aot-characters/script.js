const charactersElement = document.getElementById("characters");
const characterElement = document.getElementById("character");
const url = "https://api.attackontitanapi.com/characters";
const random = "https://i.pinimg.com/564x/62/91/a6/6291a6af028960e7da2877fcda9c3498.jpg";

async function fetchData() {
  const res = await fetch(url)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return res;
}

async function fetchSingleData(id) {
  const res = await fetch(url + `/${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return res
}

displayData();

function singleData(src, name, id) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.setAttribute("data-char", "");
  const img = document.createElement("img");
  img.src = src;
  const h1 = document.createElement("h1");
  h1.innerText = name;
  cardElement.appendChild(img);
  cardElement.appendChild(h1);
  cardElement.addEventListener("click", () => {
    singleDetailChar(id);
  })
  return cardElement;
}

async function displayData() {
  const data = await fetchData();
  const item = data.results;
  Array.from(item, (x) => {
    if(!x.img) {
        img = random;
    } else {
        const str = x.img.split("/revision");
        img = str[0]
    }
    charactersElement.appendChild(singleData(img, x.name, x.id));
  });
}


async function singleDetailChar(id) {
  charactersElement.classList.add("hide");
  characterElement.classList.remove("hide");

  const informationElement = document.getElementById("information");
  const bgDetailElement = document.getElementById("bg-detail");
  informationElement.innerHTML = "";


  const data = await fetchSingleData(id);
  const src = data.img.split("/re");
  bgDetailElement.src = src[0];
  console.log(data)
  informationElement.innerHTML = `<span>${data.name}</span> <br>
                                                                      <span>Gender: ${data.gender}</span><br>
                                                                      <span>Age: ${data.age}</span> <br>
                                                                      <span>Height: ${data.height}</span> <br>
                                                                      <span>Birthplace: ${data.birthplace}</span> <br>
                                                                      <span>Occupation: ${data.occupation}</span> <br>
                                                                      <span>Relatives: family: ${data.relatives[0].family}</span> <br>
                                                                      <span>Residence: ${data.residence}</span> <br>
                                                                      <span>Status: ${data.status}</span>
  `

}