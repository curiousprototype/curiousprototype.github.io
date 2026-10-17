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
    country: "Germany", city: "Hamburg", year: "2026",
    description: "Port city, canals and northern light.",
    cover: "photos/germany/hamburg/cover.jpg",
    photos: [
      { src: "photos/germany/hamburg/01.jpg", caption: "Hamburg · Photo 1" },
      { src: "photos/germany/hamburg/02.jpg", caption: "Hamburg · Photo 2" }
    ]
  },
  {
    country: "Germany", city: "Berlin", year: "2025",
    description: "Art, architecture and city walks.",
    cover: "photos/germany/berlin/cover.jpg",
    photos: [
      { src: "photos/germany/berlin/01.jpg", caption: "Berlin · Photo 1" }
    ]
  },
  {
    country: "Greece", city: "Chania", year: "2026",
    description: "Warm evenings by the Mediterranean.",
    cover: "photos/greece/chania/cover.jpg",
    photos: [
      { src: "photos/greece/chania/01.jpg", caption: "Chania · Photo 1" },
      { src: "photos/greece/chania/02.jpg", caption: "Chania · Photo 2" }
    ]
  },
  {
    country: "Greece", city: "Athens", year: "2026",
    description: "Layers of history in the streets.",
    cover: "photos/greece/athens/cover.jpg",
    photos: [
      { src: "photos/greece/athens/01.jpg", caption: "Athens · Photo 1" }
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
    country: "Austria", city: "Vienna", year: "2025",
    description: "Coffee houses and grand boulevards.",
    cover: "photos/austria/vienna/cover.jpg",
    photos: [
      { src: "photos/austria/vienna/01.jpg", caption: "Vienna · Photo 1" }
    ]
  }
];
