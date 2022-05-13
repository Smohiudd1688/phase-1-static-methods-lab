class Formatter {
  //add static methods here
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize (string) {
    let stringArray = string.split(' ');
    stringArray[0] = stringArray[0].charAt(0).toUpperCase() + stringArray[0].slice(1);
    for (let i = 1; i < stringArray.length; i++) {
      if (stringArray[i] !== 'a' && stringArray[i] !== 'but' && stringArray[i] !== 'of' && stringArray[i] !== 'and' && stringArray[i] !== 'an' &&
      stringArray[i] !== 'for' && stringArray[i] !== 'at' && stringArray[i] !== 'by' && stringArray[i] !== 'the' && stringArray[i] !== 'from') {
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
      }
    }
    return stringArray.join(' ');
  }
}
