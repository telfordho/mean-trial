import mongoose from 'mongoose'
var User = mongoose.model('User');

export const updateNotes = (req, res) => {
    console.log(req);
    User
        .findByIdAndUpdate("5c7a5270df747a067214fee6")
        .exec()
        .then(profile => {
            console.log(profile)
            res.status(200).json(profile);
        })
        .catch(err => {
            console.log(err)
            res.status(401).json({
                "message" : "Unauthorized"
              })
        })
}
