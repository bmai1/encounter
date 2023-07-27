#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import { once } from 'events';
import { createInterface } from 'readline';
import { stdin } from 'process';

import * as c from './choices.js';
import * as t from './text.js';

let playerName;



async function welcome() {
    console.clear();
    const title = 'Encounter';
    figlet(title, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
    await t.sleep(10);
    await t.wr(` ${chalk.gray('created by Brian Mai')}\n ${chalk.gray('press ^C to quit')}\n\n`);
}

async function askName() {
    const answers = await inquirer.prompt({
      name: 'player_name',
      type: 'input',
      message: 'Please enter your name.',
      default() {
        return 'Player';
      },
    });
    playerName = answers.player_name;
}

async function waitForKeypress() {
    const rl = createInterface({
      input: stdin,
      output: process.stdout
    });
  
    process.stdin.setRawMode(true);
    process.stdin.resume();
  
    try {
      const [keyPress] = await once(stdin, 'keypress');
      return keyPress;
    } finally {
      rl.close();
      process.stdin.setRawMode(false);
    }
}

await welcome() // top level await req. node 14+
await askName()
await t.wr(
    `${chalk.white(t.textWrap(`
    As her eyes fell upon the moonlit stairwell at the end of the hallway, Naomi couldn’t help but notice the shred of apprehension lurking in the back of her mind, prowling for an opportunity to fully spread its wings.`))}
`);

await t.wr(
    `${chalk.cyan.italic('Now is not the right time to be in doubt,')} ${chalk.white('she chided herself.\n\n')}`
)

console.log('Press any key to continue\n');
await waitForKeypress();

await t.wr(
    `${chalk.white(t.textWrap(`One foot came after the next,  ${chalk.red.italic('plink, plink, plink,')} and she began her careful ascent up the smooth marble steps. It was uncanny; a beautiful sound resonated out with every stride, yet the echo was inevitably doomed to be lost in the abyss. Adorning the walls, Naomi noticed, were countless picture frames containing sentimental fragments of memories belonging to the mansion’s past residents. The smiling portraits felt oddly disconnected and unfeeling, as if their owners were challenging her to call out their collective absence of human emotion. \n\n
    `)
    )}`
)

await c.choice1()