export function overflowHidden(overflow: 'hidden' | 'auto') {
    document.querySelector('body')?.style.setProperty('overflow', overflow);
}
