/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg',
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 1.6,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/the-catcher-in-the-rye.jpeg',
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 2.3,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg',
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: './books-images/harry-potter-and-the-sorcerer.jpg',
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 2.6,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg',
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.5,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg',
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/the-shining.jpeg',
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 2.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg',
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 1.9,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/the-davinci-code.jpeg',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 3.5,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/the-alchemist.jpeg',
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/the-hunger-games.jpeg',
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 3.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/the-girl-with-the-dragon-tattoo.jpg',
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 1.5,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/the-road.jpg',
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 5,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/the-hitchhikers-guide-to-the-galaxy.jpg',
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/the-giver.jpg',
  },
];

// Function to filter books by genre
function filterBooksByGenre(booksArray, genre) {
  return booksArray.filter((book) => book.genre === genre);
}

// Function to display books
function displayBooks(booksArray) {
  const bookListContainer = document.getElementById('bookList');

  // Clear any existing content in the container
  bookListContainer.innerHTML = '';

  if (booksArray.length === 0) {
    // Display a message when no books match the filter
    const noBooksMessage = document.createElement('p');
    noBooksMessage.textContent = 'No books match the selected filter.';
    bookListContainer.appendChild(noBooksMessage);
  } else {
    booksArray.forEach((book) => {
      // Create a div element to hold each book's information
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book-item'); // You can style this class in your CSS

      // Create a div element to hold the book image
      const imgDiv = document.createElement('div');
      imgDiv.classList.add('book-image');

      // Create HTML elements for each book property
      const titleElement = document.createElement('h2');
      titleElement.textContent = book.title;

      const authorElement = document.createElement('p');
      authorElement.textContent = `Author: ${book.author}`;

      const yearElement = document.createElement('p');
      yearElement.textContent = `Year: ${book.year}`;

      const genreElement = document.createElement('p');
      genreElement.textContent = `Genre: ${book.genre}`;

      const ratingElement = document.createElement('p');
      ratingElement.textContent = `Rating: ${book.rating}`;

      // Create a button for the description dropdown
      const descriptionButton = document.createElement('button');
      descriptionButton.classList.add('descriptionButton');
      descriptionButton.textContent = 'About the book';

      // Create arrow elements for indicating dropdown state
      const arrowDown = document.createElement('span');
      arrowDown.textContent = '▼'; // Unicode arrow down symbol
      arrowDown.classList.add('arrow-down');

      const arrowUp = document.createElement('span');
      arrowUp.textContent = '▲'; // Unicode arrow up symbol
      arrowUp.classList.add('arrow-up');
      arrowUp.style.display = 'none'; // Initially hide the arrow up

      // Append arrow elements to the description button
      descriptionButton.appendChild(arrowDown);
      descriptionButton.appendChild(arrowUp);

      // Create the description element
      const descriptionElement = document.createElement('p');
      descriptionElement.classList.add('descriptionElement'); // Add the class here
      descriptionElement.textContent = book.description;
      descriptionElement.style.maxHeight = '0'; // Initially hide the description

      // Add click event listener to toggle description visibility and apply different transition durations
      descriptionButton.addEventListener('click', () => {
        const maxHeight = descriptionElement.style.maxHeight;
        if (maxHeight === '0px' || maxHeight === '') {
          // If description is hidden or maxHeight is not set (initial state), show it
          descriptionElement.style.maxHeight = '200px'; // Set the value according to your content height
          arrowDown.style.display = 'none';
          arrowUp.style.display = 'inline'; // Show the arrow up when description is expanded
        } else {
          // If description is visible, hide it with faster transition
          descriptionElement.style.maxHeight = '0px';
          descriptionElement.classList.add('closing'); // Add the closing class
          arrowDown.style.display = 'inline'; // Show the arrow down when description is collapsed
          arrowUp.style.display = 'none';
        }
      });

      const imageElement = document.createElement('img');
      imageElement.src = book.image;
      imageElement.alt = book.title;

      // Append the imageElement to the imgDiv
      imgDiv.appendChild(imageElement);

      // Append the elements to the bookDiv
      bookDiv.appendChild(imgDiv); // Add the div containing the image
      bookDiv.appendChild(titleElement);
      bookDiv.appendChild(authorElement);
      bookDiv.appendChild(yearElement);
      bookDiv.appendChild(genreElement);
      bookDiv.appendChild(ratingElement);
      bookDiv.appendChild(descriptionButton);
      bookDiv.appendChild(descriptionElement);

      // Append the bookDiv to the container
      bookListContainer.appendChild(bookDiv);
    });
  }
}

