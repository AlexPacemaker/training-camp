document.addEventListener("DOMContentLoaded", () => {
  const codeContainer = document.getElementById("code-container"); // Контейнер для кода
  const addCodeButton = document.getElementById("add-code"); // Кнопка

  const createAndInsertCodeBlock = (codeText, language = "javascript") => {
    const pre = document.createElement("pre");
    const code = document.createElement("code");

    code.className = `language-${language}`;
    code.textContent = codeText.trim();
    pre.appendChild(code);
    codeContainer.appendChild(pre);
  };

  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === "PRE" && node.querySelector("code")) {
            const codeElement = node.querySelector("code");
            Prism.highlightElement(codeElement); // Подсвечиваем новый блок
          }
        });
      }
    });
  });

  observer.observe(codeContainer, { childList: true, subtree: false });

  addCodeButton.addEventListener("click", () => {
    const exampleCode = `
    Функция greet принимает имя и возвращает приветствие
function greet(name) {
  return 'Hello, ' + name + '!';
}
console.log(greet('World'));
    `;
    createAndInsertCodeBlock(exampleCode, "javascript");
  });
});
