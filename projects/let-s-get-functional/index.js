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

var maleCount = function(array) {
    // implement _.filter() to return array of only male customers
    let males = _.filter(array, function(customer){
        // return true if the input customer is male
        return customer.gender === 'male';
    }); // => [<male>, <male>, <male>]
    return males.length;
};

var maleCount = function(array){
    // use reduce to return array of only the male customers
    let males = _.reduce(array, function(acc, current){
        if (current.gender === 'male'){
            acc.push(current);
        }

        return acc; 
    }, []);
}

/*
// invoke reduce
    // result = []
    // for loop
        // 0
            // result = func([], {customer}, 0, [...])



*/


var femaleCount = function(array){
    // implement _.reduce() to return number of female customers
    return _.reduce(array, function(acc, current, index, array){
        // determine if customer is female
        if (current.gender === 'female'){
            acc += 1; // acc = acc + 1;
        }
        return acc; // returns 1
    }, 0); // => 3 ?

};



var oldestCustomer = function(array){
    // use reduce to find oldest customer
    var oldest = _.reduce(array, function(acc, current, index, array){
        if (current.age > acc.age){ // if 45 > 24
            acc = current.name
        } 
        console.log(acc);
        return acc;
    });

    return oldest.name;
};

oldestCustomer(customers);

/*
// invoke reduce
    // seed or no seed | result = {customer1}

    // for loop
        // 1
            // result = { age: 33 }
        // 2 
            // result = { age: 45 }
        // 3
            // result = { age: 45 }

    // return { age: 45 }

*/










var youngestCustomer = function(array){
    let youngAge = _.reduce(array, function(acc, current){
        if (current.age < acc.age){
            return current;
        }
        return acc;
    }, []);
    return youngAge.age;
};



/* seed
// invoke reduce
    // for loop
        // 0
            // result = func([], {customer}, 0, [...])
*/

/* no seed
// invoke reduce
    // for loop
        // 1
            // result = func({customer 0}, {customer1}, 1, [...])
*/

// youngestCustomer(customers);

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
