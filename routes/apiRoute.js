const express = require('express');
const router = express.Router();
const { authJwt, verifyRegister } = require("../middleware");
const {
  allUserAccess,
  userAccess,
  adminAccess,
} = require("../controllers/users");
const { register, login, viewUser, updateUser, deleteUser } = require("../controllers/auths");

router.post(
  "/register",
  [verifyRegister.checkUserNameOrEmail, verifyRegister.checkRole],
  register
);

router.post("/login", login);
router.get("/data/user", [authJwt.checkToken, authJwt.checkAdmin], viewUser);
router.get("/all", allUserAccess);
router.get("/user", [authJwt.checkToken], userAccess);
router.get("/admin", [authJwt.checkToken, authJwt.checkAdmin], adminAccess);

router.put("/user/:id", [authJwt.checkToken, authJwt.checkAdmin], updateUser)
router.delete("/user/:id", [authJwt.checkToken, authJwt.checkAdmin], deleteUser);
module.exports = router;