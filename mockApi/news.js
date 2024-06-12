const news = [
  {
    thumb:
      "https://images-proxy.mindx.edu.vn/360x,webp/https://website-dev.hn.ss.bfcplatform.vn/photo_6113930948979572008_y_1_9d42c28bc5.jpg",
    title:
      "MindX nhận đầu tư 15 triệu USD vòng Series B, dẫn đầu phát triển năng lực công nghệ Việt Nam",
    categories: ["Sự nghiệp", "Bài viết nổi bật"],
  },
  {
    thumb:
      "https://images-proxy.mindx.edu.vn/360x,webp/https://website-dev.hn.ss.bfcplatform.vn/bao_luc_tren_khong_gian_mang_thumb_3925b98c3c.jpg",
    title: "Bạo lực mạng là gì? Các hình thức & hậu quả của bạo lực mạng",
    categories: ["Công nghệ", "Giáo dục", "Sự nghiệp"],
  },
  {
    thumb:
      "https://images-proxy.mindx.edu.vn/360x,webp/https://website-dev.hn.ss.bfcplatform.vn/banner_95e51151f8.png",
    title:
      "Khoá học Full Stack Marketer - Trở thành nhân sự đa nhiệm trong ngành Marketing ",
    categories: ["Giáo dục", "Công nghệ"],
  },
  {
    thumb:
      "https://images-proxy.mindx.edu.vn/360x,webp/https://website-dev.hn.ss.bfcplatform.vn/data_f3d2fd2611.png",
    title: "Những ngành nghề nào cần có vị trí Data Analyst ?",
    categories: ["Công nghệ", "Sự nghiệp"],
  },
];

const newsList = document.querySelector(".news__content");
let htmlNews = "";

news.forEach((newItem) => {
  let { thumb, title, categories } = newItem;
  if (categories.length > 2) categories.splice(categories.length - 1, 1, "+ 1");

  htmlNews += `
    <li class="news__card"><a href="#" class="news__card-link">
            <div class="news__card-thumbnail">
                <img src="${thumb}" width="360" height="200" alt="NEWS">
            </div>
            <div class="news__card-data">
              <ul class="news__card-data-categories">
                ${categories
                  .map((category) => {
                    return category === "+ 1"
                      ? `<li class="news__card-data-categories-item gray">${category}</li>`
                      : `<li class="news__card-data-categories-item ">${category}</li>`;
                  })
                  .join(" ")}
              </ul>
              <div class="news__card-data-heading">${title}</div>
            </div>
          </a></li>`;
});

newsList.innerHTML = htmlNews;
