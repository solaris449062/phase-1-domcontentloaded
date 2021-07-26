document.addEventListener("DOMContentLoaded", function() {
    // console.log("The DOM has loaded");
    document.getElementById("text").textContent = "This is really cool!";
    // console.log(targetText);
});

// console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");

// if you want to use 'load' instead of 'DOMContentLoaded', you would need to change
// from document.addEventListener() to window.addEventListener()