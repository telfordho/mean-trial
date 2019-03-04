import mongoose from 'mongoose'
var User = mongoose.model('User');

export const register = (req, res) => {
    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
  
    user.save(() => {
      var token;
      token = user.generateJWT();
      res.status(200);
      res.json({ token });
    });
}

export const getProfile = (req, res) => {

  User
      .findById("5c7a5270df747a067214fee6")
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
        {_id:"5c7a5270df747a067214fee6"},
        {notes: [ { _id: '5c7a5270df747a067214fee8',
          title: '123',
          description: '123',
          status: 'completed' },
        { _id: '5c7a5270df747a067214fee7',
          title: '234',
          description: '234',
          status: 'completed' },
        { 
          title: '444',
          description: '555',
          status: 'completed' } ]}
        )
      .then(profile => {
          res.status(200).json(profile);
      })
      .catch(() => {
          res.status(401).json({
              "message" : "Unauthorized"
            })
      })
}
