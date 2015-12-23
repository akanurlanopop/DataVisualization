load("../../../../../lib/env-js/env-js-master/src/env.js");

window.location = "../../../../../build/js/index.html";

window.onload = function() {
    load("../../../../../build/js/processing.js");

    var headerCode = readFile("../../../../../build/js/header.js");

    var pde = readFile("../../../../../build/js/Processingjs.pde");
    var compiledCode = "var dv = " + Processing.compile(pde).sourceCode;

    // Create the file for the code
    out = new java.io.FileWriter("../../../../../build/js/datavisualization.js");

    // Write the code to the file
    out.write( headerCode, 0, headerCode.length);
    out.write( compiledCode, 0, compiledCode.length );
    out.flush();
    out.close();

    //$.get('Processingjs.pde', function(data) {
    //    //console.log(data);
    //    // http://processingjs.org/articles/jsQuickStart.html
    //    var jsCode = Processing.compile(data).sourceCode;
    //    //console.log(jsCode);
    //    //$("#jsCode").html(jsCode);
    //
    //});
};
