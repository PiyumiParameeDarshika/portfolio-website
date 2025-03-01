// Toggle navigation menu visibility
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('visible');
}

const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);

// Smooth scrolling
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterProjects(category);
    });
});

// Lightbox effect for project images
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const img = document.createElement('img');
    img.src = imageSrc;
    lightbox.appendChild(img);

    lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}

const projectImages = document.querySelectorAll('#projects img');
projectImages.forEach(image => {
    image.addEventListener('click', () => {
        openLightbox(image.src);
    });
});

// Form validation
const form = document.querySelector('#contact form');
form.addEventListener('submit', event => {
    event.preventDefault();

    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    if (name && email && message) {
        // Perform form submission (e.g., send data to the server)
        alert('Form submitted successfully!');
        form.reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
