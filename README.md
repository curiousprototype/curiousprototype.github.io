# 我的旅行摄影网页：GitHub Pages 模板

这是一个不需要服务器、不需要付费域名、不需要安装 Jekyll 的静态网页模板。

支持：**国家 → 城市 → 照片** 三级浏览、点击放大、左右切换、手机显示。

## 1. 先在电脑预览

双击 `index.html` 即可直接打开（也可以用 VS Code Live Server）。示例照片路径还没有真实图片，所以会显示渐变色占位背景，这是正常的。

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

## 3. 放到 GitHub Pages，获得网站链接

1. 登录 https://github.com ，点击 New repository。
2. 仓库名称必须是 `你的用户名.github.io`。例如 GitHub 用户名是 `myname`，就叫 `myname.github.io`。
3. 设为 Public，Create repository。
4. 点击 `Add file` → `Upload files`，把这个模板**内部**的 `index.html`、`style.css`、`app.js`、`data.js` 和 `photos` 文件夹内容上传到仓库根目录。也可以使用 GitHub Desktop 上传整个项目。
5. 打开仓库 `Settings` → `Pages` → `Build and deployment`。Source 选 `Deploy from a branch`，Branch 选 `main`、`/(root)`，保存。
6. 打开 `https://你的用户名.github.io/`，通常几分钟内即可访问。

**重要：** 不要把整个 `travel-gallery-starter` 文件夹嵌套放在仓库里。`index.html` 必须位于仓库根目录。

## 4. 平时怎么更新

新增城市：在 `data.js` 里复制一条城市记录，改地点和照片路径，上传新照片，Commit changes。网页就会自动更新。

如果照片很多，建议上传前先压缩：照片长边大约 1600–2200 px，单张约 200 KB–1 MB，优先使用 `.jpg` / `.webp`。

GitHub Pages 有站点大小限制（约 1 GB），它适合精选旅行作品，不适合存放全部相机原片。如果有数千张原图，可以把图片改为独立的图片存储服务。

## 5. 隐私提醒

公开 GitHub Pages 可以被任何知道链接的人访问，也可能被搜索引擎收录。上传前删除不想公开的个人位置、照片 EXIF/GPS 元数据、证件和私人照片。

这个模板是独立编写的学习版，与参考网站 Weiyi1029.github.io 无关，没有包含他人的照片或源代码。
