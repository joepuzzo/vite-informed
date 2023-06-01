const errorHandler = (err, req, res, next) => {
  console.error("Unexpected Error", err);
  // TODO evetually route the user to an error page
  res.sendStatus(500);
};

export default errorHandler;
