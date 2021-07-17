const path = require('path')
const fs = require('fs')
const solc = require('solc')

// Read the Solidity Code
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const sourceCode = fs.readFileSync(inboxPath, 'utf8')

// Compile the Solidity Code
const numberOfContracts = 1
const compiledFile = solc.compile(sourceCode, numberOfContracts)

module.exports = compiledFile.contracts[':Inbox']