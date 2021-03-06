
const fse          = require('fs-extra'),
      parseArgs    = require('minimist'),
      logBox       = require('log-box'),
      { execSync } = require('child_process');

const args = parseArgs(process.argv.slice(2), {
  alias: {
    s: 'scripts',
    m: 'modules'
  }
});

const pathModules       = `node_modules`;


logBox(`Cleaning...`, {
  margin: {
    bottom: 0
  }
});

let cmd = ``;

if (args.scripts) {
  console.log(`Enabling scripts...`);
  cmd += `chmod +x ./scripts/*;`;
  console.log(``);
}

if (args.modules) {
  console.log(`Reinstalling modules...\n`);
  fse.removeSync(`${pathModules}`);
  cmd += `npm i;`
  console.log(``);
}

if (cmd && cmd.length) {
  execSync(cmd, { stdio: 'inherit' });
}

console.log(`Complete!\n`);
