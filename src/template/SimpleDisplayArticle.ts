import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";

export default class SimpleDisplayArticle extends DisplayArticleTemplate {
  /** 3개의 추상 메서드 입력 */
  protected titleHtml(): string {
    return `<h1>${this.article.getTitle()}</h1>`;
  }

  protected contentHtml(): string {
    const items = this.article.getContent().map((item) => `<li>${item}</li>`);
    return `<ul>${items.join("")}</ul>`;
  }

  protected footerHtml(): string {
    return `<h3>${this.article.getFooter()}</h3>`;
  }

  constructor(article: Article) {
    /** 부모클래스의 생성자 호출 위해 super 키워드 입력하여 호출 */
    super(article);
  }
}
