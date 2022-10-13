// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./alex-aaron3.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// filter -> use for any function asking you to access only customers who pass a test

// map -> use if you need to return a new array of every value from the input array transformed

// reduce -> iterates through an an array to "accumulate a single return value"

var maleCount = function(array) { // use filter
    let males = _.filter(array, function(customer){
        // return true if the input customer is male
        return customer.gender === 'male';
    }); // [male, male, male];

    return males.length;
};


var femaleCount = function(array){
    // implement reduce to get number of female customers
    let females = _.reduce(array, (acc, current) => {
        if (current.gender === 'female'){
            acc += 1;
        }
        return acc;
    }, 0);
    
    return females;
};

/*
// invoke _.reduce()
    // seed or no seed? -> result = 0

    // iterate through array
        // 0
            // result = 0
        // 1
             // result = 1
        // 2
            // result = func(1, {customer}, 2, [])



*/

var oldestCustomer;

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
