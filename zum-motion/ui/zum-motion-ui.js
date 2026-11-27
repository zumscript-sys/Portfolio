const UI = {
  home: `
    <div class="site">

      <header class="header">
        <a href="/" class="brand">
          {fadeIn} ZUM<span>MOTION.</span>
        </a>

        <nav>
          <a href="/">{fadeIn}Home</a>
          <a href="https://zumscript.com/documentation/overview">{fadeIn} Documentation</a>
          <a href="https://github.com/jaczum">{fadeIn} View source code</a>
        </nav>
      </header>

      <main>
        <section class="hero">
          <span class="eyebrow">
            {fadeIn} 01 — INTRODUCING ZUM MOTION
          </span>

          <h1>{slideIn} Motion belongs in your markup.</h1>

          <p>
            {slide left} Create expressive interfaces with
            inline token animations. Describe how elements
            appear, move and respond directly inside your
            HTML templates with Zum Motion.
          </p>

          <button id="go-details">
            {zoom} Explore the system ↗
          </button>

          <div class="hero-note">
            {fadeIn} PART OF THE ZUMSCRIPT ECOSYSTEM
          </div>
        </section>

        <section class="services">
          <span class="eyebrow">
            {fadeIn} 02 — THE ANIMATION SYSTEM
          </span>

          <article>
            <span>{fadeIn} 01 / TOKEN-BASED</span>
            <h2>{slideIn} Inline Animation Tokens</h2>
            <p>
              Add animation declarations directly to your
              template content. Use tokens such as
              {fadeIn}, {slideIn} and {zoom} without
              writing separate animation configuration
              for every element.
            </p>
          </article>

          <article>
            <span>{fadeIn} 02 / SCROLL-AWARE</span>
            <h2>{slideIn} Scroll-Triggered Motion</h2>
            <p>
              Let elements reveal themselves as they enter
              the viewport. Zum Motion connects animation
              behaviour with the user's scrolling experience.
            </p>
          </article>

          <article>
            <span>{fadeIn} 03 / MODIFIERS</span>
            <h2>{slideIn} Controlled Animation</h2>
            <p>
              Use modifiers such as once to control
              animation playback. Create experiences that
              feel intentional rather than repetitive.
            </p>
          </article>
        </section>

        <section class="statement">
          <span class="eyebrow">
            {fadeIn} 03 — THE PHILOSOPHY
          </span>
          <h2>
            {blur} Don't configure every movement.
            <span>Describe it.</span>
          </h2>
          <p>
            Zum Motion brings animation closer to the
            content developers are already writing.
          </p>
        </section>

        <section class="services">
          <span class="eyebrow">
            {fadeIn} 04 — WRITTEN IN YOUR TEMPLATE
          </span>

          <article>
            <span>{fadeIn} HTML</span>
            <h2>{slideIn} Familiar Syntax</h2>
            <p>
              <code>{fadeIn}</code> and
              <code>{slideIn once}</code> express
              animation intent alongside your content.
            </p>
          </article>

          <article>
            <span>{fadeIn} LIFECYCLE</span>
            <h2>{slideIn} Lifecycle Integration</h2>
            <p>
              Connect animation observation to Zum's
              page lifecycle using observeScrollAnimations
              and resetScrollAnimations.
            </p>
          </article>

          <article>
            <span>{fadeIn} NAVIGATION</span>
            <h2>{slideIn} Navigation-Aware</h2>
            <p>
              Work with ZumActivity page navigation and
              transitions to create cohesive multi-page
              experiences.
            </p>
          </article>
        </section>

        <section class="statement">
          <span class="eyebrow">
            {fadeIn} 05 — THE ZUM APPROACH
          </span>
          <h2>
            {slideIn} Less animation code.
            <span>More meaningful motion.</span>
          </h2>
        </section>

        <footer>
          <span>{fadeIn} ZUM MOTION.</span>
          <span>{fadeIn} Inline Token Animation System</span>
          <span>{fadeIn} © 2026 ZUMSCRIPT</span>
        </footer>
      </main>
    </div>
  `,

  details: `
    <div class="site">
      <header class="header">
        <a href="/" class="brand">
          {fadeIn} ZUM<span>MOTION.</span>
        </a>

        <nav>
          <a href="/">{fadeIn} Overview</a>
          <a href="https://zumscript.com/documentation/overview">{fadeIn} Documentation</a>
        </nav>
      </header>

      <main>
        <section class="hero">
          <span class="eyebrow">
            {fadeIn} 06 — TECHNICAL DOCUMENTATION
          </span>

          <h1>{slideIn} Express motion through tokens.</h1>

          <p>
            {fadeIn} Explore the animation tokens,
            modifiers and lifecycle methods that make
            up the Zum Motion system.
          </p>

          <button id="go-back">
            {zoom} ← Back to overview
          </button>
        </section>

        <section class="services">
          <span class="eyebrow">
            {fadeIn} 01 — AVAILABLE TOKENS
          </span>

          <article>
            <span>{fadeIn} TOKEN 001</span>
            <h2>{slideIn} {fadeIn}</h2>
            <p>
              Introduces elements through an opacity
              reveal when they enter the observed viewport.
            </p>
            <code>{fadeIn} Welcome to Zum Motion</code>
          </article>

          <article>
            <span>{fadeIn} TOKEN 002</span>
            <h2>{slideIn} {slideIn}</h2>
            <p>
              Reveals elements using a sliding entrance
              effect as they become visible.
            </p>
            <code>{slideIn} Explore the system</code>
          </article>

          <article>
            <span>{fadeIn} TOKEN 003</span>
            <h2>{slideIn} {slide left}</h2>
            <p>
              Introduces content with directional
              movement from the left.
            </p>
            <code>{slide left} Animated content</code>
          </article>

          <article>
            <span>{fadeIn} TOKEN 004</span>
            <h2>{slideIn} {zoom}</h2>
            <p>
              Creates a zoom-based entrance for
              elements that need additional visual emphasis.
            </p>
            <code>{zoom} Discover more</code>
          </article>

          <article>
            <span>{fadeIn} TOKEN 005</span>
            <h2>{slideIn} {blur}</h2>
            <p>
              Uses a blur-based reveal to introduce
              content with a softer visual transition.
            </p>
            <code>{blur} A clearer experience</code>
          </article>
        </section>

        <section class="statement">
          <span class="eyebrow">
            {fadeIn} 02 — ANIMATION MODIFIERS
          </span>
          <h2>
            {slideIn} Control when motion
            <span>happens.</span>
          </h2>
          <p>
            Use supported modifiers to control
            how animation behaves during scrolling.
          </p>
        </section>

        <section class="services">
          <span class="eyebrow">
            {fadeIn} MODIFIER REFERENCE
          </span>

          <article>
            <span>{fadeIn} ONCE</span>
            <h2>{slideIn} Single Playback</h2>
            <p>
              The once modifier prevents an animation
              from replaying after its first successful
              reveal.
            </p>
            <code>{fadeIn once} Content</code>
          </article>

          <article>
            <span>{fadeIn} DEFAULT</span>
            <h2>{slideIn} Repeatable Playback</h2>
            <p>
              Without once, an element can respond
              again when it re-enters the viewport,
              according to the observer implementation.
            </p>
            <code>{slideIn} Content</code>
          </article>
        </section>

        <section class="statement">
          <span class="eyebrow">
            {fadeIn} 03 — LIFECYCLE INTEGRATION
          </span>
          <h2>
            {blur} Motion that works
            <span>with navigation.</span>
          </h2>
          <p>
            Zum Motion can be integrated into
            ZumActivity page lifecycle callbacks.
            Reinitialize scroll observation when
            pages enter or mount.
          </p>
        </section>

        <section class="services services-two">
          <article>
            <span>{fadeIn} OBSERVATION</span>
            <h2>{slideIn} observeScrollAnimations()</h2>
            <p>
              Starts observing elements marked with
              supported animation tokens.
            </p>
          </article>

          <article>
            <span>{fadeIn} RESET</span>
            <h2>{slideIn} resetScrollAnimations()</h2>
            <p>
              Resets animation states when a page
              needs to be entered and observed again.
            </p>
          </article>
        </section>

        <section class="statement">
          <span class="eyebrow">
            {fadeIn} 04 — BUILT INTO ZUMSCRIPT
          </span>
          <h2>
            {zoom} Define the motion.
            Let Zum handle the experience.
          </h2>
        </section>

        <footer>
          <span>{fadeIn} ZUM MOTION.</span>
          <span>{fadeIn} Technical Documentation</span>
          <span>{fadeIn} © 2026 ZUMSCRIPT</span>
        </footer>
      </main>
    </div>
  `
};

export default UI;
