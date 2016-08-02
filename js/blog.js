$(function() {
 
    Parse.$ = jQuery;
 
    Parse.initialize("Vqsv7cfmWca7IssHw8JnXtWhxoIadZUp6xM9KiAw" , "8UhN1Gbt9RBS5Rs77pJlyVqEvYBYNgG1m4zh2UKR");
   // Parse.serverURL = 'http://YOUR_PARSE_SERVER:1337/parse'
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});
