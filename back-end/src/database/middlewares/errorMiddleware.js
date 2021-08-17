const errorMiddleware = (err, _req, res, _next) => {
  if (err.status) {
    res.status(err.status).send(err.message);
  }

  res.status(500).send(err.message);
};

module.exports = errorMiddleware;