// Function to update and display sorted books
function updateAndDisplaySortedBooks(sortFunction) {
  const sortedBooks = sortFunction();
  displayBooks(sortedBooks);
}

// Sorting by title in ascending order
function sortByTitleAscending() {
  return books.slice().sort((a, b) => a.title.localeCompare(b.title));
}

// Sorting by title in descending order
function sortByTitleDescending() {
  return books.slice().sort((a, b) => b.title.localeCompare(a.title));
}

// Add event listeners to the sorting buttons
const sortAscendingButton = document.querySelector('#sortAscendingButton');
const sortDescendingButton = document.querySelector('#sortDescendingButton');

sortAscendingButton.addEventListener('click', () => {
  updateAndDisplaySortedBooks(sortByTitleAscending);
});

sortDescendingButton.addEventListener('click', () => {
  updateAndDisplaySortedBooks(sortByTitleDescending);
});

// Add an event listener to the genre filter select element
const genreFilterSelect = document.getElementById('genreFilter');

genreFilterSelect.addEventListener('change', () => {
  const selectedGenre = genreFilterSelect.value;

  if (selectedGenre === 'All') {
    // Display all books when "All Genres" is selected
    displayBooks(books);
  } else {
    // Filter books by the selected genre
    const filteredBooks = filterBooksByGenre(books, selectedGenre);
    displayBooks(filteredBooks);
  }
});

// Function to filter books by rating range and sort them by rating in descending order
function filterAndSortBooksByRating(booksArray, minRating, maxRating) {
  const filteredBooks = booksArray.filter(
    (book) => book.rating >= minRating && book.rating <= maxRating
  );
  return filteredBooks.sort((a, b) => b.rating - a.rating); // Sort by rating in descending order
}

// Function to update and display filtered books by rating
function updateAndDisplayFilteredBooks(minRating, maxRating) {
  const filteredBooks = filterAndSortBooksByRating(books, minRating, maxRating);
  displayBooks(filteredBooks);
}

// Add event listeners to the rating filter buttons
const ratingButtons = document.querySelectorAll('.rating-filter-button');

ratingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const minRating = parseFloat(button.dataset.minRating);
    const maxRating = parseFloat(button.dataset.maxRating);
    updateAndDisplayFilteredBooks(minRating, maxRating);
  });
});

// Function to filter books by search keyword
function searchBooksByKeyword(booksArray, keyword) {
  const lowerCaseKeyword = keyword.toLowerCase();
  return booksArray.filter((book) => {
    // Check if the keyword is found in book title, author, year, or genre
    return (
      book.title.toLowerCase().includes(lowerCaseKeyword) ||
      book.author.toLowerCase().includes(lowerCaseKeyword) ||
      book.year.toString().includes(lowerCaseKeyword) ||
      book.genre.toLowerCase().includes(lowerCaseKeyword)
    );
  });
}

// Function to update and display books based on search keyword
function updateAndDisplaySearchedBooks() {
  const searchInput = document.getElementById('searchInput');
  const keyword = searchInput.value.trim().toLowerCase();
  const searchedBooks = searchBooksByKeyword(books, keyword);
  displayBooks(searchedBooks);
}

// Add event listener to the search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', updateAndDisplaySearchedBooks);

// Add event listener to handle pressing Enter key in the search input
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    updateAndDisplaySearchedBooks();
  }
});

// Initial display of books
displayBooks(books);
