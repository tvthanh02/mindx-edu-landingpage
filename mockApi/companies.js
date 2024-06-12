const companies = [
  "https://mindx.edu.vn/_next/image?url=%2Fimage9.png&w=256&q=75",
  "https://mindx.edu.vn/_next/image?url=%2Fimage11.png&w=256&q=75",
  "https://mindx.edu.vn/_next/image?url=%2Fimage2.png&w=256&q=75",
  "https://mindx.edu.vn/_next/image?url=%2Fimage13.png&w=256&q=75",
  "https://mindx.edu.vn/_next/image?url=%2Fimage3.png&w=256&q=75",
  "https://mindx.edu.vn/image5.svg",
  "https://mindx.edu.vn/image7.svg",
  "https://mindx.edu.vn/image8.svg",
  "https://mindx.edu.vn/image10.svg",
];

const strackSlide = document.querySelectorAll(".slider-track");
let html = "";
companies.forEach((company) => {
  html += `
   <img src="${company}" alt="COMPANY" />`;
});

Array.from(strackSlide).forEach((slides) => {
  slides.innerHTML = html;
});

// strackSlide.innerHTML = html;

// const handleInfinitiScroll = () => {
//   const slides = document.querySelectorAll(".slide");
//   if (slides) {
//     Array.from(slides).forEach((slide) => {
//       const clone = slide.cloneNode(true);
//       strackSlide.appendChild(clone);
//     });
//   }
// };

// handleInfinitiScroll();
