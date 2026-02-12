const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  if (err instanceof multer.MulterError) {
    if (err.code === "FILE_TOO_LARGE") {
      return res.status(400).json({ error: "File too large (max 5MB)" });
    }
  }

  if (err.message === "Only image files are allowed") {
    return res.status(400).json({ error: err.message });
  }

  res.status(500).json({ error: "Internal server error" });
};

module.exports = errorHandler;
