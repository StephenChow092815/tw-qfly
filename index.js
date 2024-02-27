#!/usr/bin/env node

var Command = require('commander');
var tweet = require('./lib/tweet.js');
var program = new Command.Command();

program
  .name('tw-qfly')
  .description('tw-qfly')
  .version('1.0.0');

program
  .command('tweet')
  .action(() => {
    tweet.getTweet()
      .then(val => {
        console.log(val);
      })
  })
program
  .command('retweet')
  .argument('<id>', 'retweet_id')
  .action((id) => {
    tweet.retweet(id)

  })
program
  .command('follow')
  .argument('<name>', 'follow_name')
  .action((name) => {
    tweet.follow(name)

  })
program.parse();