// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/yangxu/Documents/workshop/plugins/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('/Users/yangxu/Documents/workshop/plugins/packages/plugin-qiankun/examples/app3/pages/index.js').default
  },
  {
    "path": "/:abc",
    "component": require('/Users/yangxu/Documents/workshop/plugins/packages/plugin-qiankun/examples/app3/pages/$abc.js').default,
    "exact": true
  },
  {
    "path": "/users",
    "component": require('/Users/yangxu/Documents/workshop/plugins/packages/plugin-qiankun/examples/app3/pages/user/index.js').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
