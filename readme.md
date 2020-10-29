# Examples of mobile menus

## Menus

- [Simple mobile menu](https://front-end-materials.github.io/menus/js-mobile-menu/)
- [Animated top-down mobile menu](https://front-end-materials.github.io/menus/js-mobile-menu-anim/)
- [Animated side slide-in mobile menu (accessible)](https://front-end-materials.github.io/menus/js-mobile-menu-anim-side/)—see [The trigram for heaven](https://www.htmhell.dev/11-the-trigram-for-heaven/) and [the Hamburger Menu](https://justmarkup.com/articles/2019-12-04-hamburger-menu/)
- [responsive tabs](https://front-end-materials.github.io/menus/js-tabs/)

## Note:

1. the CSS `display` property cannot be animated i.e. you can't animate a transition from `display: none;` to `display: flex;`.
2. for smooth animations, the following properties in final "composite" browser rendering layer are best: `transform: translate…` or `scale…` or `rotate…`, as well as `opacity`.
3. for side slide in from the right side you need to use `position: fixed` rather than `position: absolute` due to **overflow** issues.

## References

- [Smooth as Butter: Achieving 60 FPS Animations with CSS3](https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108)—José Rosário, 2016
- [When to not use `will-change`](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
