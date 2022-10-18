var app = new Framework7({
  // App root element
  el: '#app',
  routes: [
    {
      path: '/',
      url: 'index.html',
    },
    {
      path: '/podcasts/',
      url: 'podcasts.html',
    },
    {
      path: '/movies/',
      url: 'movies.html',
    },
    {
      path: '/books/',
      url: 'books.html',
    },
  ],
  // ... other parameters
});
var mainView = app.views.create('.view-main')