# Apartments Listing Project

![Apartments Demo](https://apartments-check.netlify.app/)

A modern apartments listing web application with advanced search filters and sorting options.

## 🔗 Live Demo

[https://apartments-check.netlify.app/](https://apartments-check.netlify.app/)

## 🛠 Tech Stack

* **Vue 3** - Frontend framework
* **Nuxt 3** - Server-side rendering and routing
* **Pinia** - State management
* **Vuetify** - UI components and styling
* **Vite** - Fast build and development

## 🚀 Features

* Browse a list of apartments
* Search and filter by:

  * Price range
  * Square meters range
  * Number of rooms
* Sort apartments by:

  * Price
  * Floor
  * Square meters
* Infinite scroll / pagination
* Responsive design(900px+)

## 💻 Local Setup

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone git@github.com:algoritmi4/apartments-check.git
cd apartments-check
```

### 2. Install dependencies(Node must be installed - https://nodejs.org/en)

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

* The app will be available at `http://localhost:3000`

### 4. Build for production

```bash
npm run build
```

## 📌 Notes

* The project uses a mocked database (`db.json`) to simulate apartment listings.
* Filters and sorting are applied on the server-side API emulation for SSR compatibility.

## 📝 License
MIT License
