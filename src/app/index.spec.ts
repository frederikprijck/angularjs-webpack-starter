import { moduleName } from './index';

describe('app/index', () => {
    it('should export moduleName', () => {
        expect(moduleName).toBe('application');
    });
});