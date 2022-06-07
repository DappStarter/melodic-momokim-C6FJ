require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note remember unit hunt forget forget giant'; 
let testAccounts = [
"0x32ed2c89c93069f909513e640c2df65fe7fdc65e42a89c1fa7c9598adb804acd",
"0x3d1a578a971ba59a37ed998c0e013b578577d2a583176947273f46fff2d563ae",
"0x7d97f9ad5a59d7963fe923c3a5290a4df1211dd7b3a45729811b2bcee64ea932",
"0x5bb8427c0ce37a361af42389425824b3b34d2b9dc0ae0ef3d3c92d60ba0f1711",
"0xf5bcea61e862f90f499422f2cc0393cb6142d8a81d4141d876a004ed2cddd21a",
"0x284db3eec1e365aaeac34f3ef437096f077367e32f51571df8f32428e7fcaf7b",
"0x8fcd9e4bcbae128429e42633e9b0b9aa7fdc60b5e9a3c72c7802233715299460",
"0xb2e3b991ceaaaeb705ec786d427d5bd30495b533f762126f94413f157760a683",
"0x84e0bc5841f7b3b8125a2256c6c8ff25f13ba8f76b4c871771a32a9a65e3dcc1",
"0x66c9df552f2e2b53e10672db21ae196bdc3667d89a5e3241010ea33c5c8a7eae"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

