const linkYtb = [
  "https://www.youtube.com/embed/TGVfoGSJy2M?si=_Fkec-j0rp8WWMMb",
  "https://www.youtube.com/embed/8lKLOvyHb8Y?si=_OzpVwzugIvnCiS0",
  "https://www.youtube.com/embed/Krb51LtqbcM?si=cofITqW22Z1-PXPa",
];

const modalEle = document.querySelector(".modal");

const playBtns = document.querySelectorAll(".about__content-card-play");

if (playBtns) {
  Array.from(playBtns).forEach((playBtn, index) => {
    playBtn.addEventListener("click", () => {
      if (modalEle.style.display !== "block") {
        const modalIframeEle = document.querySelector(".modal__content iframe");
        modalIframeEle.src = linkYtb[index];

        modalEle.style.display = "block";
        addEventCloseModal();
      } else {
        modalEle.removeEventListener("click", () => {});
        modalEle.style.display = "none";
      }
    });
  });
}

const addEventCloseModal = () => {
  const modalIframeEle = document.querySelector(".modal__content iframe");
  if (modalIframeEle) {
    modalEle.addEventListener("click", (e) => {
      if (e.target !== modalIframeEle) {
        modalIframeEle.src = "";
        modalEle.style.display = "none";
      }
    });
  }
};
