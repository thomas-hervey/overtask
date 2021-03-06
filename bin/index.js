#! /usr/bin/env node

const path = require('path')
const directoryCommand = require('directory-command')

const directory = path.join(__dirname, 'commands')

const options = {
  commandName: 'overtask',
  leftColumnWidth: 50,
  context: {}
}

directoryCommand(directory, process.argv.slice(2), options)
