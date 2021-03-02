const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../../config/database");
const { User, Profile } = require("../../app/models");

genToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    config.jwt_secret
  );
};

router.post("/signup", async function (req, res, next) {
  try {
    if (!req.body.email || !req.body.password) {
      res.json({ success: false, msg: "Please pass email and password." });
    } else {
      var newUser = new User({
        email: req.body.email,
        password: req.body.password,
      });

      newUser.save(function (err) {
        if (err) {
          return res.json({ success: false, msg: "email already exists." });
        }
        var token = genToken(newUser.toJSON());

        res.json({ success: true, token: token });
      });

      var newProfile = new Profile({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        estado: req.body.estado,
        zip: req.body.zip,
      });

      newProfile.save(function (err) {
        if (err) {
          return res.json({ success: false, msg: "profile not created" });
        }
      

        res.json({ success: true, msg: "great success!" });
      });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/login", async function (req, res, next) {
  try {
    User.findOne(
      {
        email: req.body.email,
      },
      function (err, user) {
        if (err) throw err;

        if (!user) {
          res.status(401).send({
            success: false,
            msg: "Unable to authenticate.",
          });
        } else {
          user.comparePassword(req.body.password, function (err, isMatch) {
            if (isMatch && !err) {
              var token = genToken(user.toJSON());

              res.json({ success: true, token: token });
            } else {
              res.status(401).send({
                success: false,
                msg: "Unable to authenticate.",
              });
            }
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get(
  "/secret",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json("Secret Data");
  }
);

module.exports = router;
