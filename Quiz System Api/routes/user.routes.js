const router = require("express").Router()
const userController = require("../app/controller/user.controller")
const auth = require("../app/middleware/auth.middleware");
const sharedController = require("../app/controller/shared.controller");

router.get("/viewUsers",sharedController.showAllUsers);
router.get("/viewQuiz/:id",auth.userAuth,userController.generateQuiz);
router.post("/submitandGenerateResult/:userId&:resId",auth.userAuth,userController.generateResult);
router.get("/subjects",auth.userAuth,sharedController.showSubjects);
router.post("/register",userController.register);
router.post("/login",sharedController.login);
router.post("/logout",auth.userAuth,sharedController.logout);
router.post("/logoutAll",auth.userAuth,sharedController.logoutAll);
router.get("/viewProfile/:id",auth.userAuth,sharedController.viewProfile);
router.post("/userTokenId",sharedController.getTokenId);
router.put("/activation/:id",auth.userAuth,sharedController.activation)
module.exports = router;