import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'node:process';

const getFormat = (file) => file.split('.')[1];

const getPath = (file) => resolve(cwd(), file);

const readFile = (file) => readFileSync(getPath(file), 'utf-8');

export { readFile, getFormat };
