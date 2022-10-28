

describe('#add', function(){
    it('should add numbers', function(){
        assert.equal(add(2, 4), 6);
    });
});

describe('#printSomething', function(){
    const sandbox = sinon.createSandbox();

    beforeEach(function(){
        sandbox.spy(console, 'log');
    });

    afterEach(function(){
        sandbox.restore();
    });

    it('should print every value in an array', function(){
        let arr = [1, 2, 3, 4];
        printSomething(arr);
        for (let i = 0; i < arr.length; i++){
            assert.equal(console.log.getCall(i).args, )
        }
       // assert.equal(console.log.getCall(1).args, false);
    });
})