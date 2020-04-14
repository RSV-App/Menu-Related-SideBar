import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu.jsx';
import path from 'path';

ReactDOM.render(<Menu id={path.basename(window.document.URL)} />, document.getElementById('menuAndRelated'));