import Article from "./Article";

/** 추상클래스이므로 abstract를 붙여서 선언 */
export default abstract class DisplayArticleTemplate {
  /** 파생클래스에서 접근할 수 있도록 protected 접근자로 지정 */
  constructor(protected article: Article) {}

  /** 각 단계를 정해진 순서대로 호출해주는 template method 추가 - 파생 클래스에서 수정할 수 없고 사용만 할 수 있게 readonly로 작성 */
  public readonly displayHtml = () => {
    return `
      ${this.titleHtml()}
      ${this.contentHtml()}
      ${this.footerHtml()}
    `;
  };

  /** 구현이 없는 추상메서드로 선언 */
  protected abstract titleHtml(): string;
  protected abstract contentHtml(): string;
  protected abstract footerHtml(): string;
}
