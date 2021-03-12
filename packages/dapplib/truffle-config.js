require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name rifle situate unaware install fashion equal ghost'; 
let testAccounts = [
"0x0e9b0f35f08b94a8cce10468db51d977ce1b546c46ca21d4fbbce60667d70605",
"0x3c8bafb12f5da6be36f4de19b49a260b1d970fb64f64683e7376b15ce2e9bbac",
"0xf038e7e3ec5382fac0d13070524c948be33910820c9cbb0e5d2c4cc90a6820b1",
"0xfb1d29d6027ed9d190370d1336698e933b9bd193a7667a25c347c57f9213641e",
"0x324735f0e944add20d5899e1f474f381b5c229fb9751db8d382b4ab93c089cac",
"0xee2c2ec457212442cb76d1a9f02c7ee3e663bc151fefc6c37d3eacc06213d318",
"0xd7036e52a736788f4be2c6e30eab39f9f3108c8488bd3a1f6fb1e94035be031c",
"0xb7960c167bb0914c2a62a47436ef5b7d927e60e3f3fc99b2ae694db338ca3f06",
"0x0a75c63baa076e7ba539e5b858b2c75bf81e23741ec182b21eb1c34b6053fe8b",
"0x6749c2e40f564d187096d3c80477433e312a15e417eb77a002b698c2f0144a13"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
