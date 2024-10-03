document.getElementById('convert-btn').addEventListener('click', function () {
    const text = document.getElementById('text-input').value;
    const lines = text.split('\n');

    lines.forEach((line, index) => {
        // Trim spaces and convert to lowercase
        const trimmedLine = line.trim().toLowerCase();
        // Convert underscore_case to camelCase
        const camelCase = trimmedLine.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

        // Generate check marks based on line number
        const checkmarks = '✅'.repeat(index + 1);

        // Log the result to console
        console.log(`${camelCase} ${checkmarks}`);
    });
});
