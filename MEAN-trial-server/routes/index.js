import express from 'express'
var router = express.Router();
import { login } from '../controllers/auth'
import { 
    register, 
    getProfile, 
    updateProfile 
} from '../controllers/profile';

router.get('/profile', getProfile)
router.put('/update', updateProfile)
router.post('/login', login);
router.post('/register', register);

export default router;
