const crypto = require('crypto'); //native to node
const bcrypt = require('bcrypt'); //npm install
const { sequelize } = require('./db');
const { User } = require('./models');

const SALT_COUNT = 10; //defined by us

const run = async () => {
  try {

    /* *************** SETUP *************** */
    await sequelize.sync({force: true});
    const userJohn = {username: 'johnDoe', password: 'test123'};
    const userJohn2 = {username: 'johnDoe2', password: 'test123'};

    console.log("Let's start hashing some passwords!");

    /* *************** START DEMO *************** */
    
    //hashing without salting - see what this looks like in our db [crypto]
    // const hashedNoSalt = await crypto.createHash('sha256')
    //                     //update will help identify exactly what data you want to hash
    //                     .update(userJohn.password)
    //                     //further tell crypto how many characters I want to use
    //                     .digest('base64');

    // const hashedNoSalt2 = await crypto.createHash('sha256')
    //                     //update will help identify exactly what data you want to hash
    //                     .update(userJohn2.password)
    //                     //further tell crypto how many characters I want to use
    //                     .digest('base64');                        

    // console.log('USERJOHN NO SALT =', hashedNoSalt)
    // console.log('USERJOHN2 NO SALT =', hashedNoSalt2)

    //hashing with salting - see what this looks like in our db [bcrypt]
    const bcryptHash = await bcrypt.hash(userJohn.password, SALT_COUNT)
    const bcryptHash2 = await bcrypt.hash(userJohn2.password, SALT_COUNT)

    console.log('USERJOHN', bcryptHash)
    console.log('USERJOHN2', bcryptHash2)

    //storing our user information (username + hashedpassword) in our database
    await User.create({username: userJohn.username, password: bcryptHash})
    await User.create({username: userJohn2.username, password: bcryptHash2})

    
  } catch (error) {
    console.error(error)
  } finally {
    sequelize.close();
  }
}


run();
