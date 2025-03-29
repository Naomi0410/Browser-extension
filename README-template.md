# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  -[Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

#### Dark Mode

This is the dark mode view of the browser extensions manager UI.
![Dark Mode Screenshot](../public/screenshot-dark-web.png)

#### Light Mode

This is the light mode view of the browser extensions manager UI.
![Light Mode Screenshot](../public/screenshot-light-web.png)

### Links

- Live Demo: [https://browser-extension-one.vercel.app/](https://browser-extension-one.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind css
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

1. **Dynamic State Management in React:** - Managing the state of extensions (active/inactive) and filtering them dynamically.

   ```jsx
   const filteredExtensions = extensions.filter((extension) => {
     if (filter === "active") return extension.isActive;
     if (filter === "inactive") return !extension.isActive;
     return true; // Show all extensions
   });
   ```

2. **Theme Switching:** Implementing light/dark mode using CSS variables and React state.

### Continued development

-Improving accessibility by ensuring all interactive elements are keyboard-navigable and screen-reader friendly.
-Exploring advanced state management tools like Redux or Zustand for larger projects.
-Enhancing performance by optimizing component rendering and reducing unnecessary re-renders.

### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Helped me understand how to use utility classes effectively.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - A great resource for understanding React fundamentals.
- [Next.js Documentation](https://nextjs.org/docs) - A great resource for understanding Next.js fundamentals.
- [Frontend Mentor](https://www.frontendmentor.io/) - Provided the challenge and design inspiration.

## Author

- Website - [Abiola Alice Temitope](https://github.com/Naomi0410)
- Frontend Mentor - [@Naomi0410](https://www.frontendmentor.io/profile/Naomi0410)

## Acknowledgments

Special thanks to Frontend Mentor for providing this challenge. It was a great opportunity to practice and improve my skills.
