import { readFileSync } from 'fs';
import { resolve } from 'path';

const getFormat = (file) => file.split('.')[1];

const getPath = (file) => resolve(process.cwd(), file);

const readFile = (file) => readFileSync(getPath(file), 'utf-8');

export { readFile, getFormat };
