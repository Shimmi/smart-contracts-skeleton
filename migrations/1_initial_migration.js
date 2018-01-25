'use strict';

const Migrations = artifacts.require("./truffle/Migrations.sol");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};
