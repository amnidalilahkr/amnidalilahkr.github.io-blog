$(function() {
 
    Parse.$ = jQuery;
 
    Parse.initialize("Vqsv7cfmWca7IssHw8JnXtWhxoIadZUp6xM9KiAw" , "8UhN1Gbt9RBS5Rs77pJlyVqEvYBYNgG1m4zh2UKR");
   // Parse.serverURL = 'http://YOUR_PARSE_SERVER:1337/parse'
 
   var Blog = Parse.Object.extend("Blog");
   
   var Blogs = Parse.collection.extend({ model: Blog});
   
   var blogs =new Blogs();
   
   blogs.fetch({
    success: function(blogs){
     console.log(blogs);
    },
    error: function(blogs, error){
     console.log(error);
    }
   });
 
});
