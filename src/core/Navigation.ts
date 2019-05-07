const customElements = [];
const listeners = [];

export default {
  onChange(cb) {
    listeners.push(cb);
  },
  add(el) {
    customElements.push(el);
    listeners.forEach(l => l(customElements));
  },
  remove(el) {
    var index = customElements.indexOf(el);
    if (index !== -1) customElements.splice(index, 1);
    listeners.forEach(l => l(customElements));
  }
};
