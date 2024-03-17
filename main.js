let startTime, endTime;
let imageSize = "";
let image = new Image();
let imageLink =
  "https://images.pexels.com/photos/16603973/pexels-photo-16603973/free-photo-of-bridge-between-yildiz-park-and-ciragan-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let mbsHtml = document.querySelector(".mbs");
let kbsHtml = document.querySelector(".kbs");
let loadingTag = document.querySelector(".loading");
let btnCheck = document.querySelector(".btn-check");

image.onload = async function getImgRequest(e) {
  endTime = new Date().getTime();
  await fetch(imageLink)
    .then((response) => {
      imageSize = response.headers.get("content-length");
      calcSpeed();
    })
    .catch((err) => console.log(err));
};

function calcSpeed() {
  let timeDuration = (endTime - startTime) / 1000;
  let imageSizeBits = imageSize * 8;
  let speedKbs = ((imageSizeBits / timeDuration).toFixed(2) / 1024).toFixed(2);
  let speedMbs = (speedKbs / 1024).toFixed(2);
  loadingTag.style.display = "none";
  kbsHtml.innerHTML = `${speedKbs} kbs`;
  mbsHtml.innerHTML = `${speedMbs} mbs`;
}

function checkHandler() {
  startTime = new Date().getTime();
  image.src = imageLink;
}

btnCheck.addEventListener("click", checkHandler);
