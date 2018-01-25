'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

const Token = artifacts.require('./SkeletonToken.sol');

contract('GifToken', function ([owner]) {

    chai.use(chaiAsPromised);
    const assert = chai.assert;

    let token;

    beforeEach(async function () {
        token = await Token.new();
    });

    describe('construction', async () => {
        it('should return correct name after construction', async () => {
            assert.equal(await token.name.call(), 'Skeleton Token');
        });

        it('should return correct symbol after construction', async () => {
            assert.equal(await token.symbol.call(), 'SKT');
        });

        it('should return correct decimal points after construction', async () => {
            assert.equal(await token.decimals.call(), 18);
        });
    });

});
