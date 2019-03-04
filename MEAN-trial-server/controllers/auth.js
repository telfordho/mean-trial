import passport from 'passport';

export function login (req, res) {
    passport.authenticate('local', (err, user, info) => {
        var token;
    
        if (err) {
          res.status(404).json(err);
          return;
        }

        if(user){
          token = user.generateJWT();
          res.status(200);
          res.json({ token });
        } else {
          res.status(401).json(info);
        }
      })(req, res)
}