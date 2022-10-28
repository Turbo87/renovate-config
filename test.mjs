import { globbySync } from 'globby';
import { execa } from 'execa';

let paths = globbySync(['**/*.json', '!package.json'], {
  gitignore: true,
});

for (let path of paths) {
  test(path, async () => {
    await execa('renovate-config-validator', [path]);
  })
}
