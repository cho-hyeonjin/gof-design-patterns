import Aggregator from "./Aggregator";
import ArrayIterator from "./ArrayIterator";
import Item from "./item";
import Iterator from "./iterator";

// Aggregator 를 구성하는 구성요소 Array 클래스
// 제네릭타입으로 설정해줘야 하는데, Item 타입으로 정해준다.
class Array implements Aggregator<Item> {
  // Item 클래스 여러개를 가질 private 필드 추가 & 초기화
  constructor(private items: Item[]) {}

  // intdex를 통해 배열 구성 데이터를 얻을 수 있는 메서드 추가
  public getItem(index: number) {
    return this.items[index];
  }
  // 배열 구성 데이터의 개수를 구할 수 있는 getter 메서드 정의
  public get count() {
    return this.items.length;
  }

  itertator(): Iterator<Item> {
    return new ArrayIterator(this); // Iterator 인터페이스의 구현체 ArrayIterator 클래스에서 위에서 정의한 Array class의 메서드를 필드로 구성할 수 있도록 this 전달(this는 Array의 인스턴스)
  }
}

export default Array;
