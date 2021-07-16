var names = [];

function submit() {
  var guest_name = document.getElementById("name_txt").value;
  names.push(guest_name);
  console.log(guest_name);
  var lengthOfName = names.length;
  console.log(lengthOfName);
  document.getElementById("displayNames").innerHTML = names.toString();
}

function show() {
  var i = names.join("<br>");
  console.log(names);
  document.getElementById("show_names").innerHTML = i.toString();
  document.getElementById("btn_sortedList").style.display = "inline-block";

}

function sort() {
  names.sort();
  var i = names.join("<br>");
  console.log(names);
  document.getElementById("sorted_names").innerHTML = i.toString();
}

function search() {
  var s = document.getElementById("search_input").value;
  var found = 0;
  var j;
  for (j = 0; j < names.length; j++) {
    if (s == names[j]) {
      found = found + 1;
    }
  }
  document.getElementById("something").innerHTML = "name found" + found + "times";
  console.log("name found" + found + "times");
}