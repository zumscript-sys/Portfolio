const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

:host, *, *::before, *::after { box-sizing: border-box; }
:host {
  display: block;
  color: #17221d;
  font-family: 'DM Sans', sans-serif;
  background: #f4f5f1;
}
.site { min-height: 100vh; overflow: hidden; background: #f4f5f1; }
.header {
  width: min(1240px, calc(100% - 64px));
  min-height: 82px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid #dfe4dd;
}
.brand {
  color: #17221d;
  text-decoration: none;
  font: 800 17px Manrope, sans-serif;
  letter-spacing: -.055em;
  white-space: nowrap;
}
.brand span { color: #087b55; }
nav { display: flex; align-items: center; gap: 28px; }
nav a {
  color: #68746c;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s ease;
}
nav a:hover { color: #087b55; }
main { width: min(1120px, calc(100% - 64px)); margin: 0 auto; }
.hero {
  min-height: 590px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 90px 0;
  border-bottom: 1px solid #dfe4dd;
}
.eyebrow {
  display: block;
  margin: 0 0 24px;
  color: #087b55;
  font: 500 10px 'DM Mono', monospace;
  letter-spacing: .13em;
  line-height: 1.8;
}
.hero h1 {
  max-width: 900px;
  margin: 0;
  font: 800 clamp(48px, 8vw, 94px)/.99 Manrope, sans-serif;
  letter-spacing: -.075em;
}
.hero > p {
  max-width: 590px;
  margin: 30px 0 28px;
  color: #65716a;
  font-size: 15px;
  line-height: 1.9;
}
button {
  min-height: 50px;
  padding: 0 21px;
  border: 0;
  border-radius: 3px;
  background: #087b55;
  color: #fff;
  font: 700 12px 'DM Sans', sans-serif;
  cursor: pointer;
  transition: transform .2s ease, background .2s ease;
}
button:hover { transform: translateY(-2px); background: #066746; }
.hero-note {
  margin-top: 68px;
  color: #8a958d;
  font: 10px 'DM Mono', monospace;
  letter-spacing: .12em;
}
.services {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0 28px;
  padding: 85px 0 92px;
  border-bottom: 1px solid #dfe4dd;
}
.services > .eyebrow { grid-column: 1 / -1; margin-bottom: 35px; }
.services article {
  min-width: 0;
  min-height: 230px;
  padding: 24px 20px 20px 0;
  border-top: 1px solid #cfd8cf;
}
.services article > span {
  color: #087b55;
  font: 10px 'DM Mono', monospace;
  letter-spacing: .08em;
}
.services h2 {
  margin: 30px 0 13px;
  font: 700 clamp(18px, 2vw, 23px)/1.2 Manrope, sans-serif;
  letter-spacing: -.045em;
  overflow-wrap: anywhere;
}
.services p {
  max-width: 330px;
  margin: 0;
  color: #68746c;
  font-size: 12px;
  line-height: 1.85;
}
.services code {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 10px;
  background: #e7ece5;
  color: #087b55;
  font: 11px 'DM Mono', monospace;
  overflow-wrap: anywhere;
}
.statement {
  min-height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 85px 0;
  border-bottom: 1px solid #dfe4dd;
}
.statement h2 {
  max-width: 900px;
  margin: 0;
  font: 800 clamp(38px, 6vw, 72px)/1.04 Manrope, sans-serif;
  letter-spacing: -.07em;
}
.statement h2 span { display: block; color: #087b55; }
.statement p {
  max-width: 540px;
  margin: 24px 0 0;
  color: #68746c;
  font-size: 14px;
  line-height: 1.85;
}
.services-two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.services-two article { min-height: 210px; }
footer {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding: 27px 0;
  color: #7d8981;
  font: 9px 'DM Mono', monospace;
  letter-spacing: .09em;
}
@media (max-width: 760px) {
  .header, main { width: calc(100% - 40px); }
  .header { min-height: 72px; }
  nav { gap: 15px; }
  nav a { font-size: 10px; }
  .hero { min-height: 510px; padding: 70px 0; }
  .services { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 20px; padding: 65px 0; }
  .services > .eyebrow { grid-column: 1 / -1; }
  .statement { min-height: 330px; padding: 70px 0; }
  footer { flex-wrap: wrap; }
}
@media (max-width: 520px) {
  .header, main { width: calc(100% - 36px); }
  .header { align-items: flex-start; flex-direction: column; justify-content: center; gap: 10px; padding: 15px 0; }
  nav { width: 100%; justify-content: space-between; gap: 10px; }
  nav a { font-size: 9px; }
  .hero { min-height: 470px; }
  .hero h1 { font-size: clamp(43px, 13vw, 61px); }
  .hero > p { font-size: 13px; }
  .hero-note { margin-top: 48px; font-size: 9px; }
  .services, .services-two { grid-template-columns: 1fr; }
  .services article { min-height: auto; padding: 23px 0 30px; }
  .services h2 { margin-top: 20px; }
  .statement { min-height: 300px; }
  .statement h2 { font-size: 43px; }
  footer { flex-direction: column; gap: 12px; }
}
`;

export default styles;
