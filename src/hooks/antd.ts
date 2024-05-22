import { extractStyle } from 'ant-design-vue/lib/_util/static-style-extract';
import * as fs from 'fs-extra';

export const generateCss = async () => {
  const antdCssPath = './src/public/css/antd.min.css';

  if (fs.existsSync(antdCssPath)) {
    console.warn('antd.min.css already exists');  
    return;
  }

  const cssText = extractStyle();
  await fs.outputFile(antdCssPath, cssText, 'utf8');
  console.log('generated css:', antdCssPath);
};
