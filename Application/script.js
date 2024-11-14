const results = [
    { 
        id: 1, 
        title: "Result 1", 
        description: "This is a detailed description of Result 1.",
        category: "Category A",
        image: "https://via.placeholder.com/150"
    },
    { 
        id: 2, 
        title: "Result 2", 
        description: "This is a detailed description of Result 2.",
        category: "Category B",
        image: "https://via.placeholder.com/150"
    },
    { 
        id: 3, 
        title: "Result 3", 
        description: "This is a detailed description of Result 3.",
        category: "Category C",
        image: "https://via.placeholder.com/150"
    },
    { 
        id: 4, 
        title: "Result 4", 
        description: "This is a detailed description of Result 4.",
        category: "Category A",
        image: "https://via.placeholder.com/150"
    },
    { 
        id: 5, 
        title: "Result 5", 
        description: "This is a detailed description of Result 5.",
        category: "Category B",
        image: "https://via.placeholder.com/150"
    }
];

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