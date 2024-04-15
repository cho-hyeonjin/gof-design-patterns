import Article from "./Article";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayArticle";

const article = new Article(
  "Cho-Hyeonjin's Tech Stack",
  ["React", "Redux", "TypeScript", "Three.js", "PixiJS"],
  "Creative Developer"
);

const display = new SimpleDisplayArticle(article);
document.querySelector(".content").innerHTML = display.displayHtml();

document.querySelector(".edit-mode").addEventListener("change", (event) => {
  let display;

  if ((<HTMLInputElement>event.target).checked) {
    display = new EditableDisplayArticle(article);
  } else {
    display = new SimpleDisplayArticle(article);
  }

  document.querySelector(".content").innerHTML = display.displayHtml();
});
