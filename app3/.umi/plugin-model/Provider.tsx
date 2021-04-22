// @ts-nocheck
import React from 'react';
import qiankunModel from '@@/plugin-qiankun/qiankunModel';

// @ts-ignore
import Dispatcher from '/Users/yangxu/Documents/workshop/plugins/packages/plugin-model/lib/helpers/dispatcher';
// @ts-ignore
import Executor from '/Users/yangxu/Documents/workshop/plugins/packages/plugin-model/lib/helpers/executor';
// @ts-ignore
import { UmiContext } from '/Users/yangxu/Documents/workshop/plugins/packages/plugin-model/lib/helpers/constant';

export const models = { '@@qiankunStateFromMaster': qiankunModel,  };

export type Model<T extends keyof typeof models> = {
  [key in keyof typeof models]: ReturnType<typeof models[T]>;
};

export type Models<T extends keyof typeof models> = Model<T>[T]

const dispatcher = new Dispatcher!();
const Exe = Executor!;

export default ({ children }: { children: React.ReactNode }) => {

  return (
    <UmiContext.Provider value={dispatcher}>
      {
        Object.entries(models).map(pair => (
          <Exe key={pair[0]} namespace={pair[0]} hook={pair[1] as any} onUpdate={(val: any) => {
            const [ns] = pair as [keyof typeof models, any];
            dispatcher.data[ns] = val;
            dispatcher.update(ns);
          }} />
        ))
      }
      {children}
    </UmiContext.Provider>
  )
}
