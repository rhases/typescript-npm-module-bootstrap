import { add } from '../lib';

describe('add', () => {

   it('should sum given numbers', () => {
      expect(add(2, 5)).toBe(7);
   });

});
