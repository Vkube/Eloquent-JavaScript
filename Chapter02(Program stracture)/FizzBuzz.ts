for (let i: number = 1; i <= 100; i++) {
  let result: string = "";
  if (i % 3 == 0) result += "Fizz";
  else if (i % 5 == 0) result += "Buzz";

  console.log(result || i);
}
