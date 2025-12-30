## 🛍️ Pedro’s Fictitious Shop

A fictitious e-commerce website inspired by the Nike website, created exclusively for practice and learning purposes.

This project focuses on improving HTML, CSS, and JavaScript skills, especially in layout, styling, modular JavaScript, and SPA-like routing without frameworks.


# 🎯 Purpose

The main goals of this project are:

Practice modern HTML semantic structure

Improve CSS organization and styling

Learn JavaScript modularization (ES Modules)

Understand client-side routing using the History API

Simulate a Single Page Application (SPA) using only vanilla JavaScript

Apply real-world folder and file organization used in front-end projects


# ⚠️ This is not a real store. No purchases, payments, or real data are involved.


# 🧱 Technologies Used

- HTML5

- CSS3

- JavaScript (ES6+)

- Vanilla JS Routing (History API)

- Live Server (for local development)

- No frameworks or libraries were used.


# 📂 Project Structure
.
├── index.html
└── assets
    ├── css
    │   ├── base.css
    │   ├── layout.css
    │   ├── components.css
    │   └── pages
    │       ├── home.css
    │       ├── products.css
    │       └── product.css
    └── js
        ├── main.js
        ├── router.js
        ├── components
        │   ├── header.js
        │   └── footer.js
        ├── pages
        │   ├── home.js
        │   ├── products.js
        │   ├── product.js
        │   └── cart.js
        └── data
            └── products.js


# 🧭 How Navigation Works

This project uses a single HTML file (index.html) and simulates multiple pages using:

history.pushState()

popstate event

A custom router that maps URLs to JavaScript functions

Each “page” is rendered dynamically inside the <main id="app"></main> element.


# 📚 What I’m Practicing With This Project

SPA concepts without frameworks

Clean separation of concerns

Realistic front-end project structure

Debugging common front-end issues (routing, imports, paths)

DOM manipulation and event handling

Scalable CSS organization


# 🧠 Inspiration

This project is visually and conceptually inspired by Nike’s website, but no assets, branding, or content are copied.

All content is fictional and created solely for educational purposes.


# 📌 Disclaimer

This project is for learning only.
It is not affiliated with Nike or any other brand.
