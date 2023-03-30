const API_KEY = "34857272-204fe27f7bf2e0e96600014ec";
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const grid = document.getElementById("image-grid");

// This event handle the submit button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = input.value;
  if (searchTerm) {
    searchImages(searchTerm);
  }
});

// This function fetch images from Pixabay API
async function searchImages(q) {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${q}&image_type=photo`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayImages(data.hits);
  } catch (error) {
    console.error(error);
  }
}

// This function display images in the grid
function displayImages(images) {
  grid.innerHTML = "";
  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.webformatURL;
    img.alt = image.tags;
    grid.appendChild(img);
  });
}
