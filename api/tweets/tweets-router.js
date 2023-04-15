const router = require("express").Router();
const tweetsModel = require("./tweets-model");


router.get("/", async (req, res, next) => {
  try {
    const tweets = await tweetsModel.getAll();
    res.status(200).json(tweets);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const tweet = await tweetsModel.getById(req.params.id);
    res.status(200).json(tweet);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const tweet = await tweetsModel.create(req.body);
    res.status(201).json(tweet);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const tweet = await tweetsModel.updateById(req.params.id, req.body);
    res.status(200).json(tweet);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const tweet = await tweetsModel.deleteById(req.params.id);
    res.status(200).json(tweet);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
