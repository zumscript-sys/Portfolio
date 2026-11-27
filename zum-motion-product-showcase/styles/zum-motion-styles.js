const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
:host, *, *::before, *::after { box-sizing: border-box; }
:host { display:block; color:#20231f; background:#f4f2ec; font-family:'DM Sans',sans-serif; }
.site { min-height:100vh; overflow:hidden; background:#f4f2ec; }
.header { width:min(1320px,calc(100% - 72px)); min-height:82px; margin:auto; display:flex; align-items:center; justify-content:space-between; gap:24px; border-bottom:1px solid #deddd4; }
.brand { color:#20231f; text-decoration:none; font:800 18px Manrope,sans-serif; letter-spacing:-.07em; white-space:nowrap; }
.brand span { color:#a65f3e; }
.text-link { color:#a65f3e; }
main { width:min(1190px,calc(100% - 72px)); margin:auto; }
.shop-hero { min-height:620px; display:grid; grid-template-columns:1.05fr .95fr; align-items:center; gap:50px; padding:72px 0; border-bottom:1px solid #deddd4; }
.eyebrow { display:block; margin:0 0 22px; color:#a65f3e; font:500 10px 'DM Mono',monospace; letter-spacing:.13em; line-height:1.8; }
.hero-copy h1,.detail-copy h1 { margin:0; font:800 clamp(48px,7vw,86px)/.99 Manrope,sans-serif; letter-spacing:-.085em; }
h1 em,h2 em { color:#a65f3e; font-style:normal; }
.hero-copy>p,.detail-copy>p { max-width:470px; margin:27px 0 28px; color:#77766d; font-size:14px; line-height:1.9; }
.primary-link { display:inline-flex; align-items:center; gap:22px; min-height:48px; padding:0 17px; background:#252923; color:#fff; text-decoration:none; font-size:11px; font-weight:700; transition:background .2s,transform .2s; }
.primary-link:hover { background:#a65f3e; transform:translateY(-2px); }.primary-link span { color:#d5a58e; }
.hero-meta { margin-top:67px; color:#8c8a80; font:9px 'DM Mono',monospace; letter-spacing:.12em; }
.hero-art { position:relative; min-height:440px; display:grid; place-items:center; overflow:hidden; background:#e8e4d9; }
.art-orbit { position:absolute; width:340px; height:340px; border:1px solid #d1c9b9; border-radius:50%; }
.orbit-two { width:250px; height:250px; }
.hero-object { position:absolute; display:grid; place-items:center; color:#f3eee4; background:#a65f3e; box-shadow:22px 28px 50px #6d51402a; }
.object-large { width:150px; height:210px; border-radius:75px 75px 24px 24px; transform:rotate(-9deg); font:700 10px 'DM Mono',monospace; text-align:center; }
.object-small { width:90px; height:125px; right:18%; bottom:18%; border-radius:45px 45px 15px 15px; background:#737b68; transform:rotate(12deg); font:8px 'DM Mono',monospace; text-align:center; }
.art-caption { position:absolute; left:22px; bottom:20px; color:#77766d; font:9px 'DM Mono',monospace; letter-spacing:.1em; }
.intro-strip { min-height:205px; display:grid; grid-template-columns:1fr 2fr 1fr; align-items:center; gap:25px; border-bottom:1px solid #deddd4; }
.intro-strip .eyebrow { margin:0; }.intro-strip p { max-width:600px; margin:0; font:600 clamp(18px,2.4vw,27px)/1.45 Manrope,sans-serif; letter-spacing:-.04em; }
.strip-index { justify-self:end; color:#89877d; font:9px 'DM Mono',monospace; letter-spacing:.08em; }
.collection { padding:100px 0 110px; border-bottom:1px solid #deddd4; }
.section-heading { display:flex; justify-content:space-between; align-items:end; gap:24px; margin-bottom:42px; }
.section-heading h2 { margin:0; font:800 clamp(42px,6vw,66px)/1 Manrope,sans-serif; letter-spacing:-.075em; }.section-heading h2 span { color:#a65f3e; }
.section-heading>p { margin:0 0 5px; color:#858278; font-size:11px; line-height:1.8; }
.product-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:56px 24px; }
.product-card { min-width:0; }.product-visual { position:relative; display:grid; place-items:center; min-height:390px; overflow:hidden; text-decoration:none; background:#e8e4d9; }
.product-card:nth-child(2) .product-visual { background:#e2e4dc; }.product-card:nth-child(3) .product-visual { background:#e7e0d8; }.product-card:nth-child(4) .product-visual { background:#e5e4dc; }
.product-tag,.visual-number { position:absolute; z-index:2; color:#77766d; font:9px 'DM Mono',monospace; letter-spacing:.1em; }.product-tag { top:19px; left:20px; }.visual-number { right:20px; bottom:19px; }
.lamp-shade { position:absolute; top:25%; width:170px; height:95px; border-radius:90px 90px 25px 25px; background:#b56c4b; box-shadow:inset -15px -9px 0 #99583d; }
.lamp-stem { position:absolute; top:47%; width:13px; height:115px; background:#8b8c7b; }.lamp-base { position:absolute; top:72%; width:115px; height:17px; border-radius:50%; background:#747968; }
.vessel-shape { width:145px; height:210px; border-radius:48% 48% 35% 35% / 25% 25% 18% 18%; background:linear-gradient(90deg,#9b9d8a,#c1bba7 45%,#888e7b); box-shadow:inset -17px -4px 22px #59604b38,20px 28px 35px #6c6d5a22; }
.chair-back { position:absolute; top:21%; width:190px; height:165px; border-radius:90px 90px 25px 25px; background:#7e806e; transform:perspective(300px) rotateX(-7deg); }
.chair-seat { position:absolute; top:56%; width:220px; height:45px; border-radius:12px; background:#b77d5e; transform:skewY(-4deg); }
.chair-leg { position:absolute; top:65%; width:9px; height:100px; background:#5f6658; }.leg-a { left:42%; transform:rotate(4deg); }.leg-b { right:42%; transform:rotate(-4deg); }
.tray-shape { width:245px; height:145px; border:18px solid #9b765c; border-radius:35px; background:#c6a88d; transform:rotate(-13deg); box-shadow:20px 28px 35px #6c59452a; }
.product-info { display:flex; justify-content:space-between; gap:15px; align-items:start; padding-top:19px; }
.product-category { color:#a65f3e; font:9px 'DM Mono',monospace; letter-spacing:.1em; }
.product-info h3 { margin:7px 0 0; font:700 21px Manrope,sans-serif; letter-spacing:-.05em; }.product-price { padding-top:4px; color:#5d6057; font:11px 'DM Mono',monospace; white-space:nowrap; }
.product-card>p { margin:11px 0 13px; color:#858278; font-size:11px; line-height:1.7; }
.text-link { color:#292c26; text-decoration:none; font:600 10px 'DM Mono',monospace; transition:color .2s; }
.manifesto { min-height:450px; display:flex; flex-direction:column; justify-content:center; padding:90px 0; border-bottom:1px solid #deddd4; }
.manifesto h2,.detail-story h2,.detail-end h2 { margin:0; font:800 clamp(38px,6vw,70px)/1.08 Manrope,sans-serif; letter-spacing:-.075em; }
.manifesto>p { max-width:500px; margin:23px 0 24px; color:#858278; font-size:13px; line-height:1.8; }
.values { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; padding:75px 0 90px; border-bottom:1px solid #deddd4; }
.values article { padding-top:19px; border-top:1px solid #cbc8bd; }.values article>span,.detail-features article>span { color:#a65f3e; font:9px 'DM Mono',monospace; letter-spacing:.1em; }
.values h3,.detail-features h3 { margin:24px 0 10px; font:700 19px Manrope,sans-serif; letter-spacing:-.04em; }.values p,.detail-features p { max-width:300px; margin:0; color:#858278; font-size:11px; line-height:1.8; }
footer { display:flex; justify-content:space-between; gap:18px; padding:25px 0; color:#89877d; font:8px 'DM Mono',monospace; letter-spacing:.09em; }
.detail-hero { display:grid; grid-template-columns:1fr .9fr; gap:70px; padding:85px 0 100px; border-bottom:1px solid #deddd4; }
.detail-visual { position:relative; min-height:590px; display:grid; place-items:center; overflow:hidden; background:#e8e4d9; }
.detail-visual .lamp-shade { width:210px; height:120px; }.detail-visual .lamp-stem { height:150px; }.detail-visual .lamp-base { width:145px; }
.detail-copy { align-self:center; }.detail-copy h1 { font-size:clamp(50px,6vw,78px); }.detail-price { margin:25px 0 23px; font:500 18px 'DM Mono',monospace; }.detail-price small { margin-left:10px; color:#858278; font-size:9px; }
.detail-specs { margin-top:45px; border-top:1px solid #d5d1c7; }.detail-specs div { display:flex; flex-direction:column; gap:8px; padding:14px 0; border-bottom:1px solid #d5d1c7; }.detail-specs span { color:#a65f3e; font:9px 'DM Mono',monospace; }.detail-specs strong { font-size:11px; font-weight:500; }
.detail-story { display:grid; grid-template-columns:.8fr 1.2fr; gap:25px; padding:90px 0; border-bottom:1px solid #deddd4; }.detail-story .eyebrow { grid-column:1/-1; }.detail-story p { max-width:470px; align-self:end; margin:0; color:#858278; font-size:13px; line-height:1.9; }
.detail-features { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; padding:80px 0; border-bottom:1px solid #deddd4; }.detail-features article { border-top:1px solid #cbc8bd; padding-top:18px; }
.detail-end { min-height:390px; display:flex; flex-direction:column; justify-content:center; align-items:flex-start; padding:80px 0; }
.detail-end h2 { margin-bottom:28px; }
@media(max-width:800px) {
 .header,main { width:calc(100% - 42px); }.header { gap:14px; }
 .shop-hero { grid-template-columns:1fr; gap:35px; padding:65px 0; }.hero-art { min-height:370px; }.intro-strip { grid-template-columns:1fr 2fr; padding:35px 0; }.strip-index { grid-column:1/-1; justify-self:start; }
 .detail-hero { grid-template-columns:1fr; gap:45px; }.detail-visual { min-height:480px; }.detail-copy { max-width:600px; }
}
@media(max-width:560px) {
 .header,main { width:calc(100% - 34px); }.header { flex-wrap:wrap; padding:16px 0; }
 .hero-copy h1 { font-size:clamp(45px,13vw,65px); }.hero-art { min-height:320px; }.intro-strip { grid-template-columns:1fr; gap:16px; padding:32px 0; }.intro-strip p { font-size:20px; }
 .collection { padding:70px 0; }.section-heading { display:block; }.section-heading>p { margin-top:15px; }.product-grid { grid-template-columns:1fr; gap:40px; }.product-visual { min-height:340px; }
 .values,.detail-features { grid-template-columns:1fr; gap:30px; }.values article { padding-bottom:4px; }.manifesto { min-height:370px; }.manifesto h2,.detail-story h2,.detail-end h2 { font-size:43px; }
 .detail-hero { padding:55px 0 70px; }.detail-visual { min-height:370px; }.detail-story { grid-template-columns:1fr; padding:65px 0; }.detail-story p { margin-top:5px; }
 footer { flex-direction:column; gap:10px; }
}
`;
export default styles;
