/*jslint indent: 2, browser: true */
(function (document) {
  "use strict";
  var ins, i,
    inc, inc2,
    ie,
    t, v, e,
    rw,
    imagin,
    example,
    update,
    callback,
    toggleIE;

  inc = "    %s\n";
  inc2 = "    %s\r\n";  // for IE and opera support
  ie = "useIEFilters: %d;";
  ins = document.getElementsByTagName("input");
  i = ins.length;
  imagin = document.getElementById("imagin");
  example = document.getElementById("example");

  callback = function () {
    if (this.type === "checkbox") {
      update(this.id,
        this.nextSibling.innerHTML,
        !this.checked);
    } else {
      toggleIE(this.value);
    }
  };

  while (i) {
    i -= 1;
    ins[i].onchange = callback;
  }

  toggleIE = function (decision) {
    rw = ie.replace("%d", decision);
    imagin.value = imagin.value.replace(/useIEFilters: \d;/, rw);
    if (parseInt(decision, 10) === 1) {
      e = example.className += " legacy";
    } else {
      e = example.className.replace(" legacy", "");
    }
    example.className = e;
  };

  update = function (id, value, checked) {
    t = inc.replace("%s", value);
    if (checked) {
      e = example.className.replace(" " + id, "");
      v = imagin.value.replace(t, "");
      v = v.replace(inc2.replace("%s", value), "");
    } else {
      e = example.className + " " + id;
      v = imagin.value.replace("}", t + "}");
    }
    example.className = e;
    imagin.value = v;
  };
}(document));