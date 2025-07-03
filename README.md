# SBA-Recipe Discovery App

A modern React single-page application to browse and search recipes using [TheMealDB API](https://www.themealdb.com/).

## Features
- Browse recipe categories  
- View meals by category  
- Search recipes by name  
- View full recipe details  
- Add/remove favorites using Context API  
- Favorites persist with `localStorage`  
- Mobile-first responsive UI  
- Modern design with Tailwind CSS  
- Animated page transitions via Framer Motion  
- Dark/Light mode toggle  
- Error and loading states with spinners  
- Scroll to top button

## Tech Stack
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [TheMealDB API](https://www.themealdb.com/)
- Context API
- Vite
- Framer Motion

##  Live Demo

 [https://haida-recipe-app.netlify.app](https://haida-recipe-app.netlify.app)

 ##  Reflection

The most challenging part was getting the favorites to persist using Context and localStorage together. It took some trial and error to keep everything in sync. I also spent time figuring out how to make dark mode work smoothly with Tailwind v4.

One design choice I made was using a custom `useFetch` hook so I wouldn’t repeat fetch logic everywhere. It made the code easier to manage. I also chose to store recipe IDs (not names) for favorites because that’s how TheMealDB API returns full details.


## Getting Started

```bash
git clone https://github.com/HaidaMarese/recipe-discovery-app.git
cd recipe-discovery-app
npm install
npm run dev
