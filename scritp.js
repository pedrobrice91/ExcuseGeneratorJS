
function excusee() {
  let aleatorio = Math.floor(Math.random() * 4);
  let aleatorio3 = Math.floor(Math.random() * 3);
  let aleatorio5 = Math.floor(Math.random() * 5);
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  console.log(
    "My excuse is" +
      " " +
      who[aleatorio] +
      " " +
      action[aleatorio] +
      " " +
      what[aleatorio3] +
      " " +
      when[aleatorio5]
  );
}
excusee();
