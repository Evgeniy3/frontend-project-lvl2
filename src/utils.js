import fs from 'fs';
import { resolve } from 'path';

const getPath = (file) => resolve(process.cwd(), file);
const readFile = (file) => fs.readFileSync(getPath(file), 'utf-8');

export { readFile, getPath };
