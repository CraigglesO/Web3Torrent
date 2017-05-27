import React from 'react';
import { render } from 'react-dom';
import { setupBonds } from 'oo7-parity';

import { App } from './Components/App.jsx'

// We use and dirty up the global namespace here.
// parity.bonds = setupBonds(parity.api);

render(<App/>, document.getElementById('app'));
