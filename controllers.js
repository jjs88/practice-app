myApp.controller('homeController',['$scope','$location', 'searchAuthorService', function($scope, $location, searchAuthorService){
    
    
    //$scope.test = "test me out"
    //$scope.path = $location.path();
    $scope.search = searchAuthorService.author
    $scope.bookTitle = searchAuthorService.bookTitle;
    $scope.bookAuthor = searchAuthorService.bookAuthor;
    
    $scope.books = [
         {title: "the Brief Wondrous Life of Oscar Wao", author: "junot diaz"},
        {title: "This Is How You Lose Her", author: "junot diaz"}
        
    ]
    

    $scope.$watch('search', function() {
        searchAuthorService.author = $scope.search;
       // console.log(searchAuthorService.author)
    });
    
     $scope.$watch('bookTitle', function() {
        searchAuthorService.bookTitle = $scope.bookTitle;
       // console.log(searchAuthorService.author)
    });
    
     $scope.$watch('bookAuthor', function() {
        searchAuthorService.bookAuthor = $scope.bookAuthor;
       // console.log(searchAuthorService.author)
    });
    
    
      $scope.returnBooks = function(author) {
    
        var result = $.grep($scope.books, function(e){ 
            return e.author === author.toLowerCase();
        })
         if(result) {
             return result;
         } else {
             return "nothing";
         }
//          return "Hi";
//        if(Object.getOwnPropertyNames(result).length === 0){
//            return {author: "Nothing available"};
//
//        }  else {
//            return result;
//        } 
          //console.log(Object.getOwnPropertyNames.length);
        }
      
//      var a = [{"title":"Models","author":"mark manson"}];
//       console.log(a[0].author);
      
      $scope.viewAllBooks = function() {
          
          //return $scope.books;
         return searchAuthorService.bookCollection;
      };
    
    
//    $scope.addBook = function(bookTitle, auth) {
//        
//        var books = {title: bookTitle, author: auth};
//        //$scope.books.push(books);
//        //return $scope.books;
//        //return books;
//        
//        //searchAuthorService.bookAuthor = auth;
//        //searchAuthorService.bookTitle = bookTitle;
//        searchAuthorService.bookCollection.push(books);
//        console.log("book added");
//        //return searchAuthorService.bookCollection;
//        //return searchAuthorService.bookTitle;
//        
//        //$scope.books.push({title: bookTitle, author: auth});
//        //return $scope.books;
//        
//       // return auth + ":" + bookTitle;
//        
//
//       
//
//    }
      
//CAN YOU POST DATA USING ANGULAR? KEEP RUNNING INTO PROBLEM
      
      

    
    
    
    
                                   
   
}]);

myApp.controller('bookSampleController',['$scope','$location','searchAuthorService', function($scope, $location, searchAuthorService){
    
      $scope.books = [
        {title: "Models", author: "mark manson"}
        
    ]
      
    $scope.formatBook = function(title, author) {
        return title + " : " + author;
    }
    
    $scope.author = searchAuthorService.author;
    $scope.bookTitle = searchAuthorService.bookTitle;
    $scope.bookAuthor = searchAuthorService.bookAuthor;
    //console.log($scope.author);
    
    $scope.returnBooks = function(author) {
        
       var result = $.grep($scope.books, function(e){ 
            return e.author === author.toLowerCase();
        })
         if(result) {
             return result;
         } else {
             return "nothing";
         }
    }
    
    $scope.addBook = function(bookTitle, auth) {
        
        var books = {title: bookTitle, author: auth};
        //$scope.books.push(books);
        //return $scope.books;
        //return books;
        
        //searchAuthorService.bookAuthor = auth;
        //searchAuthorService.bookTitle = bookTitle;
        searchAuthorService.bookCollection.push(books);
        //$scope.bookTitle = searchAuthorService.bookTitle = "";
        //$scope.bookAuthor = searchAuthorService.bookAuthor = "";
        console.log("book added");
        //return searchAuthorService.bookCollection;
        //return searchAuthorService.bookTitle;
        
        //$scope.books.push({title: bookTitle, author: auth});
        //return $scope.books;
        
       // return auth + ":" + bookTitle;
        

       

    }
    
   
    

    
    

        
    
    
                                   
   
}]);