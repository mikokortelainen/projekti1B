function laskeKirjaimet(val) {
  var len = val.value.length;
  if (len >= 250) {
    val.value = val.value.substring(0, 250);
  } else {
    $('#kirjainMaara').text("Kirjaimia jäljellä: " + (250 - len));
  }
};
