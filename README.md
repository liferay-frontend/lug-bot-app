# Lugbot App

This is the Web App for the Liferay Upgrade Tool. This project is built with [Next.js](https://nextjs.org/) and was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The API is provided by Docker on the backend side at port `9000`.

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

Lint your code:

```bash
yarn lint
```

Format your code:

```bash
yarn format
```

## Project structure

-   `components/`: Contains React components that are re-usable across pages.
-   `pages/`: Next.js has a file-system based router and each page is generated from this directory. For example:
    -   `pages/index.tsx` -> Redirects to `localhost:3000/tasks`, rendering pages/tasks/index.tsx`
    -   `pages/tasks/index.tsx` -> `localhost:3000/tasks/`
    -   `pages/tasks/[taskId].tsx` -> `localhost:3000/tasks/{dynamic_task_id}`
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

## Getting the API

In order to get the data this app requires to function from `http://localhost:9000`. To get access to that, you will need to have a Docker image provided by the backend.

Here are the steps to get that image working:

1. Clone https://github.com/LiferayCloud/service-upgrade-bot
2. Go to the new `service-upgrade-bot` folder and run `./buildLugbot.sh`
3. This will give you access to the `lugbot/lugbot:latest` image

To see the representation of the API you should go [to this Confluence document](https://liferay.atlassian.net/wiki/spaces/LUGBOT/pages/1751974001/Lugbot+Backend+API).

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
