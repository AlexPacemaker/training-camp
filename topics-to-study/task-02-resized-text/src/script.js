"use strict";

/**
 * @function adjustFontSize
 * @description Изменяет размер шрифта текстового элемента в зависимости от ширины контейнера.
 * Устанавливает минимальный размер шрифта в 16 пикселей и пропорционально изменяет его
 * в зависимости от ширины контейнера (1/20 от ширины).
 * Размер шрифта логируется в консоль.
 *
 * @example
 * // Предположим, ширина контейнера равна 1000 пикселей.
 * // Тогда размер шрифта будет 50 пикселей.
 * adjustFontSize();
 */

const container = document.getElementById("resizable-container");
const textElement = document.getElementById("text");

function adjustFontSize() {
  const width = container.clientWidth;
  textElement.style.fontSize = `${Math.max(16, width / 20)}px`;
  console.log(textElement.style.fontSize);
}

const resizeObserver = new ResizeObserver(adjustFontSize);
resizeObserver.observe(container);

adjustFontSize();
