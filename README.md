# VITE + INFORMED

## Info

This is an example repo that shows how to set up a vite project with informed

The point is to highlight and test how components are loaded into the app.

## How to use

There are two ways to render the app

### 1: Run vite directly

```bash
npm run dev
```

This will run only the vite server and you can access the app at http://localhost:9002/

### 2: Run vite and express server ( server will proxy all requests to the "hot reloaded" vite server )

```bash
npm run start:dev
```

## Notes:

In production the express app is configured to proxy to a directory with a pre built SPA ( does not proxy to vite server )
