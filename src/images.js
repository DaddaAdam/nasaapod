const api_key = "rxtd7YyfZkoVoCorbjbuOnWptyDoP7alg8ULJxG4";
let resultsArray = [];

async function fetchPhoto() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=10`
  );

  resultsArray = await res.json();
}
