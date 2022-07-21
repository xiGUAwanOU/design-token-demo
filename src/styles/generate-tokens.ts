import * as fs from 'fs';
import generateUtilClass from './generate-util-class';
import { TokenDefinitions, TokenOutputGenerator } from './token.types';

function printUsage(errorMessage = ''): void {
  const print = errorMessage ? console.error : console.log;

  print('');

  if (errorMessage) {
    print(`Error: ${errorMessage}`);
    print('');
  }

  print('Usage: npx ts-node src/styles/generate-tokens.ts <token-file> <output-format>');
  print('');

  print('Parameters:');
  print('    token-file           a path to a JSON file where all the tokens are defined');
  print('    output-format        can be one of "util-class", "scss-var" or "scss-mixin"');
  print('');
}

const outputGenerators: Record<string, TokenOutputGenerator> = {
  'util-class': generateUtilClass,
};

async function main(argv: string[]): Promise<number> {
  if (argv.length !== 2) {
    printUsage('Incorrect number of parameters!');
    return -1;
  }

  const [tokenFilePath, outputFormat] = argv;

  if (!fs.existsSync(tokenFilePath)) {
    printUsage('Cannot read token file!');
    return -1;
  }

  if (!Object.keys(outputGenerators).includes(outputFormat)) {
    printUsage('Unknown output format!');
  }

  const tokenFileContent = fs.readFileSync(tokenFilePath, { encoding: 'utf-8' });
  const tokenDefinitions: TokenDefinitions = JSON.parse(tokenFileContent);

  const generateOutput = outputGenerators[outputFormat as keyof typeof outputGenerators];

  Object.entries(tokenDefinitions)
    .forEach(([tokenName, tokenDefinition]) => {
      console.log(generateOutput(tokenName, tokenDefinition));
    });

  return 0;
}

main(process.argv.slice(2))
  .then(process.exit);
