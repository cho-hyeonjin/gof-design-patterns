//
// Aggregator 인터페이스 구성항목에 대한 Item 클래스
class Item {
  // // 2개의 private 필드를 가짐. private이므로 클래스 내부에서만 사용 가능
  // private _name: string;
  // private _cost: number;

  // // 생성자로 필드값 초기화
  // constructor(name: string, cost: number) {
  //   this._name = name;
  //   this._cost = cost;
  // }
  // --- 위 코드를 아래와 같이 한 줄로 간결하게 표현할 수 있음 ---
  constructor(private _name: string, private _cost: number) {}

  // Item class 외부에서도 _name과 _cost 필드를 사용할 수 있도록 getter 설정
  get name() {
    return this._name;
  }
  get cost() {
    return this._cost;
  }
}

export default Item;
