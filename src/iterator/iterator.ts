// 제네릭 타입 인터페이스 Iterator
interface Iterator<T> {
  next(): boolean; // Aggregator(Container)의 다음 구성 데이터를 얻어오는 메서드 - 얻어올 수 있다면 true / 없다면 false 리턴
  current(): T; // 구성 데이터를 하나 얻어서 반환, 구성 데이터는 어떤 타입이든 사용할 수 있도록 Generic Type으로 지정.
}

export default Iterator;
