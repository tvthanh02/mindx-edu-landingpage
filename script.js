import { navs } from "./mockApi/navs.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const bars = $(".header__icon-bars");
const navLinkWrap = $(".header__navlink");
const navItems = $(".navlink__items");

let html = "";

navs.forEach((navItem) => {
  const { title, path, childs } = navItem;

  if (childs && childs.length > 0) {
    html += `
        <li class="navlink__item">
              <a href="${path}" class="navlink__link">
                ${title}
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul class="navlink__sub">
      `;

    childs.forEach((childNavItem, index) => {
      if (childNavItem.childs && childNavItem.childs.length > 0) {
        html += `
                <li class="navlink__sub-item">
                  <a href="${childNavItem.path}" class="navlink__sub-link"
                    >${childNavItem.title}
                    <i class="fa-solid fa-angle-right fa-angle-right-${
                      index + 1
                    }"></i>
                  </a>
                   <ul class="navlink__sub-2">
                  `;
        childNavItem.childs.forEach((childNavItem2) => {
          html += `<li class="navlink__sub-item">
                      <a href="${childNavItem2.path}" class="navlink__sub-link"
                        >${childNavItem2.title}
                      </a>
                    </li>`;
        });
        html += "</ul>";
      } else {
        html += `<li class="navlink__sub-item">
                  <a href="${childNavItem.path}" class="navlink__sub-link"
                    >${childNavItem.title}
                  </a>
                </li>`;
      }
    });
    html += "</ul>";
    html += "</li>";
  } else {
    html += `
        <li class="navlink__item">
              <a href="${path}" class="navlink__link">${title}</a>
            </li>
        `;
  }
});

navItems.innerHTML = html;

const navSub = $(".navlink__sub");
const navSub2 = $$(".navlink__sub-2");

const angleDown = $(".fa-angle-down");

bars.addEventListener("click", () => {
  navLinkWrap.classList.toggle("open");
});

angleDown.onclick = () => {
  navSub.classList.toggle("open");
};

Array.from(navSub2).forEach((nav, index) => {
  $(`.fa-angle-right-${index + 1}`).addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});
