// Navigation
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show the corresponding page
            const targetPage = this.getAttribute('href').substring(1);
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetPage) {
                    page.classList.add('active');
                }
            });
            
            // Close mobile menu if open
            document.querySelector('nav ul').classList.remove('show');
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });

    // Calculator functionality
    let display = document.getElementById('display');
    
    window.appendToDisplay = function(value) {
        if (display.innerText === '0' && value !== '.') {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }
    
    window.clearDisplay = function() {
        display.innerText = '0';
    }
    
    window.calculate = function() {
        try {
            display.innerText = eval(display.innerText);
        } catch (error) {
            display.innerText = 'Error';
            setTimeout(() => {
                window.clearDisplay();
            }, 1000);
        }
    }

    // Form validation
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (name && email && subject && message) {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });