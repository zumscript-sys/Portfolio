const UI = {
  home: `
    <div class="site shop">
      <header class="header">
        <span class="brand">{fadeIn} FORM<span>/01</span></span>
        </header>

      <main>
        <section class="shop-hero">
          <div class="hero-copy">
            <span class="eyebrow">{fadeIn} OBJECTS FOR EVERYDAY LIVING — 2026</span>
            <h1>{slideIn} Thoughtful form.<br><em>{blur} Everyday function.</em></h1>
            <p>{slide left} A considered collection of useful objects, designed with quiet details, honest materials and a little room to breathe.</p>
            <div class="hero-meta">{fadeIn} DESIGNED TO BE USED. MADE TO BE KEPT.</div>
          </div>
          <div class="hero-art" aria-label="Featured product composition">
            <div class="art-orbit orbit-one">{fadeIn}</div>
            <div class="art-orbit orbit-two">{fadeIn}</div>
            <div class="hero-object object-large">{zoom} <span>FORM<br>01</span></div>
            <div class="hero-object object-small">{slideIn} <span>STUDIO<br>OBJECT</span></div>
            <div class="art-caption">{fadeIn} THE DAILY EDIT / NO. 01</div>
          </div>
        </section>

        <section class="intro-strip" id="story">
          <span class="eyebrow">{fadeIn} 01 — THE DESIGN PRINCIPLE</span>
          <p>{slideIn} Less, but considered. We make everyday pieces that earn their place through usefulness, material and lasting design.</p>
          <span class="strip-index">{fadeIn} SCROLL TO EXPLORE ↓</span>
        </section>

        <section class="collection" id="collection">
          <div class="section-heading">
            <div>
              <span class="eyebrow">{fadeIn} 02 — SELECTED OBJECTS</span>
              <h2>{slideIn} The collection<span>.</span></h2>
            </div>
            <p>{fadeIn} A small selection of essentials.<br>Each one designed to work beautifully.</p>
          </div>

          <div class="product-grid">
            <article class="product-card featured-card">
              <div class="product-visual visual-lamp" aria-label="View Arc table light">
                <span class="product-tag">{fadeIn} BESTSELLER</span>
                <div class="lamp-shade">{zoom}</div>
                <div class="lamp-stem"></div>
                <div class="lamp-base"></div>
                <span class="visual-number">{fadeIn} 01 / 04</span>
              </div>
              <div class="product-info">
                <div><span class="product-category">{fadeIn} LIGHTING</span><h3>{slideIn} Arc table light</h3></div>
                <span class="product-price">{fadeIn} €129</span>
              </div>
              <p>{fadeIn} A warm, directional glow with a sculptural silhouette.</p>
              <div class="text-link">{fadeIn} Discover product ↗</div>
            </article>

            <article class="product-card">
              <div class="product-visual visual-vessel" aria-label="View Forma vessel">
                <span class="product-tag">{fadeIn} OBJECTS</span>
                <div class="vessel-shape">{slideIn}</div>
                <span class="visual-number">{fadeIn} 02 / 04</span>
              </div>
              <div class="product-info">
                <div><span class="product-category">{fadeIn} HOME</span><h3>{slideIn} Forma vessel</h3></div>
                <span class="product-price">{fadeIn} €58</span>
              </div>
              <p>{fadeIn} A tactile ceramic form for stems or stillness.</p>
              <div class="text-link">{fadeIn} Discover product ↗</div>
            </article>

            <article class="product-card">
              <div class="product-visual visual-chair" aria-label="View Line lounge chair">
                <span class="product-tag">{fadeIn} EDITION 02</span>
                <div class="chair-back">{zoom}</div>
                <div class="chair-seat"></div>
                <div class="chair-leg leg-a"></div><div class="chair-leg leg-b"></div>
                <span class="visual-number">{fadeIn} 03 / 04</span>
              </div>
              <div class="product-info">
                <div><span class="product-category">{fadeIn} FURNITURE</span><h3>{slideIn} Line lounge chair</h3></div>
                <span class="product-price">{fadeIn} €420</span>
              </div>
              <p>{fadeIn} A quiet profile built for a slower moment.</p>
              <div class="text-link">{fadeIn} Discover product ↗</div>
            </article>

            <article class="product-card">
              <div class="product-visual visual-tray" aria-label="View Still desk tray">
                <span class="product-tag">{fadeIn} EVERYDAY</span>
                <div class="tray-shape">{slide left}</div>
                <span class="visual-number">{fadeIn} 04 / 04</span>
              </div>
              <div class="product-info">
                <div><span class="product-category">{fadeIn} DESK</span><h3>{slideIn} Still desk tray</h3></div>
                <span class="product-price">{fadeIn} €36</span>
              </div>
              <p>{fadeIn} A simple landing place for daily essentials.</p>
              <div class="text-link">{fadeIn} Discover product ↗</div>
            </article>
          </div>
        </section>

        <section class="manifesto">
          <span class="eyebrow">{fadeIn} 03 — MADE WITH INTENTION</span>
          <h2>{blur} Good design doesn't ask for attention.<br><em>{slideIn} It rewards it.</em></h2>
          <p>{fadeIn} Thoughtful proportions. Materials that age with grace. Details that make sense every day.</p>
          <div class="text-link">{zoom} Meet the featured object ↗</div>
        </section>

        <section class="values">
          <article><span>{fadeIn} 01 / MATERIAL</span><h3>{slideIn} Honest by nature.</h3><p>{fadeIn} We favour tactile finishes and materials chosen for how they feel, wear and last.</p></article>
          <article><span>{fadeIn} 02 / PURPOSE</span><h3>{slideIn} Form follows use.</h3><p>{fadeIn} Every line has a reason. Every object begins with the way it fits into real life.</p></article>
          <article><span>{fadeIn} 03 / LONGEVITY</span><h3>{slideIn} Made to remain.</h3><p>{fadeIn} Beyond the moment, we design for everyday use and years of familiarity.</p></article>
        </section>

        <footer>
          <span>{fadeIn} FORM/01 — OBJECTS FOR EVERYDAY LIVING</span>
          <span>{fadeIn} AN EXPERIMENT IN MOTION WITH ZUMSCRIPT</span>
          <span>{fadeIn} © 2026</span>
        </footer>
      </main>
    </div>
  `
};

export default UI;
