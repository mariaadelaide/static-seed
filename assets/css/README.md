# Styles

The Sass/CSS styles folder in this seed is structured around the [7-1 pattern proposed by Kitty Giraudel](https://sass-guidelin.es/#architecture) on her [Sass Guidelines](https://sass-guidelin.es).

The pattern is composed of **7 specific folders** and **1 `main.scss`** joining them all together. Each folder has its own purpose/scope, **observe this when adding new styles and files.**

For reference, this approach is also heavily inspired by [Brad Frost Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).

## Folders

This seed has already all the following folders bootstrapped/created. They are displayed in the expected/strict order of inclusion on the main file (top down) for which this approach works properly.

-   **/abstracts/** — This folder should gather all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.
  
    Examples for this folder include: `_variables.scss`, `_mixins.scss`, `_functions.scss`, etc.
    
-   **/vendors/** — Folder containing all the CSS files and imports from external libraries and frameworks. If you need to tweak some styles of some vendor, check the next folder.

-   **/vendors-extensions/** —  If you have to override a section of any vendor, place in this folder files named exactly after the vendors they overwrite. For instance, `vendors-extensions/_bootstrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.

-   **/base/** —  This folder holds the base generic styles for the project. In there, you might find a stylesheet defining some standard styles for commonly used HTML elements/base HTML tags (`_base.scss`), some typographic rules (`_typography.scss`), and other files that make sense as global styles.

-   **/layout/** — Contains everything that takes part in the layout parts of the site or application, the main parts of the site (header, footer, navigation, sidebar…), the grid system, etc.

    Examples for this folder include: `_grid.scss`, `_header.scss`, `_footer.scss`, `sidebar.scss`, `_navigation.scss`, etc.
    
-   **/components/** — For smaller components, there is the `components/` folder. While `layout/` is *macro* (defining the global wireframe), `components/` is more focused on reusable components. It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. Usually a lot of files in `components/` is to be expected since the whole site/application should be mostly composed of tiny modules.

-   **/pages/** — If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page, in which case create a `_home.scss` file in `pages/` to put the specific home page overrides.
