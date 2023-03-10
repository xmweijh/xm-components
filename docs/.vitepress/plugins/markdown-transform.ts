import fs from 'fs';
import path from 'path';
import glob from 'fast-glob';
import os from 'os';

import type { Plugin } from 'vite';
import { projRoot } from '../utils/paths';

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>;

export function MarkdownTransform(): Plugin {
  return {
    name: 'md-transform-plus',
    enforce: 'pre',
    // code是md文件内容，id是绝对地址
    async transform(code, id) {
      if (!id.endsWith('.md')) return;
      const componentId = path.basename(id, '.md');
      const filePath = path
        .relative(
          path.resolve(id, '..'),
          `${path.resolve(projRoot, 'example', `${componentId}/*.vue`)}`,
        )
        .split(path.sep)
        .join('/');
      // console.log(filePath);
      // console.log(filePath.startsWith('../'))
      const append: Append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const demos = import.meta.globEager('${
            filePath.startsWith('../') ? filePath : `./${filePath}`
          }')`,
          `const path = '${filePath}'`,
        ],
      };

      // console.log(append)

      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers,
      );
    },
  };
}

const combineMarkdown = (code: string, headers: string[], footers: string[]) => {
  const fileTitle = code.indexOf('---\n\n');
  // console.log(os.EOL)
  // console.log(fileTitle)
  const frontmatterEnds = fileTitle < 0 ? 0 : fileTitle + 4;
  const firstSubheader = code.search(/\n## \w/);
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader;
  // console.log(sliceIndex)

  if (headers.length > 0)
    code = code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex);
  code += footers.join('\n');

  return `${code}\n`;
};

const combineScriptSetup = (codes: string[]) =>
  `\n\n<script setup>
${codes.join('\n')}
</script> \n
`;
