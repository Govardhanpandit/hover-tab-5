let tab_links = document.querySelectorAll(".tab_links");
let tab_content = document.querySelectorAll(".content");

tab_content[0].style.display = "block";

tab_links[0].className += " active";

for (i = 0; i < tab_links.length; i++) {
  tab_links[i].addEventListener("mouseover", function () {
    for (i = 0; i < tab_links.length; i++) {
      tab_content[i].style.display = "none";

      tab_links[i].classList.remove("active");
    }
    let index = Array.prototype.indexOf.call(tab_links, this);
    this.classList.add("active");
    tab_content[index].style.display = "block";
  });
}
