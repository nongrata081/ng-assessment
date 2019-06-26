const {
  LiveReloadCompiler
} = require('@nestjs/ng-universal');

const compiler = new LiveReloadCompiler({
  projectName: 'shipping',
  tsServerConfigFile: 'apps/shipping-backend/tsconfig.json',
  watchDir: 'dist',
  serverBundlePath: 'dist/apps/shipping-backend/main.js',
  serverFilePath: 'dist/apps/server-app/main',
  mainBundlePath: 'dist/apps/shipping/main.js',
  indexFilePath: 'dist/apps/shipping/index.html',
  outputDir: 'dist',
  watchSsr: true
});
compiler.run();
