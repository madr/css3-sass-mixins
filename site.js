/*jslint indent: 2, browser: true */
(function(document){
  "use strict";
  var ins, i,
    inc,
    ie,
    t, v, e,
    rw,
    imagin,
    example,
    update,
    toggleIE;

  inc = "    %s\n";
  ie = "useIEFilters: %d;";
  ins = document.getElementsByTagName("input");
  i = ins.length;
  imagin = document.getElementById("imagin");
  example = document.getElementById("example");

  while (i) {
    i -= 1;
    ins[i].onchange = function () {
      if (this.type === "checkbox") {
        update(this.id,
          this.nextSibling.innerHTML,
          !this.checked);
      } else {
        toggleIE(this.value);
      }
    };
  }

  toggleIE = function (decision) {
    rw = ie.replace("%d", decision);
    imagin.value = imagin.value.replace(/useIEFilters.+?;/, rw);
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
