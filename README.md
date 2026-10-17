# 我的旅行摄影网页：GitHub Pages 模板

## 2. 添加自己的照片

例如你要放一张汉堡的照片：

- 建立 `photos/germany/hamburg/` 文件夹。
- 把照片改名为 `01.jpg`，放入该文件夹。
- 可放 `cover.jpg` 作为城市的封面照片。
- `data.js` 已经有 Hamburg 示例，只需按文件名放照片即可生效。

你也可以修改 `data.js` 里的 `window.TRIPS`，每个城市是一条记录：

```javascript
{
  country: "Japan", city: "Kyoto", year: "2026",
  description: "Autumn in Kyoto",
  cover: "photos/japan/kyoto/cover.jpg",
  photos: [
    { src: "photos/japan/kyoto/01.jpg", caption: "Temple · 2026" },
    { src: "photos/japan/kyoto/02.jpg", caption: "Evening · 2026" }
  ]
}
```

编辑时请注意：每个城市记录之间用逗号分隔；新增记录放在数组 `window.TRIPS = [ ... ]` 的方括号内；**不要删掉最后的 `];`**。

在 `window.SITE_CONFIG` 里改网站名称、介绍以及是否展示联系邮箱。


## 3. 平时怎么更新

新增城市：在 `data.js` 里复制一条城市记录，改地点和照片路径，上传新照片，Commit changes。网页就会自动更新。

如果照片很多，建议上传前先压缩：照片长边大约 1600–2200 px，单张约 200 KB–1 MB，优先使用 `.jpg` / `.webp`。

GitHub Pages 有站点大小限制（约 1 GB），它适合精选旅行作品，不适合存放全部相机原片。如果有数千张原图，可以把图片改为独立的图片存储服务。

