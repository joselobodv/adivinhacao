let Hobbie = [];

process.stdout.write("Digite seus Hobbies: ");

process.stdin.on("data", function (data) {
  Hobbie.push(data.toString().trim());
  console.log(Hobbie);
});
