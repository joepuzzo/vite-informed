// copied from https://blog.heroku.com/best-practices-nodejs-errors
const terminate = (server, options = { coredump: false, timeout: 500 }) => {
  // Exit function
  const exit = (code) => {
    if (options.coredump) {
      process.abort();
    } else {
      process.exit(code);
    }
  };

  return (code, reason) => (err) => {
    console.log(`Barker Terminating due to ${reason}`);

    if (err && err instanceof Error) {
      console.error("Terminating due to error", err);
    }

    // Attempt a graceful shutdown
    server.close(() => {
      exit(code);
    });
    // If server hasn't finished in timeout, shut down process
    setTimeout(() => {
      process.exit(code);
    }, options.timeout).unref(); // Prevents the timeout from registering on event loop
  };
};

export default terminate;
