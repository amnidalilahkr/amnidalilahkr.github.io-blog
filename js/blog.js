$(function() {
 
    Parse.$ = jQuery;
 
    Parse.initialize("Vqsv7cfmWca7IssHw8JnXtWhxoIadZUp6xM9KiAw" , "kMes5CqaDnmX0dqljRnmbykFh7knrakELq7EfpMB");
   // Parse.serverURL = 'http://YOUR_PARSE_SERVER:1337/parse'
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});
