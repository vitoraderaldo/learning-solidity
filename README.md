### Folder Structure  

| Path | Description |
| ------ | ------ |
|contracts|The Solidity code that has the contract's rules| 
|test|JavaScript code that will test the YYYYY| 
|compile.js|JavaScript responsible for compiling the Solidity code. The compilation spits out the ByteCode (runs in the blockchain) and the ABI (an interface that will be necessary to iterate with the Etherum Network)|
|deploy.js|JavaScript responsible for deploying YYYYYY|


### Dependencies

| Dependency | Description |
| ------ | ------ |
|solc|Responsible for compiling the solidity code| 
|mocha|JavaScript test framework| 
|ganache-cli|Etherum local test network. Besides creating the network, it also creates testing accounts|
|web3|Responsible for interacting with any Etherum network|


### Testing Architecture
![Text Flow](https://user-images.githubusercontent.com/60303480/126044218-1912da8c-5b0d-4462-8b8c-de24178951e2.png)