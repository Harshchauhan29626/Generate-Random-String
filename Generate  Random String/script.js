function RandomString() {
    var lengthInput = document.getElementById("length");
    var length = parseInt(lengthInput.value);

    if (isNaN(length) || length <= 0) {
      alert("Please enter a number.");
      return;
    }

    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var randomString = "";

    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    document.getElementById("randomString").innerText = randomString;
  }