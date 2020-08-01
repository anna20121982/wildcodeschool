let first = document.querySelector(".first");
let iframe = document.querySelector("iframe");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

let timeout = null;
first.addEventListener("keyup", e => {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
  }, 600);
});
