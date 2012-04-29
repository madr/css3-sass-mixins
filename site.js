/*jslint indent: 2, browser: true */
(function(document){
  "use strict";
  var ins, i,
    inc,
    t, v, e,
    imagin,
    example,
    update;

  inc = "    %s\n";
  ins = document.getElementsByTagName("input");
  i = ins.length;
  imagin = document.getElementById("imagin");
  example = document.getElementById("example");

  while (i) {
    i -= 1;
    ins[i].onchange = function () {
      update(this.id,
        this.nextSibling.innerHTML,
        !this.checked);
    };
  }

  update = function (id, value, checked) {
    t = inc.replace("%s", value);
    if (checked) {
      e = example.className.replace(" " + id, "");
      v = imagin.value.replace(t, "");
    } else {
      e = example.className + " " + id;
      v = imagin.value.replace("}", t + "}");
    }
    example.className = e;
    imagin.value = v;
  };
}(document));
