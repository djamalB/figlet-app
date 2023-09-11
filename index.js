var figlet = require("figlet");

figlet("intocode", function (err, данные) {
  if (err) {
    console.log("Что-то пошло не так...");
    console.dir(err);
    return;
  }
  console.log(данные);
});
