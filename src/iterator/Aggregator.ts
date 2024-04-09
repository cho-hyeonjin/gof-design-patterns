// Aggregator 인터페이스는 Iterator 인터페이스를 생성한다. (이미지 참고)
// Aggregator interface create Iterator interface
import Iterator from "./iterator";

interface Aggregator<T> {
  itertator(): Iterator<T>; // iterator() 메서드가 바로 Iterator interface를 생성해서 리턴해주는 메서드. 마찬가지로 Generic Type.
}

export default Aggregator;
