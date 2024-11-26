

function displayResults(filteredResults) {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
    filteredResults.forEach(result => {
        const div = document.createElement('div');
        div.innerText = result.title;
        div.onclick = () => showDetails(result);
        resultList.appendChild(div);
    });
}

function showDetails(result) {
    const resultDetails = document.getElementById('resultDetails');
    resultDetails.innerHTML = `
        <h2>${result.title}</h2>
        <img src="${result.image}" alt="${result.title}">
        <p><strong>Category:</strong> ${result.category}</p>
        <p><strong>Description:</strong> ${result.description}</p>
    `;
}

function filterResults() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredResults = results.filter(result => result.title.toLowerCase().includes(searchInput));
    displayResults(filteredResults);
}

// Initial display of results
displayResults(results);