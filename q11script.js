// Function to calculate Simple Interest
function calculateSimpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

// Function called from HTML
function calculateSI() {

    // Taking input values
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    // Call external calculation function
    var result = calculateSimpleInterest(principal, rate, time);

    // Display result
    document.getElementById("output").innerHTML = "Simple Interest: " + result;
}