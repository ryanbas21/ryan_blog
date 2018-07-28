
import React from 'react';
import { Router } from 'react-router-dom';

export const replaceRouterComponent = ({ history }) => (
	<Router history={history}>{children}</Router>
);