function rot13(str) {
  function rot13Char(char) {
    const ascii = char.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
      return String.fromCharCode(((ascii - 65 + 13) % 26) + 65);
    } else if (ascii >= 97 && ascii <= 122) { letters
      return String.fromCharCode(((ascii - 97 + 13) % 26) + 97);
    } else { 
      return char;
    }
  }

  return str.split('').map(rot13Char).join('');
}