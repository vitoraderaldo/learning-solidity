const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

// Creates web3 instance that will talk with the Ganhace Network (Etherum Networkin running locally)
const web3 = new Web3(ganache.provider())

// Import the compiled Solidity Code
const {interface, bytecode} = require('../compile')

describe('Inbox', () => {

    const initialString = 'Hi there!'
    let accounts
    let contract
    let deployedContract

    beforeEach(async () => {
        // Get a list of all accounts  
        accounts = await web3.eth.getAccounts()
        // Defines the contract interface to web3
        contract = new web3.eth.Contract(JSON.parse(interface))
        // Creates the transaction data that represents the contract   
        const transaction = await contract.deploy({data: bytecode, arguments: [initialString]})
        // Sends the transaction to the Etherum Network
        deployedContract = await transaction.send({
            from: accounts[0], 
            gas: '1000000'
        })
    })

    it('Contract must have been deployed', () => {
        assert.ok(deployedContract.options.address)
    })

    it('Contract contains the default message', async () => {
        const message = await deployedContract.methods.message().call()
        assert.strictEqual(message, initialString)
    })

    it('Must change the default message', async () => {
        const newMessage = 'here is the new message'
        const sender = {
            from: accounts[0]
        }
        await deployedContract.methods.setMessage(newMessage).send(sender)
        const message = await deployedContract.methods.message().call()
        assert.strictEqual(message, newMessage)
    })
    
})