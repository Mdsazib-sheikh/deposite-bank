

function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting by default
  
    // Simple form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all the required fields.');
    } else {
      // Form is valid, you can submit it or perform additional actions here
      alert('Form submitted successfully!');
      // You can also use AJAX to submit the form data to a server
      // For example: sendFormDataToServer(name, email, message);
    }
  }
  
//newpaper deisgn

 
document.addEventListener('DOMContentLoaded', function () {
  const newsContainer = document.getElementById('news-container');

  // Fetch news articles from the server
  fetchNews('home');

  // Handle navigation clicks
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const category = this.id;
      fetchNews(category);
    });
  });

  function fetchNews(category) {
    // Use AJAX or fetch API to get news from the server based on the category
    // Replace the following lines with actual backend code
    const fakeNewsData = getFakeNewsData(category);

    // Render news articles
    renderNews(fakeNewsData);
  }

  function renderNews(newsData) {
    newsContainer.innerHTML = ''; // Clear existing content

    newsData.forEach(article => {
      const articleElement = createArticleElement(article);
      newsContainer.appendChild(articleElement);
    });
  }

  function createArticleElement(article) {
    const articleElement = document.createElement('article');

    const titleElement = document.createElement('h2');
    titleElement.textContent = article.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = article.content;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(contentElement);

    return articleElement;
  }

  function getFakeNewsData(category) {
    // Replace this with actual backend logic
    if (category === 'home') {
      return [
        { title: 'Breaking News 1', content: 'Lorem ipsum dolor sit amet.' },
        { title: 'Breaking News 2', content: 'Consectetur adipiscing elit.' },
        // Add more articles as needed
      ];
    } else if (category === 'politics') {
      // Fetch politics news
    } else if (category === 'business') {
      // Fetch business news
    }

    return [];
  }
});
