
const files = [
  '.editorconfig',
  '.gitignore',
  '.npmrc',
  '.stylelintrc',
  '.travis.yml',
  '.yarnrc',
  'CHANGELOG.md',
  'CODE_OF_CONDUCT.md',
  'LICENSE.md',
  'package.json',
  'postcss.config.js',
  'README.md',
  'src/assets/AnimatedSkeleton.svg',
  'src/assets/icons/apple-touch-icon.png',
  'src/assets/icons/browserconfig.xml',
  'src/assets/icons/favicon-32x32.png',
  'src/assets/icons/mstile-150x150.png',
  'src/assets/icons/polymer-skeleton-192x192.png',
  'src/assets/icons/polymer-skeleton-384x384.png',
  'src/assets/icons/polymer-skeleton-48x48.png',
  'src/assets/icons/polymer-skeleton-96x96.png',
  'src/assets/icons/safari-pinned-tab.svg',
  'src/assets/logo.svg',
  'src/components/containers/sk-app/index.js',
  'src/components/containers/sk-app/style.pcss',
  'src/components/containers/sk-app/template.html',
  'src/components/dumbs/sk-button/index.js',
  'src/components/dumbs/sk-button/style.pcss',
  'src/components/dumbs/sk-button/template.html',
  'src/global-style/basics/links.pcss',
  'src/global-style/basics/media-queries.pcss',
  'src/global-style/basics/typography.pcss',
  'src/global-style/keyframes/fadeIn.pcss',
  'src/index.html',
  'src/index.js',
  'src/manifest.json',
  'test/suites/sk-app.html',
  'wct.conf.js',
  'webpack.config.js'
];

module.exports = isWin => isWin ? files.map(file => file.replace(/\//g, '\\')) : files;
