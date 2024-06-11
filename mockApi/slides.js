const slides = [
  "https://images-proxy.mindx.edu.vn/1120x,webp/https://website-dev.hn.ss.bfcplatform.vn/resize_16_x_9_731bba381c.png",
  "https://images-proxy.mindx.edu.vn/1120x,webp/https://website-dev.hn.ss.bfcplatform.vn/Artboard_3_copy_2b09cde594.png",
];

let timer;

let currentSlideIndex = 0;

const slidesEle = document.querySelector(".slides");
const dotsEl = document.querySelector(".dots");
const countSlideItem = slides.length;

const handleAddClickDot = () => {
  const dotElesHtmlCollection = document.querySelectorAll(".dot");

  const dotElesArray = Array.from(dotElesHtmlCollection);

  if (dotElesArray) {
    dotElesArray.forEach((dot, index) => {
      dot.addEventListener("click", () => handleClickDot(index));
    });
  }
};

const handleClickDot = (index) => {
  if (index === currentSlideIndex) return;
  currentSlideIndex = index;
  renderHtmlSlider();
};

const handleNextSlide = () => {
  if (currentSlideIndex === countSlideItem - 1) {
    currentSlideIndex = 0;
    renderHtmlSlider();
    return;
  }
  currentSlideIndex++;
  renderHtmlSlider();
};

const handlePrevSlide = () => {
  if (currentSlideIndex === 0) {
    currentSlideIndex = countSlideItem - 1;
    renderHtmlSlider();
    return;
  }
  currentSlideIndex--;
  renderHtmlSlider();
};

const autoPlay = () => {
  const timer = setTimeout(() => {
    handleNextSlide();
  }, 30000);

  return timer;
};

const renderHtmlSlider = () => {
  if (timer) clearTimeout(timer);

  let slidesHtml = "";
  let dotsHtml = "";

  slides.forEach((slide, index) => {
    if (index === currentSlideIndex) {
      slidesHtml += `
     
      <li class="slides__item active">
            <img
              src="${slide}"
              alt="BANNER"
            />
          </li>
      `;
      dotsHtml += `
      <li class="dot active"></li>
      `;
    } else {
      slidesHtml += `
      <li class="slides__item">
            <img
              src="${slide}"
              alt="BANNER"
            />
          </li>
     `;
      dotsHtml += `
      <li class="dot"></li>
      `;
    }
  });

  slidesEle.innerHTML = slidesHtml;
  dotsEl.innerHTML = dotsHtml;

  handleAddClickDot();

  timer = autoPlay();
};

renderHtmlSlider();

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

btnPrev.addEventListener("click", handlePrevSlide);
btnNext.addEventListener("click", handleNextSlide);
