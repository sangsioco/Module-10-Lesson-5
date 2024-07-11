        // Task 2: JavaScript to dynamically change the color of the box element when clicked
        function changeColor() {
            const box = document.getElementById('box');
            const currentColor = box.style.backgroundColor;
            box.style.backgroundColor = (currentColor === 'rgb(255, 0, 0)' || currentColor === '') ? 'blue' : 'red';
        }

        // Task 3: Additional Styling Changes Based on User Interaction
        
        // Change the text of the box element when the button is clicked
        function changeBoxText() {
            const box = document.getElementById('box');
            box.textContent = 'Color Changed!';
        }

        // Show a message when the button is clicked
        function showMessage() {
            const message = document.getElementById('message');
            message.style.display = message.style.display === 'none' ? 'block' : 'none';
        }