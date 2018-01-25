# Skeleton for Ethereum Smart Contracts
_Jump start your Smart Contracts development with no configuration._

This skeleton repository gives you a good foundation for building or starting with the development of Smart contracts for Ethereum blockchain written in Solidity language.

## Quickstart
1. Clone this repo.
2. Run `npm install`.

That's all!

## What’s Included?

* **[Truffle framework](http://truffleframework.com/)**: The most popular development framework for Ethereum.
* **[OpenZeppelin](https://openzeppelin.org/)**: Framework of reusable and secure smart contracts in the Solidity language.
* **[Solium](https://github.com/duaraghav8/Solium)**: Linter to identify and fix style & security issues in Solidity.
* **[Solidity Coverage](https://github.com/sc-forks/solidity-coverage)**: Code coverage for Solidity testing.
* **[Babel](https://babeljs.io/)**: Compiler for next-generation Javascript.
* **[Mocha](http://mochajs.org/)**: Javascript testing framework.
* **[Chai](http://chaijs.com/)**: Javascript BDD/TDD assertion library.

## Requirements
The only (base) requirement is **Node with NPX**.

_**Note**_: If you are developing on Windows the "Bash on Linux on Windows" is highly recommended for running code coverage. If you want to run it directly in Powershell/cmd, follow [this guide](https://github.com/sc-forks/solidity-coverage/blob/master/docs/faq.md#running-on-windows) (Not recommended).

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is bundled with npm 5.2+ and higher.)_

## Usage

### Testing
Tests are located in `test/` folder and are mostly written in javascript. This skeleton gives you preconfigured support for ES2015+ features. Thanks to the new `import`, `async`/`await` and arrow functions the tests are much cleaner and simpler.

See the [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/) documentation for writing tests.

```bash
npm test
```

### Compiling
The contracts are compiled automatically when running the commands (e.g. `npm test`, `npm run migrate`, ..). Yet it can be handy to run the compilation manually as then the files are persisted and not deleted on command exit.
 
Running the compile method will generate a `build/` folder with JSON files containing the contracts bytecode, source map, [abi](https://solidity.readthedocs.io/en/develop/abi-spec.html) and more. This can speed up running the tests as it will not recompile them on every run (unless changing the contracts code).
```bash
npm run compile
```

### Generating code coverage
Running the code coverage command will generate a `coverage/` folder. Open the `index.html` to view the results.

```bash
npm run coverage
```

### Linting the code
Linting will statically analyze your code to identify style & security issues.

```bash
npm run lint
```

### Migrating to the network
To publish and interact with your contracts, you will need to "migrate" them.

This changes and may need a bit of configuration depending to which network and/or RPC you are deploying.

Please see Truffle's [Ganache](http://truffleframework.com/ganache/) or Geth's `geth --dev` [command](https://github.com/ethereumproject/go-ethereum/wiki/Command-Line-Options) for running personal developer blockchain.

```bash
npm run migrate
```
