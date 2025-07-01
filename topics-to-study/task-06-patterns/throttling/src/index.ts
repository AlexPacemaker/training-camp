import { throttle } from "./throttle";

class Demo {
  @throttle(1000)
  printMessage(msg: string) {
    console.log(`📣 ${msg}`);
  }
}

const d = new Demo();

console.log("Start at", performance.now().toFixed(0), "ms");

d.printMessage("1-й вызов"); // сразу
setTimeout(() => d.printMessage("2-й вызов"), 200); // игнор
setTimeout(() => d.printMessage("3-й вызов"), 400); // игнор
setTimeout(() => d.printMessage("4-й вызов"), 1500); // пройдет
