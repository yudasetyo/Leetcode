const isPalindrome = (x) => {
  if (x < 0) return false;
  let num = x.toString();
  let reverse = num.split(" ").reverse().join("");
  return num === reverse;
};

console.log(isPalindrome(112));
