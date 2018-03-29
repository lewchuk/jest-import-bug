import utilUsingMock from '../src/utilUsingMock';
import { mockHelperUsingUtil } from '../src/toBeMocked';

jest.mock('../src/toBeMocked');

describe('toBeTested', () => {
  it('return strings with 0 instance count', () => {
  	expect(mockHelperUsingUtil()).toEqual('Mocked Implementation 0 0');
  });
});

