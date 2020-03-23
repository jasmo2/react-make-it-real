/**
 * Get scroll position.
 * cross-browser compatible
 *
 * Taken from: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
 */
export function getScrollPosition() {
  if (typeof window === 'undefined') {
    return { x: 0, y: 0 }
  }
  const supportPageOffset = window.pageXOffset !== undefined
  const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat'

  const x = supportPageOffset
    ? window.pageXOffset
    : isCSS1Compat
    ? document.documentElement.scrollLeft
    : document.body.scrollLeft
  const y = supportPageOffset
    ? window.pageYOffset
    : isCSS1Compat
    ? document.documentElement.scrollTop
    : document.body.scrollTop

  return { x, y }
}
