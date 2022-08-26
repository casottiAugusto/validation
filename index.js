const bodyParser = require("body-parser");
const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const cookeiParsser = require("cookie-parser");

const app = express();



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookeiParsser("jamesBrow"));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(flash());





app.get('/', (req, res) => {
  let emailErro = req.flash("emailErro");
  let nomeErro=req.flash("nomeErro");
  let pontosErro=req.flash("pontosErro");
  emailErro = (emailErro == undefined || emailErro.length == 0) ? undefined : emailErro;
  email=req.flash("email");
  nome=req.flash("nome");
  pontos=req.flash("pontos")

  res.render("index", { emailErro,pontosErro,nomeErro,email,nome,pontos })

});
app.post("/form", (req, res) => {
  let { email, nome, pontos } = req.body;
  let emailErro;
  let nomeErro;
  let pontosErro;
  if (email == undefined || email == "") {
    emailErro = "o email esta vasio ou invalido";
  }
  if (nome == undefined || nome == "") {
    nomeErro = "O nome esta fazio ou invalido";
  }
  if (pontos == undefined || pontos >= 20) {
    pontosErro = "Os pontos não atende a regras estabelicidas"

  }
  if (emailErro != undefined || pontosErro != undefined || nomeErro != undefined) {
    req.flash("emailErro", emailErro);
    req.flash("nomeErro",nomeErro);
    req.flash("pontosErro",pontosErro);
    req.flash("nome",nome);
    req.flash("email",email);
    req.flash("pontos",pontos);

    res.redirect('/');
    res.send("O formúlario esta muito feio");

  } else {
    res.send("Muito bonito!!");
  }

});


app.listen(8080, (res, req) => {
  console.log("To vivo!!!!!!!!!!!!")
})