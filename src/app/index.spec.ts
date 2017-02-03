import { Greeter } from './index';

describe('Greeter', () => {
    it('should greet', () => {
        const greeter = new Greeter();
        spyOn(console, 'log');

        greeter.greet();

        expect(console.log).toHaveBeenCalled();
    });
});