# MyReads Project

MyReads project is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The application is built with React and is integrated with an API server which provides the necessary data for the application and it alos allows user's data to be persisted via the API.

## Installation

To get started:

- Clone or download the repository
- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── README.md - This file.
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
|
└── src
    ├── components
    │   ├── Book.js
    │   ├── BookInfo.js
    │   ├── Books.js
    │   ├── BookShelf.js
    │   ├── BookShelves.js
    │   ├── Home.js
    │   |__ Search.js
    |
    ├── css
    │   ├── App.css
    │   |__ index.css
    |
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   |── arrow-drop-down.svg
    |   |__ info.svg
    |
    ├── server
    |   |__ BookAPI.js
    |
    ├── App.js
    └── index.js
```

## Backend Server

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

The provided file [`BooksAPI.js`](src/server/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`get`](#get)
- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `get`

Method Signature:

```js
get();
```

- Returns a Promise which resolves to a JSON object containing a book object.

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
