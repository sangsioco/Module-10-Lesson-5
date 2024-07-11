        // Task 2: Handle Form Submissions and Store User Input
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Clear previous error messages
            document.getElementById('name-error').textContent = '';
            document.getElementById('email-error').textContent = '';
            document.getElementById('message-error').textContent = '';

            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Task 3: Validate Form Fields
            let isValid = true;

            if (name === '') {
                document.getElementById('name-error').textContent = 'Name is required.';
                isValid = false;
            }
            if (email === '') {
                document.getElementById('email-error').textContent = 'Email is required.';
                isValid = false;
            } else if (!validateEmail(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address.';
                isValid = false;
            }
            if (message === '') {
                document.getElementById('message-error').textContent = 'Message is required.';
                isValid = false;
            }

            // If form is valid, store user input in an object and log it
            if (isValid) {
                const userInput = {
                    name: name,
                    email: email,
                    message: message
                };

                console.log('User Input:', userInput);

                // Here you could send the data to a server or further process it
                // For example, using fetch() or XMLHttpRequest

                // Clear form fields
                document.getElementById('contact-form').reset();
            }
        });

        // Function to validate email format
        function validateEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }