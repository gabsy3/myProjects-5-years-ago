let tm1 = new Thumbnails("tm1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsw9q1gKQhk3M3krgRtn9vCgYaKDvQD_GgJdL-y-jNiJRLbgC");
let tm2 = new Thumbnails("tm2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIN7mbSbgvFXj2PXLzjXbC_NnVVOBoqHMgv9p8tw1KZuV-ngJGw");
let tm3 = new Thumbnails("tm3", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82DqniYRM-q3SKuf-ziG1u9Fc4gGuD8O8exGkZazb6SurMllSmw");
let tm4 = new Thumbnails("tm4", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4mFHp-axQIxtrs-yV_DRePjPn6C2tCT7EFnVAJUayne7ZfaG");
let tm5 = new Thumbnails("tm5", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6ltr-w2OSqtk-nh4eVIpndpQncu3r6M3EfiVVR5s5cuEGVOk");
let tm6 = new Thumbnails("tm6", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mrze3yjNQjIjRtfxVHYeRrDZwNrNV3Lq4FHq_l-Z1eKWrm71w");
let tm7 = new Thumbnails("tm7", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7arfj-4VZnRls18ELncSRFACyqBCMcJLjZcxyCmr9DVC2qNrbA");
let tm8 = new Thumbnails("tm8", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgKOVXDVIY2Yaq0a0rDLWoV0ks0zcQVDa6aCQVJVGcD6llupPPw");
let tm9 = new Thumbnails("tm9", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQN-mcmQVIi2HLnAZhvJ-JCYZ1Yf7EtNlA1wVBf8gAYkh6T2r");
let tm10 = new Thumbnails("tm10", "https://www.barraquer.com/wp-content/uploads/2017/07/el-ojo-del-surfista-p-08-2017.jpg");
let obj = { tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9, tm10 };
let intervalName;

let data = getData();
if (data) {
    let pic = document.getElementById("big-picture-img");
    pic.src = data;
    initialThumbnails();
}
else {
    initialThumbnails();
}


function initialThumbnails() {
    let thumbnails = document.getElementById("thumbnails");
    let ol1 = document.createElement("div");
    let ol2 = document.createElement("div");
    let thumbnailsCarousle = document.createElement("div");
    let arrowLeftDiv = document.createElement("div");
    let arrowRightDiv = document.createElement("div");
    ol1.id = "overlayer1";
    ol2.id = "overlayer2";
    thumbnails.appendChild(ol1);
    thumbnails.appendChild(ol2);
    arrowLeftDiv.className = "arrow arrow-left";
    arrowLeftDiv.onmouseover = scrollOver;
    arrowLeftDiv.onmouseleave = scrollLeave;
    arrowRightDiv.onmouseover = scrollOver;
    arrowRightDiv.onmouseleave = scrollLeave;
    arrowRightDiv.className = "arrow arrow-right";
    thumbnailsCarousle.id = "thumbnails-carousle";
    thumbnails.appendChild(arrowLeftDiv);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let img = document.createElement("img");
            img.src = obj[key].src;
            img.setAttribute("imgnumber", key);
            img.onclick = function (e) {
                let ins = obj[key].name;
                obj[ins].setimage(e);
            };
            thumbnailsCarousle.appendChild(img);
        }
    }
    thumbnails.appendChild(thumbnailsCarousle);
    thumbnails.appendChild(arrowRightDiv);
}
function scrollLeave(e) {
    clearInterval(intervalName);
}
function scrollOver(e) {
    let arrow = e.target.className;
    let thumbnailsCarousle = document.getElementById("thumbnails-carousle");
    let pos = thumbnailsCarousle.style.left;
    let computedStyle = window.getComputedStyle(thumbnailsCarousle, null);
    pos = computedStyle.left;
    pos = pos.split("px");
    pos = pos[0];
    intervalName = setInterval(frame, 5);
    function frame() {
        if (arrow === "arrow arrow-left") {
            if (pos <= -200) {
                clearInterval(intervalName);
            } else {
                pos--;
                thumbnailsCarousle.style.left = pos + 'px';
            }
        }
        else {
            if (pos >= 500) {
                clearInterval(intervalName);
            } else {
                pos++;
                thumbnailsCarousle.style.left = pos + 'px';
            }
        }

    }
}
const setNextImg = (e) => {
    let Img = document.getElementById("big-picture-img");
    let numberImg = Img.getAttribute("imgnumber");
    let newImg = "tm" + (parseInt(numberImg.substring(2)) - 1);
    if (parseInt(numberImg.substring(2)) === 1) {
        newImg = "tm10";
    }
    Img.src = obj[newImg].src;
    Img.setAttribute("imgnumber", newImg);
}
const setPrevImg = (e) => {
    let Img = document.getElementById("big-picture-img");
    let numberImg = Img.getAttribute("imgnumber");
    let newImg = "tm" + (parseInt(numberImg.substring(2)) + 1);
    if (parseInt(numberImg.substring(2)) === 10) {
        newImg = "tm1";
    }
    Img.src = obj[newImg].src;
    Img.setAttribute("imgnumber", newImg);
}
function Thumbnails(name, src) {
    this.name = name;
    this.src = src;
}
Thumbnails.prototype.setimage = (e) => {
    let pic = document.getElementById("big-picture-img");
    let newImg = e.target.attributes[1].nodeValue;
    pic.src = e.target.src;
    pic.setAttribute("imgnumber", newImg);
}


const saveBigPic = () => {
    let pic = document.getElementById("big-picture-img");
    saveData(pic.src);
}

window.onbeforeunload = (event) => {
    saveBigPic();
}