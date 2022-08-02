const Web3 = require("web3");
const { readFileSync }  = require("fs") ;
const BigNumber = require('bignumber.js')


const bundlr = async () => {
    try{
        const Bundlr = require('@bundlr-network/client');
        const privateKey = JSON.parse(readFileSync("wallet.json").toString()).private;
        const bundlr = new Bundlr.default("https://node1.bundlr.network", "MATIC", privateKey);
        console.log(bundlr.address)
    }catch(e){
        console.log(e)
    }
}

const nodebundlr = async () => {
    try{
        //Bug: Error: Unknown/Unsupported currency MATIC
        //Reason when usign uppercase MATIC

        //Doc error: WebBundlr not bringin .address

        //Doc error: not https in nodes.

        const {NodeBundlr} = require('@bundlr-network/client/build/node');
        const privateKey = JSON.parse(readFileSync("wallet.json").toString()).private;
        const bundlr = new NodeBundlr("https://node1.bundlr.network", "MATIC", privateKey);
        console.log(bundlr.address) 
    }catch(e){
        console.log(e)
    }
    
}
    
const webbundlr = async () => {
    try{

        const INFURA_ID = '22be221bc87344b2b5abf0685d5ad493'
        const provider = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`))
        
        //Wallet from
        const privateKey = JSON.parse(readFileSync("wallet.json").toString()).private;
        const signer = provider.eth.accounts.privateKeyToAccount(privateKey)
        console.log('ja',provider._ready())
        /*
        const {WebBundlr} = require('@bundlr-network/client/build/web');
        const bundlr = new WebBundlr("https://node1.bundlr.network", "matic", signer);
       
        console.log(bundlr)
        let response = await bundlr.fund(parseInput(bundlr,0.00001))*/
       
    }catch(e){
        console.log(e)
    }
}


const main = async () => {
    //await bundlr()

    //await nodebundlr()

    await webbundlr()
}
main()
