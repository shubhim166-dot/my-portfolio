// Monitor portfolio contact form submissions
document.getElementById('portfolio-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop standard automated page refreshes
    
    const clientName = document.getElementById('name').value;
    alert(`Thank you, ${clientName}! Your message has been sent successfully.`);
    
    this.reset(); // Safely wipe inputs for the next input entry
});