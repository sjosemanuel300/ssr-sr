import React from 'react';
import Loadable from 'react-loadable'

import store from './store/store';


var json_lang = store.getState().clientReducer.json_lang;



function Loading() {
  	return (
		<div className="page-loader">
			<div className="preloader pls-white">
				<svg className="pl-circular" viewBox="25 25 50 50">
					<circle className="plc-path" cx={50} cy={50} r={20} />
				</svg>
				<p>{json_lang.common.waiting_message}</p>
			</div>
		</div>
	);
}

const TableUsersViews = Loadable({
	loader: () => import('./views/Users/TableUsersViews.jsx'),
	loading: Loading,
});

const routes = [
	{ path: '/', exact: true, name: json_lang.routes.default_layout, component: TableUsersViews },
];

export default routes;
