import { dirname } from 'path';
import { fileURLToPath } from 'url';

// `import.meta.url` resolves to the nearest package.json which for ES modules
// is in `lib/esm` for compatibility reasons. Thus we go up three levels.
export const puppeteerDirname = dirname(
  dirname(dirname(dirname(fileURLToPath(import.meta.url))))
);
