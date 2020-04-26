import {greet} from './greet';

describe("greet function", ()=>{
  it("should include name in message",()=>{
    let result = greet('Kranthi');
    expect(result).toContain('Kranthi');
  })
})