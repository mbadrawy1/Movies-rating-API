/**
 * Module dependencies.
 */
const express = require("express");

/**
 * Express router.
 */
const router = express.Router();

/**
 * Auth controller.
 */
const controller = require("../controllers/authController");

/**
 * Auth middleware.
 */
const auth = require("../middlewares/auth");

/**
 * Routes.
 */
router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/me", auth.check, controller.me);

module.exports = router;
