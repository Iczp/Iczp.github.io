import { useFileStats } from '../utils/fsState';

import { join } from 'path';

export default defineNitroPlugin((nitroApp) => {
  //   console.log('nitroApp:', Object.keys(nitroApp));

  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    //   if (file._id.endsWith('.md')) {
    //     file.body = file.body.replace(/react/g, 'vue')
    //   }
    // const fileInfo = nitroApp.utils.fileInfo(file._id);
    // file.fileInfo = fileInfo;
    // const fileExt = nitroApp.utils.fileExtension(file._id);
    console.log('file:', file);
    console.log('file._path:', file._path);
    file.info = useFileStats(join('../', file._id.replace(':', '/')));
    console.log('file:', file);
  });
  //   nitroApp.nuxtApp
  //   const appConfig = useAppConfig();
  //   console.log('appConfig', appConfig);
});
