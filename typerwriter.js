const typeWriter = (sentence) => {
  let time = 1000;

  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 10;
  }
};

const sentence = `hello there from lighthouse labs. \n`;

typeWriter(sentence);