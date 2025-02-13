"use strict";

import { API_KEY } from "../api-key.js";

let page = 1;

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

const loadImages = async () => {
  const response = await fetch(`https://api.unsplash.com/photos?page=${page}&client_id=${API_KEY}`);
  const data = await response.json();
  data.forEach((image) => {
    const imgElement = document.createElement("div");
    imgElement.classList.add("image-item");
    imgElement.innerHTML = `<img src="${image.urls.small}" alt="${image.description || "Image"}">`;
    imageContainer.appendChild(imgElement);
  });
  page++;
};

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      loadImages();
    }
  },
  {
    rootMargin: "0px",
    threshold: 1.0,
  }
);

loadImages();

observer.observe(loader);
