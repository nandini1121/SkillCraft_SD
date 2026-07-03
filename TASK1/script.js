function convertTemperature() {

    let temp =
        parseFloat(
            document.getElementById("temperature").value
        );

    let from =
        document.getElementById("fromUnit").value;

    let to =
        document.getElementById("toUnit").value;

    if (isNaN(temp)) {
        document.getElementById("result").innerText =
            "Please enter a temperature";
        return;
    }

    let result;

    if (from === to) {
        result = temp;
    }

    else if (from === "celsius" && to === "fahrenheit") {
        result = (temp * 9/5) + 32;
    }

    else if (from === "celsius" && to === "kelvin") {
        result = temp + 273.15;
    }

    else if (from === "fahrenheit" && to === "celsius") {
        result = (temp - 32) * 5/9;
    }

    else if (from === "fahrenheit" && to === "kelvin") {
        result = ((temp - 32) * 5/9) + 273.15;
    }

    else if (from === "kelvin" && to === "celsius") {
        result = temp - 273.15;
    }

    else if (from === "kelvin" && to === "fahrenheit") {
        result = ((temp - 273.15) * 9/5) + 32;
    }

    document.getElementById("result").innerText =
        "Result: " + result.toFixed(2);
}