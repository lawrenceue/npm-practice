console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();


// account.name Facebook
// account.username user12@!
// account.password password123

function createAccount(account){
    var accounts = storage.getItemSync('accounts');
    // if accounts is undefined, use typeOf
    //   set accounts = to an empty array
    
    // call push to push on new account
  
    // return account
}

function getAccount(accountName){
    // fetch the account using getItemSync()

    // var accounts use getItemSync
    // use forEach to iterate over array and return matching account
    // else undefined
}
