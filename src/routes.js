import React from 'react';
const TableUsersViews = React.lazy(() => import('./views/Users/TableUsersViews'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: TableUsersViews },
];

export default routes;
