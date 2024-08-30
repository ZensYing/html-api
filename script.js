document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articles-container');

    // Fetch the data from the API
    fetch('https://sounsoratha.online/cms/items/articles?filter[status]=published&sort=-date_created')
        .then(response => response.json())
        .then(data => {
            // Extract the articles array from the response
            const articles = data.data;

            // Loop through each article and create HTML elements to display them
            articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.className = 'article';

                // Apply styles directly via JavaScript
                articleElement.style.backgroundColor = '#fff';
                articleElement.style.border = '1px solid #ddd';
                articleElement.style.padding = '20px';
                articleElement.style.marginBottom = '20px';
                articleElement.style.borderRadius = '5px';

                // Create a link element
                const linkElement = document.createElement('a');
                linkElement.href = `detail.html?id=${article.id}`;
                linkElement.style.textDecoration = 'none';
                linkElement.style.color = 'inherit';

                const titleElement = document.createElement('h2');
                titleElement.textContent = article.title;

                // Apply styles to the title element
                titleElement.style.color = '#333';
                titleElement.style.fontFamily = 'Arial, sans-serif';
                titleElement.style.fontSize = '24px';

                const bodyElement = document.createElement('div');

                const imgElement = document.createElement('img');
                imgElement.src = `https://sounsoratha.online/cms/assets/${article.thumbnail}`;
                imgElement.style.height = '200px';
                imgElement.style.objectFit = 'cover';
                imgElement.style.borderRadius = '25px';

                // Append the elements to the link, then to the article container
                linkElement.appendChild(titleElement);
                linkElement.appendChild(imgElement);

                articleElement.appendChild(linkElement);
                articlesContainer.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Error fetching the articles:', error);
            articlesContainer.innerHTML = '<p>Error loading articles. Please try again later.</p>';
        });
});
