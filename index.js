#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';

import * as c from './choices.js';
import * as t from './time.js';

let playerName;

async function welcome() {
    console.clear();
    const title = 'Encounter';
    figlet(title, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
 
    await t.sleep(10);
    await t.wr(` ${chalk.gray('created by Brian Mai')}\n ${chalk.gray('press ^C to quit')}\n\n`);
    // await sleep(4000);
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

await welcome() // top level await req. node 14+
await askName()


await c.choice1()