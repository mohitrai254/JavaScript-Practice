let num = 121;

function pallindrome(num) {
  let originalNum = num;
  let reverse = 0;
  while (num > 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }

  if (reverse == originalNum) return "Pallindrome";
  else return "Not pallindrome";
}

console.log(pallindrome(num));
