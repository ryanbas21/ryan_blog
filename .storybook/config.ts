import { configure } from '@storybook/react';
import './addons';
import { action } from '@storybook/addon-actions';
import 'semantic-ui-css/semantic.min.css';
import requireContext from 'require-context.macro';

// const req = require.context('../stories', true, /\.stories\.js$/); <-- replaced
const req = requireContext('../src', true, /.story.tsx$/);
function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
	enqueue: () => {},
	hovering: () => {}
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
	action('NavigateTo:')(pathname);
};
configure(loadStories, module);
