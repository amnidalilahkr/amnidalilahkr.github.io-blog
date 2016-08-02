$(function() {
 
    Parse.$ = jQuery;
 
    Parse.initialize("Vqsv7cfmWca7IssHw8JnXtWhxoIadZUp6xM9KiAw" , "mX4CSDl4MHmymyR12hXCTbsG3mdPRE7a35AK5DGJ");
    Parse.serverURL = 'http://YOUR_PARSE_SERVER:1337/parse'
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});
