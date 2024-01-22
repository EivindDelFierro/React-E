export function createRoot(node) {
  return {
    mount: node,
    render(component) {
      mount.setInnerHTML(component);
    },
    unmount() {
      mount = null;
    },
  };
} // root should produce an object with a render method and a unmount method
