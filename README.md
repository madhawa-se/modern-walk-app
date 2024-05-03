# Modern Walk React App

![Modern Walk Logo](/src/assets/logo-mini.png)

This is a React based fashion retail web app.

## Demo

You can access the [live demo of the app](https://modern-walk-app-git-master-madhawa-ses-projects.vercel.app/). The app is hosted on Vercel.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- SCSS
- Vite

## How to Run

To run the app locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` for development mode or `npm run build` for production build.

## Assumptions

- The home page can contain different categories.
- Prices returned from the API are in USD


## Guide

To change the number of cards displayed per row, you can pass a custom count to the GridView. However, on smaller screens, this custom count won't be used; instead, the configured count specific to that screen size will be applied 

```js
<GridView products={products} elementsPerRow={4}></GridView>
```

## Note

Sample logo created using an AI generator.

## License

[MIT](https://choosealicense.com/licenses/mit/)

