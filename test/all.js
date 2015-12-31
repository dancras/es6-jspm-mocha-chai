import chai from 'chai';
import Greeter from 'project/Greeter';

chai.should();

describe('Greeter', () => {

    it('should introduce itself to the world', () => {
        const greeter = new Greeter();
        greeter.sayHello().should.equal('hello world!');
    });

});
