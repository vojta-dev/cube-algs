if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = (string, newString) => {
    return string.replace(new RegExp(string, 'g'), newString);
  };
}

export default null;
