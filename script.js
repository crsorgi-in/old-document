// Get the form and input elements
const form = document.querySelector("form");
const input = document.getElementById("search-input");

// The data to search in
const data = [
  { title: "Article 1", content: "Lorem ipsum dolor sit amet" },
  { title: "Article 2", content: "Consectetur adipiscing elit" },
  { title: "Article 3", content: "Sed do eiusmod tempor incididunt" }
];

// Function to perform the search
function search(query) {
  const results = [];

  // Loop through the data and find matching entries
  for (let i = 0; i < data.length; i++) {
    if (data[i].title.toLowerCase().includes(query) || data[i].content.toLowerCase().includes(query)) {
      results.push(data[i]);
    }
  }

  return results;
}

// Event listener for the form submit event
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the search query
  const query = input.value.toLowerCase();

  // Perform the search
  const results = search(query);

  // Display the results
  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    const item = document.createElement("li");
    item.classList.add("list-group-item");
    item.textContent = results[i].title;
    resultsList.appendChild(item);
  }
});
