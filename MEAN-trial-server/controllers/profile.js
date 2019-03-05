import mongoose from 'mongoose'
var User = mongoose.model('User');

export const register = (req, res) => {
    var user = new User();

    user.email = req.body.email;
    user.setPassword(req.body.password);
  
    user.save(() => {
      var token;
      token = user.generateJWT();
      res.status(200);
      res.json({ 
        token: token,
        id:  user._id });
    });
}

export const getProfile = (req, res) => {
  let id = req.query.searchId
  User
      .findById(id)
      .then(profile => {
          res.status(200).json(profile);
      })
      .catch(() => {
          res.status(401).json({
              "message" : "Unauthorized"
            })
      })
}

export const updateProfile = (req, res) => {
  User
      .findOneAndUpdate(
        {
          _id:req.body.id
        },{
          notes: req.body.notes
        })
      .then(profile => {
          res.status(200).json(profile);
      })
      .catch(() => {
          res.status(401).json({
              "message" : "Unauthorized"
            })
      })
}
