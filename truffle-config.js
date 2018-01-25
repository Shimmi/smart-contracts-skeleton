'use strict';

require('babel-register')({
    // Need to be explicitly specified to allow importing helpers from Zeppelin Solidity written also in ES2015.
    only: '/test/'
});
require('babel-polyfill');

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        coverage: {
            host: "localhost",
            port: 8555,
            network_id: "*",
            gas: 0xfffffffffff,
            gasPrice: 0x01,
        },
    }
};
