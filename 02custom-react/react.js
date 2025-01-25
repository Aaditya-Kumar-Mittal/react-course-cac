const root = document.getElementById('root');

// React tries to create a tree 
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to go to Google'
};

function customRender(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;

  /*
  // Correcting the typo: using innerHTML instead of innertHTML
  domElement.innerHTML = element.children;

  // Set attributes
  domElement.setAttribute('href', element.props.href);
  domElement.setAttribute('target', element.props.target);

  // Append the element to the container
  container.appendChild(domElement);
  */

  for (const prop in element.props) {
    if (prop === 'children') {
      continue;
    } else {
      domElement.setAttribute(prop, element.props[prop]);
    }
  }

  container.appendChild(domElement);
}

// An Element to inject into the DOM
customRender(reactElement, root);
