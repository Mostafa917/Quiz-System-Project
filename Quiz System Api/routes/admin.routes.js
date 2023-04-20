const adminController = require("../app/controller/admin.controller");
const sharedController = require("../app/controller/shared.controller");
const auth = require("../app/middleware/auth.middleware")
const router = require("express").Router()


//Admin=>Users Routes//
router.get("/viewUsers",auth.adminAuth,sharedController.showAllUsers);
router.get("/viewUsers/:id",auth.adminAuth,adminController.showSingleUser);
router.put("/viewUsers/editUser/:id",auth.adminAuth,adminController.editUser);
router.post("/viewUsers/delAllUsers",auth.adminAuth,adminController.delAllUsers);
router.post("/viewUsers/delUser/:id",auth.adminAuth,adminController.delUser);
//Admin=>Users Routes//

//Admin=>Quiz Routes//
router.get("/subjects",auth.adminAuth,sharedController.showSubjects);
router.get("/subjects/showAllSubjectQuestions",auth.adminAuth,adminController.showAllQuestions);
router.get("/subjects/:id",auth.adminAuth,adminController.showSubjectQuestions);
router.get("/subjects/showQuestion/:id&:questId",auth.adminAuth,adminController.showSingleQuestion);
router.post("/subjects/addQuestions",auth.adminAuth,adminController.addQuestions);
router.put("/subjects/editQuestion/:id&:questId",auth.adminAuth, adminController.editQuestion);
router.post("/subjects/delAllSubjects",auth.adminAuth,adminController.delAllSubjects);
router.post("/subjects/delSubject/:id",auth.adminAuth,adminController.delSubject);
router.post("/subjects/delQuestion/:id&:questId",auth.adminAuth,adminController.delQuestion);
//Admin=>Quiz Routes//

router.get("/viewRequests",auth.adminAuth,adminController.viewRequests);
router.put("/viewRequests/:id&:accept",auth.adminAuth,adminController.manageRequest);
//Admin Logouts//
router.post("/logout",auth.adminAuth,sharedController.logout);
router.post("/logoutAll",auth.adminAuth,sharedController.logoutAll);
//Admin Logouts//

module.exports = router;