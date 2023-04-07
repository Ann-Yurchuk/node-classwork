const notFound = (req, res, next) => {
  res.status(404).json({ message: "This route does not exist" });
};

module.exports = {notFound}