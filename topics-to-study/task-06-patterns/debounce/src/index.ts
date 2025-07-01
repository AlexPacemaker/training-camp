import { debounce } from "./debounce";

class Demo {
  @debounce(1000)
  printMessage(msg: string) {
    console.log(`📣 ${msg} at`, performance.now().toFixed(0), "ms");
  }
}

const d = new Demo();

console.log("Start at", performance.now().toFixed(0), "ms");

d.printMessage("1-й вызов");
setTimeout(() => d.printMessage("2-й вызов"), 400);
setTimeout(() => d.printMessage("3-й вызов"), 1100);
setTimeout(() => d.printMessage("4-й вызов"), 1200);
