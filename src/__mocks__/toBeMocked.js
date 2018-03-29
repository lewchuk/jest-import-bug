import utilMethod from '../utilUsingMock';

const mockedSingletonCount = (global.mockedSingletonCount === undefined ? 0 : global.mockedSingletonCount + 1);
global.mockedSingletonCount = mockedSingletonCount;
console.log((new Error()).stack);

export const mockHelperUsingUtil = () => {
  return `${utilMethod()} ${mockedSingletonCount}`;
}

const mockedMethod = () => {
  return `Mocked Implementation ${mockedSingletonCount}`;
}

export default mockedMethod;
