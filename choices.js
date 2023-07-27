#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';

import * as t from './time.js';

export async function choice1() {
    const answers = await inquirer.prompt({
        name: 'choice_1',
        type: 'list',
        message: 'What do you do?\n',
        choices: [
            'A',
            'B',
            'C', 
        ],
    });
    return handleChoice1(answers.choice_1)
}

export async function handleChoice1(choice) {
    await t.sleep(1000);
    if (choice == 'A') {
        t.wr(`${chalk.cyan('You have chosen A')}`)
    }
    else if (choice == 'B') {
        t.wr(`${chalk.cyan('You have chosen B')}`)
    }
    else if (choice == 'C') {
        t.wr(`${chalk.cyan('You have chosen C')}`)
    }
    await t.sleep(100)
}