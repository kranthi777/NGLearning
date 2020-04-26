import {compute} from './compute';
describe("compute function",()=>{
  it('should return 0 if input is negative',()=>{
    const result = compute(-1);
    expect(result).toBe(0);
  })
  it('should return input + 1 if input is positive',()=>{
    const result = compute(1);
    expect(result).toBe(2);
  })
});