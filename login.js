const User = require(path.resolve(__dirname, "/Schemas/userSchema"));
const path = require("path");
const config = require(path.resolve(__dirname, "../config.json"));


exports.login = (req, res) => {
  User.findOne({
  "$or": [{username: req.body.username}, {email:req.body.username}]
  })
    .exec((err, user) => {
      if (err) {
        return res.status(500).send({ err: err, message: "Database failure." });
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: expireSeconds // 24 hours
      });

      res.status(200).send({
        id: user._id,
        username: user.username,
        accessToken: token,
        expiresIn: expireSeconds
      });
    });

};



function show() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function saveLogin() {
    let username = document.getElementById("username").value;
    if (!username) {
      alert("no username input")
      return false
    }
    let password = document.getElementById("password").value;
    alert(username + password)
  }