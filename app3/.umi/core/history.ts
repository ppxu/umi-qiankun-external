// @ts-nocheck
import { createHashHistory, createMemoryHistory, createBrowserHistory } from '/Users/yangxu/Documents/workshop/plugins/node_modules/@umijs/runtime';

let options = {
  "basename": "/app3"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: any = process.env.__IS_SERVER ? null : createBrowserHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    switch(options.type){
      case 'memory':
        history = createMemoryHistory(options);
        break;
      case 'hash':
        history = createHashHistory(options);
        break;
      case 'browser':
        history = createBrowserHistory(options);
        break;
      default:
        history = createBrowserHistory(options);
    }
  }

  return history;
};

// 通常仅微前端场景需要调用这个 API
export const setCreateHistoryOptions = (newOpts: any = {}) => {
  options = { ...options, ...newOpts };
};

// 获取 history options 运行时配置
export const getCreateHistoryOptions = () => options;

export { history };
