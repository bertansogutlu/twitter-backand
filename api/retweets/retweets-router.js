const router = require("express").Router();
const retweetsModel = require("./retweets-model");


router.get("/", async (req, res, next) => {
  try {
    const retweets = await retweetsModel.getAll();
    res.status(200).json(retweets);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const retweet = await retweetsModel.getById(req.params.id);
    res.status(200).json(retweet);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const retweet = await retweetsModel.create(req.body);
    res.status(201).json(retweet);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const retweet = await retweetsModel.updateById(req.params.id, req.body);
    res.status(200).json(retweet);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const retweet = await retweetsModel.deleteById(req.params.id);
    res.status(200).json(retweet);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
