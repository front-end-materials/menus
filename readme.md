# Examples of mobile menus

Code above. Demos here:

- [CSS Compact Slideout Menu](https://front-end-materials.github.io/menus/compact-slideout-menu/)
- [CSS-only hamburger menu](https://front-end-materials.github.io/menus/css-hamburger/)
- [Simple top mobile menu](https://front-end-materials.github.io/menus/js-mobile-menu/)
- [Animated top slide-down mobile menu](https://front-end-materials.github.io/menus/js-mobile-menu-anim/)
- [Animated side slide-in mobile menu](https://front-end-materials.github.io/menus/js-mobile-menu-anim-side)
- [Animated bottom slide-up mobile menu (accessible)](https://front-end-materials.github.io/menus/js-mobile-menu-anim-bottom)

## Notes:

1. the CSS `display` property **cannot be animated** i.e. you can't animate a transition from `display: none;` to `display: flex;` or `display: block;`.
2. for smooth animations, the following properties in final "composite" browser rendering layer are best: `transform: translate…` or `scale…` or `rotate…`, as well as `opacity`.
3. for side slide in from the right side you *may* need to use `position: fixed` instead of `position: absolute` due to possible **overflow** issues (where an unwanted scrollbar appears).

## References

- [Smooth as Butter: Achieving 60 FPS Animations with CSS3](https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108)—José Rosário, 2016
- [When to not use `will-change`](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)