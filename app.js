document.addEventListener("DOMContentLoaded", () => {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operationSelect = document.getElementById("operation");
    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("error");

    document.getElementById("calculate-btn").addEventListener("click", () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;

        // Reset the result and error message
        resultElement.textContent = "";
        errorElement.textContent = "";

        // Check input validation
        if (isNaN(num1) || isNaN(num2)) {
            errorElement.textContent = "Please enter valid decimal numbers.";
            return;
        }
        if (!operation) {
            errorElement.textContent = "Please select an operation.";
            return;
        }

        // Calculation
        let result = 0;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    errorElement.textContent = "Cannot divide by zero!";
                    return;
                }
                result = num1 / num2;
                break;
        }

        // Show the result
        resultElement.textContent = `Result: ${result}`;
    });

    // Reset
    document.getElementById("reset-btn").addEventListener("click", () => {
        num1Input.value = "";
        num2Input.value = "";
        operationSelect.value = "";
        resultElement.textContent = "";
        errorElement.textContent = "";
    });
});
