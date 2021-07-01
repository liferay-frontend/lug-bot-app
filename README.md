# Lugbot App

This is the Web App for the Liferay Upgrade Tool. This project is built with [Next.js](https://nextjs.org/) and was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install Dependencies

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

-   `components/`: Contains React components that are re-usable across pages.
-   `pages/`: Next.js has a file-system based router and each page is generated from this directory. For example:
    -   `pages/index.tsx` -> `localhost:3000`
    -   `pages/projects/index.tsx` -> `localhost:3000/projects`
    -   `pages/projects/[projectId]/index.tsx` -> `localhost:3000/projects/{dynamic_project_id}`
    -   `pages/projects/[projectId]/tasks/index.tsx` -> `localhost:3000/projects/{dynamic_project_id}/tasks`
    -   `pages/projects/[projectId]/tasks/[taskId].tsx` -> `localhost:3000/projects/{dynamic_project_id}/tasks/{dynamic_task_id}`
-   `pages/api`: Next.js has an api route that allows us to quickly create simple REST apis. Read more [here](https://nextjs.org/docs/api-routes/introduction).
-   `public/`: Static file serving. Any file in this directory will be made available on the `localhost:3000/public/*` route.
-   `styles/`: Location of scss files. `main.scss` is the entry point to our scss.
-   `utils/`: Re-usable functions
-   `constants/`: Place to put any constants used in the App.

## Using Docker

Building the docker image

```bash
docker build . -t lugbot-app
```

Running the docker image

```bash
docker run -p 3000:3000 lugbot-app
```

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
