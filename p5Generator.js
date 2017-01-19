var fs = require('fs'); // require filesystem
var readlineSync = require('readline-sync'); // require input from console.

console.log(__dirname);
var newProjectName = readlineSync.question("What would you like to name your project?"); // What do you want your p5 project to be called?

fs.mkdir(__dirname + "/projects/" + newProjectName, function(e) {
    if (!e || (e && e.code === 'EEXIST')) {
        var jsFileDir = __dirname + "/projects/" + newProjectName + "/" + newProjectName + ".js"; // create javascript file name
        fs.closeSync(fs.openSync(jsFileDir, 'w')); // close the link after you're done with it.

        var contents = // Set up the javascript file first
            `
var setup = function(){
    console.log("Hello World!");
};

var draw = function(){

};`;
        fs.writeFile(jsFileDir, contents, function(err) { // create the file with name: jsFileDir and fill it with: contents
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!"); // Success!
        });
        var htmlFileDir = __dirname + "/projects/" + newProjectName + "/" + newProjectName + ".html"; // Make html file name

        fs.closeSync(fs.openSync(htmlFileDir, 'w')); // Close the link after you're done with it

        var contents = // This is what you put inside of the 
            `<!DOCTYPE html>
<html>
<head>
<script src = "../p5.js"></script>
<script src = "` + newProjectName + ".js" + `"></script>
</head>
<body></body>
</html>`;
        fs.writeFile(htmlFileDir, contents, function(err) { // create the HTML file with name: htmlFileDir and fille it with: contents
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!"); // Success!
        });

    } else {
        //debug
        console.log(e);
    }
});