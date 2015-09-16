myApp.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: "views/home.html",
        controller: "homeController"
        
    })
    
    .when('/booksample', {
        templateUrl: "views/booksample.html",
        controller: "bookSampleController"
    })
    
  .when('/books', {
        templateUrl: "views/books.html",
        controller: "homeController"
    })
    
  .when('/allBooks', {
        templateUrl: "views/allBooks.html",
        controller: "homeController"
    })
    
  .when('/addBook', {
        templateUrl:"views/addBook.html",
        controller: "bookSampleController"
    })
    
    
})