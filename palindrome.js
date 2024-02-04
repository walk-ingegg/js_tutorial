// 文字列を逆順にして返す
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// パリンドローム（回文）ならtrueを、そうでなければfalseを返す
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
