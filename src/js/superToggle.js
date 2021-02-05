export default function superToggle(element, ...cls) {
  cls.map(cl => element.classList.toggle(cl));
}
