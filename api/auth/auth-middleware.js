const usersModel = require("../users/users-model");
const { ADMIN_PASSWORD } = require("../../config");

const validateRegisterPayload = async (req, res, next) => {
  try {
    if (!req.body.username) {
      res.status(400).json({ message: "username is required" });
    } else if (!req.body.email) {
      res.status(400).json({ message: "email is required" });
    } else if (!req.body.password) {
      res.status(400).json({ message: "password is required" });
    } else {
        const emailIsExist = await usersModel.getByEmail(req.body.email);
        if (emailIsExist) {
            res
            .status(400)
            .json({ emessage: `${req.body.email} has been already taken` });
        } else if (req.body.role) {
            if (req.body.admin_password === ADMIN_PASSWORD) {
            delete req.body.admin_password;
            next();
            console.log(ADMIN_PASSWORD)
            } else {
            res.status(403).json({ emessage: "admin_password is required" });
            }
      } else next();
    }
  } catch (error) {
    next(error);
  }
};

const validateLoginPayload = async (req, res, next) => {
  try {
    if (!req.body.email) {
      res.status(400).json({ message: "email is required" });
    } else if (!req.body.password) {
      res.status(400).json({ message: "password is required" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateRegisterPayload,
  validateLoginPayload,
};
