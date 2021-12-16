// Global variable
// only accept one img at a time
var fileName;

function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

// const output = document.querySelector("#output");
function processSelectedFiles(fileInput) {
  let files = fileInput.files;
  fileName = `${files[0].name}`;
  console.log(fileName);
}

(document).ready(function() {
  ('.image-link').magnificPopup({type:'image'});
});

document.getElementById('verify').onclick = function() { 
  console.log("click verify");
  console.log(fileName);
  // link to model
  // get result，popout result or console.log(result)
  // if find, congrats. if not, print(this is not in our database)
};

// thoughts
function passin(event){
  if(event.target.files.length > 0){
    var image = document.getElementById("file-ip-1-preview");
    // image pass in to deep learning model
  }
}

// verify link download
// image download to a folder

var song = Array("Main Entrance", "Plaza de California", "Arboretum Entrance", "Bell", "Surfing Statue", "Del Mar");

function randomSong() {
  var randomSong = song[Math.floor(Math.random() * song.length)];
  document.getElementById('randomSong').value = randomSong;
}