import { runApp, IAppConfig } from 'ice';
import { getBasename } from '@ice/stark-app';
const appConfig: IAppConfig = {
  router: {
    type: 'browser',
    basename: getBasename(),
  },
};

runApp(appConfig);
