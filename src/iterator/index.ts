import Array from "./Array";
import Item from "./item";

const items = [
  new Item("쿠크다스", 3000),
  new Item("새우깡", 2000),
  new Item("빼빼로", 2000),
  new Item("초코파이", 5000),
];

const array = new Array(items);
const iter = array.itertator();

while (iter.next()) {
  const item = iter.current();

  const domItem = document.createElement("div");
  domItem.innerText = `${item.name} : ${item.cost}원 `;
  document.body.appendChild(domItem);

  domItem.classList.add("iterator-item");
}
