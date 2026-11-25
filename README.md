
# Getting Started

All projects and examples in this repository use the **latest available version of Zum Framework**.

## 1. Installation with npm

For projects using modern JavaScript development tools, install Zum Framework using:

```bash
npm install zum-framework@latest
```

This installation method works with modern bundlers and development environments, including:

- Vite
- Rollup
- Webpack
- Native ES module workflows

Import Zum into your JavaScript files:

```javascript
import Zum from "zum-framework";

const app = Zum.create("div", {
  html: "Hello, Zum!"
});

document.body.append(app);
```

## 2. Native Browser Support (Import Maps)

Zum can also be used directly in the browser without a bundler or build step through native ES modules and Import Maps.

Create an `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Zum + Import Maps</title>

  <!-- Import Map -->
  <script type="importmap">
    {
      "imports": {
        "zum-framework": "https://cdn.jsdelivr.net/npm/zum-framework@latest/dist/zum.mjs"
      }
    }
  </script>
</head>

<body>
  <div id="zum-activity-root"></div>

  <!-- Application Entry -->
  <script type="module" src="./src/main.js"></script>
</body>
</html>
```

Then import Zum directly in `src/main.js`:

```javascript
import Zum from "zum-framework";

const app = Zum.create("div", {
  html: "Hello, Zum!"
});

document.body.append(app);
```

No npm installation, bundler, or mandatory build step is required for this browser-based setup.

## 3. ZumActivity Router Container

If your project uses the **ZumActivity router**, you must provide a container element in your HTML with the exact ID:

```html
<div id="zum-activity-root"></div>
```

ZumActivity automatically looks for this element and uses it as the root container for rendering routed views.

### Important

- The ID must be exactly `zum-activity-root`.
- Make sure the container exists in your HTML before the router initializes.
- Do not rename the ID unless the router's configuration explicitly supports a different container.
- This requirement applies when using ZumActivity for application routing.

Example:

```html
<body>
  <header>
    <h1>My Zum Application</h1>
  </header>

  <!-- ZumActivity renders routed views here -->
  <div id="zum-activity-root"></div>

  <script type="module" src="./src/main.js"></script>
</body>
```

## Important

- Use `zum-framework@latest` to install the latest published npm release.
- Import Maps allow browsers to resolve the `zum-framework` package directly.
- The examples in this repository may evolve as new Zum features and APIs are released.
- For complete installation instructions, API references, and official documentation, visit the [official Zum Framework website](https://zumscript.com).

---

**Continuously updated. Built for learning. Designed for developers.**

