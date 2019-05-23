var onSubmit = document.getElementById("submitBtn");
var searchInput = document.getElementById("search-from-input");
var results = document.getElementById("results");
var container = document.getElementById("container");
var PageMovie = 1;
onSubmit.onclick = validateInput;


function validateInput(e) {
    results.innerHTML = "";
    PageMovie = 1;
    document.getElementById("btnLoadMore").disabled = false;
    if (searchInput.value.length >= 3) {
        document.getElementById("message").innerText = "";
        fetchCall();
    }
    else {
        document.getElementById("btnLoadMore").setAttribute("hidden", "hidden");
        document.getElementById("message").innerText = "Must containe at least 3 charectars";
    }
}

function fetchCall() {
    var serrchTerm = searchInput.value;
    fetch("http://omdbapi.com/?apikey=74fed2a7&s=" + serrchTerm + "&type=movie&page=" + PageMovie)
        .then((response) => response.json())
        .then((data) => {
            if (data.Response === "True") {
                createComponent(data.Search);
                checkMore(data.totalResults);
            }
            else if (data.Response === "False") {
                document.getElementById("btnLoadMore").disabled = true;
            }
        })
}

function getInfoAll() {
    var imdb = this.getAttribute("imdb");
    fetch("http://omdbapi.com/?apikey=74fed2a7&i=" + imdb)
        .then((response) => response.json())
        .then((data) => {
            createInfo(data, imdb);
        })
}
function createInfo(data, imdb) {
    console.log(data);
    var info = document.getElementById(imdb);
    var content = "";
    for (let key in data) {
        if (key === "Ratings") {
            for (var i = 0; i < data[key].length; i++) {      
                content += "<div> Source "+i+": " + data[key][i].Source + "</div>";
                content += "<div> Value "+i+": " + data[key][i].Value + "</div>";
            }
        }
        else{
            content += "<div>" + key + ": " + data[key] + "</div>";
        }
    }
    info.innerHTML = content;
}

function createComponent(data) {
    PageMovie++;
    var ul = document.createElement("ul");
    for (var obj of data) {
        var link = document.createElement("a");
        var info = document.createElement("div");
        var li = document.createElement("li");
        var image = document.createElement("img");
        info.id = obj.imdbID;
        info.className = "info";
        link.href = "https://www.imdb.com/title/" + obj.imdbID;
        link.innerText = obj.Title;
        link.target = "_blank";
        image.src = obj.Poster;
        image.onclick = getInfoAll;
        image.setAttribute("imdb", obj.imdbID);
        li.className = "item"
        li.appendChild(image);
        li.appendChild(link);
        li.appendChild(info);
        ul.appendChild(li);
    }
    results.appendChild(ul);
    document.getElementById("btnLoadMore").removeAttribute("hidden");
}
function checkMore(totalResults) {
    if (PageMovie >= (totalResults / 10) + 1) {
        document.getElementById("btnLoadMore").disabled = true;
    }
}
