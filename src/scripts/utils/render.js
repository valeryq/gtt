import React from 'react';
import { render } from 'react-dom';

const element = document.getElementById('app');

export default (component) => render(React.createElement(() => component), element);
