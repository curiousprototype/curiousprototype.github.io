/*
 * 只需要编辑这个文件，就能添加国家、城市和照片。
 * 以下地点仅作演示，并非网站作者真实旅行记录。
 * 把 src 和 cover 改成你自己的照片路径，再上传相应的图片文件。
 * 一张照片的例子：{ src: "photos/germany/hamburg/01.jpg", caption: "Speicherstadt · 2026" }
 */
window.SITE_CONFIG = {
  title: "My Travel Journal",
  subtitle: "Places I've been. Moments I've kept.",
  intro: "A small collection of photographs, memories and places around the world.",
  email: "" // 想公开联系邮箱再填写，否则留空
};

window.TRIPS = [
  {
    country: "Germany", city: "Berlin", year: "2021-2026",
    description: "My PHD.",
    cover: "photos/germany/berlin/berlin_2.jpg",
    photos: [
      { src: "photos/germany/berlin/berlin_1.jpg", caption: "Berlin · Photo 1" },
      { src: "photos/germany/berlin/berlin_2.jpg", caption: "Berlin · Photo 2" },
      { src: "photos/germany/berlin/berlin_3.jpg", caption: "Berlin · Photo 3" },
      { src: "photos/germany/berlin/berlin_4.jpg", caption: "Berlin · Photo 4" },
      { src: "photos/germany/berlin/berlin_5.jpg", caption: "Berlin · Photo 5" },
      { src: "photos/germany/berlin/berlin_6.jpg", caption: "Berlin · Photo 6" },
      { src: "photos/germany/berlin/berlin_7.jpg", caption: "Berlin · Photo 7" },
      { src: "photos/germany/berlin/berlin_8.jpg", caption: "Berlin · Photo 8" },
      { src: "photos/germany/berlin/berlin_9.jpg", caption: "Berlin · Photo 9" },
      { src: "photos/germany/berlin/berlin_10.jpg", caption: "Berlin · Photo 10" },
      { src: "photos/germany/berlin/berlin_11.jpg", caption: "Berlin · Photo 11" },
      { src: "photos/germany/berlin/berlin_12.jpg", caption: "Berlin · Photo 12" }
    ]
  },
  {
    country: "Germany", city: "Hamburg", year: "2026",
    description: "Port city, canals and northern light.",
    cover: "photos/germany/hamburg/cover.jpg",
    photos: [
      { src: "photos/germany/hamburg/01.jpg", caption: "Hamburg · Photo 1" },
      { src: "photos/germany/hamburg/02.jpg", caption: "Hamburg · Photo 2" }
    ]
  },
  {
    country: "Greece", city: "Crete", year: "2026",
    description: "Mediterranean sea.",
    cover: "photos/greece/crete/balos_1.jpg",
    photos: [
      { src: "photos/greece/crete/balos_1.jpg", caption: "Crete · Photo 1" },
      { src: "photos/greece/crete/balos_2.jpg", caption: "Crete · Photo 2" },
      { src: "photos/greece/crete/balos_3.jpg", caption: "Crete · Photo 3" },
      { src: "photos/greece/crete/balos_4.jpg", caption: "Crete · Photo 4" },
      { src: "photos/greece/crete/balos_5.jpg", caption: "Crete · Photo 5" },
      { src: "photos/greece/crete/balos_6.jpg", caption: "Crete · Photo 6" },
      { src: "photos/greece/crete/elafonissi_1.jpg", caption: "Crete · Photo 7" },
      { src: "photos/greece/crete/elafonissi_2.jpg", caption: "Crete · Photo 8" },
      { src: "photos/greece/crete/minos_palace.jpg", caption: "Crete · Photo 9" },
    ]
  },
  {
    country: "Greece", city: "Athens", year: "2026",
    description: "Layers of history in the streets.",
    cover: "photos/greece/athens/athens_4.jpg",
    photos: [
      { src: "photos/greece/athens/athens_1.jpg", caption: "Athens · Photo 1" },
      { src: "photos/greece/athens/athens_2.jpg", caption: "Athens · Photo 2" },
      { src: "photos/greece/athens/athens_3.jpg", caption: "Athens · Photo 3" },
      { src: "photos/greece/athens/athens_4.jpg", caption: "Athens · Photo 4" },
      { src: "photos/greece/athens/athens_5.jpg", caption: "Athens · Photo 5" }
    ]
  },
  {
    country: "Italy", city: "Dolomites", year: "2025",
    description: "Alpes.",
    cover: "photos/italy/dolomites/dolomites_12.jpg",
    photos: [
      { src: "photos/italy/dolomites/dolomites_1.jpg", caption: "Dolomites · Photo 1" },
      { src: "photos/italy/dolomites/dolomites_2.jpg", caption: "Dolomites · Photo 2" },
      { src: "photos/italy/dolomites/dolomites_3.jpg", caption: "Dolomites · Photo 3" },
      { src: "photos/italy/dolomites/dolomites_4.jpg", caption: "Dolomites · Photo 4" },
      { src: "photos/italy/dolomites/dolomites_5.jpg", caption: "Dolomites · Photo 5" },
      { src: "photos/italy/dolomites/dolomites_6.jpg", caption: "Dolomites · Photo 6" },
      { src: "photos/italy/dolomites/dolomites_7.jpg", caption: "Dolomites · Photo 7" },
      { src: "photos/italy/dolomites/dolomites_8.jpg", caption: "Dolomites · Photo 8" },
      { src: "photos/italy/dolomites/dolomites_9.jpg", caption: "Dolomites · Photo 9" },
      { src: "photos/italy/dolomites/dolomites_10.jpg", caption: "Dolomites · Photo 10" },
      { src: "photos/italy/dolomites/dolomites_11.jpg", caption: "Dolomites · Photo 11" },
      { src: "photos/italy/dolomites/dolomites_12.jpg", caption: "Dolomites · Photo 12" },
      { src: "photos/italy/dolomites/dolomites_13.jpg", caption: "Dolomites · Photo 13" },
      { src: "photos/italy/dolomites/dolomites_14.jpg", caption: "Dolomites · Photo 14" },
      { src: "photos/italy/dolomites/dolomites_15.jpg", caption: "Dolomites · Photo 15" },
      { src: "photos/italy/dolomites/dolomites_16.jpg", caption: "Dolomites · Photo 16" },
      { src: "photos/italy/dolomites/dolomites_17.jpg", caption: "Dolomites · Photo 17" },
      { src: "photos/italy/dolomites/dolomites_18.jpg", caption: "Dolomites · Photo 18" }
    ]
  },
  {
    country: "Italy", city: "Sardinia", year: "2024",
    description: "Mediterranean sea.",
    cover: "photos/italy/sardinia/sardinia_14.jpg",
    photos: [
      { src: "photos/italy/sardinia/sardinia_1.jpg", caption: "Sardinia · Photo 1" },
      { src: "photos/italy/sardinia/sardinia_2.jpg", caption: "Sardinia · Photo 2" },
      { src: "photos/italy/sardinia/sardinia_3.jpg", caption: "Sardinia · Photo 3" },
      { src: "photos/italy/sardinia/sardinia_4.jpg", caption: "Sardinia · Photo 4" },
      { src: "photos/italy/sardinia/sardinia_5.jpg", caption: "Sardinia · Photo 5" },
      { src: "photos/italy/sardinia/sardinia_6.jpg", caption: "Sardinia · Photo 6" },
      { src: "photos/italy/sardinia/sardinia_7.jpg", caption: "Sardinia · Photo 7" },
      { src: "photos/italy/sardinia/sardinia_8.jpg", caption: "Sardinia · Photo 8" },
      { src: "photos/italy/sardinia/sardinia_9.jpg", caption: "Sardinia · Photo 9" },
      { src: "photos/italy/sardinia/sardinia_10.jpg", caption: "Sardinia · Photo 10" },
      { src: "photos/italy/sardinia/sardinia_11.jpg", caption: "Sardinia · Photo 11" },
      { src: "photos/italy/sardinia/sardinia_12.jpg", caption: "Sardinia · Photo 12" },
      { src: "photos/italy/sardinia/sardinia_13.jpg", caption: "Sardinia · Photo 13" },
      { src: "photos/italy/sardinia/sardinia_14.jpg", caption: "Sardinia · Photo 14" }
    ]
  },
  {
    country: "Italy", city: "Rome", year: "2025",
    description: "Ancient streets and afternoon light.",
    cover: "photos/italy/rome/cover.jpg",
    photos: [
      { src: "photos/italy/rome/01.jpg", caption: "Rome · Photo 1" }
    ]
  },
  {
    country: "France", city: "Lyon", year: "2025",
    description: "Memory.",
    cover: "photos/france/lyon/lyon_1.jpg",
    photos: [
      { src: "photos/france/lyon/lyon_1.jpg", caption: "Lyon · Photo 1" },
      { src: "photos/france/lyon/lyon_2.jpg", caption: "Lyon · Photo 2" },
      { src: "photos/france/lyon/lyon_3.jpg", caption: "Lyon · Photo 3" },
      { src: "photos/france/lyon/lyon_4.jpg", caption: "Lyon · Photo 4" },
      { src: "photos/france/lyon/lyon_5.jpg", caption: "Lyon · Photo 5" },
      { src: "photos/france/lyon/lyon_6.jpg", caption: "Lyon · Photo 6" },
      { src: "photos/france/lyon/lyon_7.jpg", caption: "Lyon · Photo 7" },
      { src: "photos/france/lyon/lyon_8.jpg", caption: "Lyon · Photo 8" },
      { src: "photos/france/lyon/lyon_9.jpg", caption: "Lyon · Photo 9" },
      { src: "photos/france/lyon/lyon_10.jpg", caption: "Lyon · Photo 10" },
      { src: "photos/france/lyon/lyon_11.jpg", caption: "Lyon · Photo 11" }
    ]
  }
];
