import express from 'express'
import { Login, Register ,Auth } from '../controller/userController.js'
import { body } from 'express-validator'
import { verifyUser } from '../middleware/VerifyUser.js'
import { createContact, getContacts ,getContact,updateContact,deleteContact,mergeContacts} from '../controller/contactController.js'

//user routes
const router =express.Router()


//used to validate the request (i.e.; name,email,address) for Register
router.post('/register',[
    body('name').trim().notEmpty().withMessage("Name should not be empty"),
    body('email').trim().notEmpty().withMessage("Email Should Not be Empty")
    .isEmail().withMessage("Invalid Email"),
    body('password').trim().notEmpty().withMessage("Password should not be Empty")
    .isLength({min:5,max:30}).withMessage("Password length must be in b/w 5-30")
     ], Register)

//used to validate the request for Login
router.post('/login',[
        body('email').trim().notEmpty().withMessage("Email Should Not be Empty")
        .isEmail().withMessage("Invalid Email"),
        body('password').trim().notEmpty().withMessage("Password should not be Empty")
        .isLength({min:5,max:30}).withMessage("Password length must be in b/w 5-30"),
         ], Login)


router.get('/verify', verifyUser,Auth)

    //contact routes
    router.post('/add-contact',verifyUser,createContact)
    router.get("/contacts",verifyUser,getContacts)
    router.get('/contact/:id',verifyUser,getContact)
    router.put('/update-contact/:id',verifyUser,updateContact)
    router.delete('/contact/:id',verifyUser,deleteContact)
    router.get('/merge-contacts',mergeContacts)
    
export {router as Router}