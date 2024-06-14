const preferencemodel = require("../model/preferencesmodele");
const Admin = require("../model/adminmodel");

// signup
async function UserSignup(req, res) {
  try {
    // Vérifier si l'email existe déjà dans la bd
    const existingUser = await Admin.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send({
        message:
          "Cette adresse e-mail est déjà utilisée. Veuillez en choisir une autre.",
      });
    }
    const admin = new Admin(req.body);
    // Vérifier si toutes les validations sont passées
    const errors = admin.validateSync();
    if (errors) {
      return res.status(400).send({ message: errors.message });
    }
    const authToken = admin.generateAuthToken();
    res.status(201).send({ admin, authToken });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

async function UserLogin(req, res) {
    try {
      const user = await Admin.findUser(req.body.email, req.body.password);
      const authToken = Admin.generateAuthToken;
      res.send({ user, authToken });
    } catch (error) {
      if (
        error.message === "ce compte n'existe pas, veuillez créer un compte svp"
      )
        return res.status(401).send({ message: error.message });
      if (error.message === "mot de passe incorrect!")
        return res.status(401).send({ message: error.message });
      res.status(400).send({ message: error.message });
    }
  }
  
  module.exports={UserSignup,UserLogin}