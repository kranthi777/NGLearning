import { EventEmitter } from '@angular/core';
import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise vote changed event when upvoted', () => {
    let value = null;
    component.voteChanged.subscribe((val)=>value =val);
    component.upVote();
    expect(value).toBe(1);
  });
});