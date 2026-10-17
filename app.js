const app = document.getElementById('app');
const trips = Array.isArray(window.TRIPS) ? window.TRIPS : [];
const cfg = window.SITE_CONFIG || {};
const lightbox = document.getElementById('lightbox');
let activePhotos = [], activePhotoIndex = 0;

const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug = value => encodeURIComponent(value);
const countryHref = country => `#/country/${slug(country)}`;
const cityHref = (country, city) => `#/city/${slug(country)}/${slug(city)}`;
const photoCount = tripList => tripList.reduce((n,t) => n + (t.photos || []).length, 0);
const countries = [...new Set(trips.map(t => t.country))];

function imageBlock(src, label, extraClass='') {
  return `<div class="photo-frame no-image ${extraClass}"><div class="frame-placeholder">${esc(label)}</div>${src ? `<img loading="lazy" src="${esc(src)}" alt="${esc(label)}">` : ''}</div>`;
}
function attachImageHandlers(root) {
  root.querySelectorAll('.photo-frame img').forEach(img => {
    const frame = img.closest('.photo-frame');
    img.addEventListener('load', () => frame.classList.remove('no-image'));
    img.addEventListener('error', () => frame.classList.add('no-image'));
    if (img.complete && img.naturalWidth) frame.classList.remove('no-image');
  });
}
function renderHome() {
  const cards = countries.map(country => {
    const records = trips.filter(t => t.country === country);
    const first = records[0];
    return `<a class="country-card photo-frame" href="${countryHref(country)}">${imageBlock(first?.cover, country, 'country-art')}
      <div class="country-shade"></div><div class="country-info"><h3>${esc(country)}</h3><p>${records.length} ${records.length===1?'CITY':'CITIES'} · ${photoCount(records)} PHOTOS</p></div></a>`;
  }).join('');
  app.innerHTML = `<section class="hero"><div class="eyebrow">A personal photo archive</div><h1>${esc(cfg.title || 'My Travel Journal')}<span style="color:var(--accent)">.</span></h1>
    <p>${esc(cfg.subtitle || '')}</p><p>${esc(cfg.intro || '')}</p></section>
    <div class="section-top"><h2>Explore by country</h2><span>${countries.length} destinations</span></div>
    ${cards ? `<section class="country-grid">${cards}</section>` : '<div class="empty">请先在 data.js 中添加旅行地点。</div>'}`;
}
function renderCountry(country) {
  const records = trips.filter(t => t.country === country);
  if (!records.length) return renderMissing();
  app.innerHTML = `<section class="page-header"><a class="back-link" href="#/">← All countries</a><div class="eyebrow" style="margin-top:24px">Destination</div><h1>${esc(country)}</h1>
    <p>${records.length} cities · ${photoCount(records)} photographs</p></section>
    <div class="section-top"><h2>Explore cities</h2><span>Choose a city</span></div>
    <section class="city-grid">${records.map(t => `<a class="city-card" href="${cityHref(t.country,t.city)}">
      ${imageBlock(t.cover, t.city)}<h3>${esc(t.city)}</h3><p>${esc(t.year)} · ${esc(t.description || '')}</p></a>`).join('')}</section>`;
}
function renderCity(country, city) {
  const trip = trips.find(t => t.country === country && t.city === city);
  if (!trip) return renderMissing();
  const pictures = trip.photos || [];
  app.innerHTML = `<section class="page-header"><a class="back-link" href="${countryHref(country)}">← ${esc(country)}</a>
    <div class="eyebrow" style="margin-top:24px">${esc(country)} · ${esc(trip.year)}</div><h1>${esc(city)}</h1>
    <p>${esc(trip.description || '')}</p></section><div class="section-top"><h2>Photo gallery</h2><span>${pictures.length} photographs</span></div>
    ${pictures.length ? `<section class="album-grid">${pictures.map((p,i) => `<button class="album-item" type="button" data-photo="${i}" aria-label="查看照片 ${i+1}">
       ${imageBlock(p.src, `${city} ${i+1}`)}<span class="album-caption">${esc(p.caption || `${city} · ${i+1}`)}</span></button>`).join('')}</section>` : '<div class="empty">这里还没有照片，在 data.js 中添加即可。</div>'}`;
  app.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => openViewer(pictures, Number(button.dataset.photo))));
}
function renderMissing() { app.innerHTML='<section class="page-header"><h1>Page not found</h1><p><a href="#/">← Back to all destinations</a></p></section>'; }
function renderRoute() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(p => {try{return decodeURIComponent(p)}catch{return p}});
  if (parts[0]==='country' && parts.length===2) renderCountry(parts[1]);
  else if (parts[0]==='city' && parts.length===3) renderCity(parts[1],parts[2]);
  else renderHome();
  attachImageHandlers(app); window.scrollTo(0,0);
  document.title = `${parts.slice(1).join(' · ') || cfg.title || 'Travel Journal'} | Travel Journal`;
}
function openViewer(pictures, index) {
  activePhotos = pictures; activePhotoIndex = index;
  refreshViewer(); lightbox.showModal();
}
function refreshViewer() {
  if(!activePhotos.length) return;
  const p = activePhotos[activePhotoIndex], target=document.getElementById('viewer-visual');
  target.replaceChildren();
  if(p.src){
    const img = document.createElement('img'); img.src=p.src; img.alt=p.caption || 'Travel photo';
    img.onerror = () => {target.textContent='请将照片放入对应的 photos 文件夹'; target.classList.add('missing-photo');};
    target.appendChild(img);
  } else target.textContent='请在 data.js 中添加图片路径';
  document.getElementById('viewer-caption').textContent=`${p.caption || 'Travel photo'} · ${activePhotoIndex+1} / ${activePhotos.length}`;
}
function moveViewer(delta) { if(activePhotos.length) {activePhotoIndex=(activePhotoIndex+delta+activePhotos.length)%activePhotos.length;refreshViewer();} }
document.getElementById('viewer-close').addEventListener('click',()=>lightbox.close());
document.getElementById('viewer-prev').addEventListener('click',()=>moveViewer(-1));
document.getElementById('viewer-next').addEventListener('click',()=>moveViewer(1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox) lightbox.close()});
document.addEventListener('keydown',e=>{if(!lightbox.open)return;if(e.key==='ArrowRight')moveViewer(1);if(e.key==='ArrowLeft')moveViewer(-1)});
document.getElementById('year').textContent = new Date().getFullYear();
const contactLink = document.getElementById('contact-link');
if(cfg.email) contactLink.href=`mailto:${cfg.email}`; else contactLink.remove();
window.addEventListener('hashchange',renderRoute);renderRoute();
