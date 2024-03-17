const globalErrorHandler = (err, req, res, next) => {
  return res.status(400).json({ err });
};

const invalidRoute = (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} is invalid`);
  next(err);
  // res.send("Oops! looks like we're on the wrong route!");
};

module.exports = { invalidRoute, globalErrorHandler };
