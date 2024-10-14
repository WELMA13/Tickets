// Scroll to a section on the page
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Pre-select city from the tour dates section
function selectCity(city) {
    document.getElementById('city').value = city;
    scrollToSection('tickets');
}

// // Handle ticket form submission
// document.getElementById('ticketForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission from refreshing the page

//     const city = document.getElementById('city').value;
//     const quantity = document.getElementById('quantity').value;
//     const email = document.getElementById('email').value;

//     if (city && quantity && email) {
//         alert(`Thank you for purchasing ${quantity} tickets for James' show in ${city}. An email will be sent to ${email} with more details.`);
//         document.getElementById('ticketForm').reset(); // Reset form fields
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

// // Handle contact form submission
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission from refreshing the page

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('contactEmail').value;
//     const message = document.getElementById('message').value;

//     if (name && email && message) {
//         alert(`Thank you for reaching out, ${name}. We will respond to you at ${email} shortly.`);
//         document.getElementById('contactForm').reset(); // Reset form fields
//     } else {
//         alert('Please fill in all fields.');
//     }
// });


// Handle ticket button click
document.getElementById('purchaseButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const quantity = document.getElementById('quantity').value;
    const email = document.getElementById('email').value;

    if (city && quantity && email) {
        const message = `I would like to purchase ${quantity} tickets for the show in ${city}. Please send details to ${email}.`;
        const whatsappLink = `https://wa.me/12103294421?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle contact button click
document.getElementById('contactButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const contactMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const whatsappLink = `https://wa.me/12103294421?text=${encodeURIComponent(contactMessage)}`;
        window.open(whatsappLink, '_blank');
    } else {
        alert('Please fill in all fields.');
    }
});
