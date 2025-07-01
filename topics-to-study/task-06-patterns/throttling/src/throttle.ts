export function throttle(delay: number) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    let lastCall = 0;

    descriptor.value = function (...args: any[]) {
      const now = performance.now();

      if (now - lastCall >= delay) {
        lastCall = now;
        console.log(`⏱ THROTTLE executing: ${args[0]} at ${now.toFixed(0)} ms`);
        originalMethod.apply(this, args);
      } else {
        console.log(`🚫 THROTTLE ignored: ${args[0]} at ${now.toFixed(0)} ms`);
      }
    };

    return descriptor;
  };
}
