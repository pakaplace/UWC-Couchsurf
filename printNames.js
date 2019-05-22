const names = [
  { person1: "Mailiis", person2: "Tomas" },
  { person1: "Parker", person2: "Robot Lover" },
  { person1: "George", person2: "Georgie" },
  { person1: "Ilham", person2: "Sean" },
  { person1: "George", person2: "Georgie" },
  { person1: "Ilham", person2: "Sean" },
  { person1: "George", person2: "Georgie" },
  { person1: "Ilham", person2: "Sean" }
];
let printNames = function() {
  let i = 0;
  setInterval(function() {
    console.log(
      `Robot selects ${names[i].person1} and ${
        names[i].person2
      } XOXOXO <3 ( ͡° ͜ʖ ͡°)`
    );
    i++;
    if (i == 3) clearInterval();
  }, 2000);
};

printNames();
