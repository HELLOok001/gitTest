require.config({
    path:{
        "jquery":"./jquery.js",
        // "scaleGlass":"./scaleGlass.js",
        // "otherMethod":"./otherMethod.js",
        "scaleGlass":"./scaleGlass.js"
    },
    shim:{
        "otherMethod":{
            deps:["jquery"],
            exports:"fn1",
        }
    }
});

require(["jquery","otherMethod","scaleGlass"],function ($,otherMethod,scaleGlass) {
    scaleGlass();
    $("body").css("background-color","skyblue");
    fn1();
});