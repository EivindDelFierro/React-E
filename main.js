function createRoot(node) {
  return {
    mount: node,
    mounted: false,
    render(component) {
      this.mount.innerHTML = component;
    },
    unmount() {
      if (this.mounted) {
        this.mount.innerHTML = "";
        this.mount = null;
      } else {
        console.log("Node is not mounted");
      }
    },
  };
}

function HelloWorld() {
  return `
    <div id="HelloWorld">
      <p>Hello World!</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const node = document.querySelector("#app"); // selecting the anchor point
  root = createRoot(node); // creating a root object that will allow us to render our components
  root.render(HelloWorld()); // rendering a basic component output
});
