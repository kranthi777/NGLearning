
import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
 
  let component: VoteComponent;
  //it executes before every spec/test/it block
  beforeEach(()=>{
    component = new VoteComponent();
  })
  it('should increment total votes when upvoted', () => {
    
    //Act
    component.upVote();

    //Assert
    expect(component.totalVotes).toBe(1);

  });

  it('should decrement total votes when downvoted', () => {
    //Act
    component.downVote();

    //Assert
    expect(component.totalVotes).toBe(-1);

  });
});