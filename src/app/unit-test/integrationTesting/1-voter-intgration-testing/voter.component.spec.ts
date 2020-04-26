import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    })
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('it should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();
    let domElement = fixture.debugElement.query(By.css('.vote-count'));
    //let voteCountEl = domElement.getElementsByClassName("vote-count").textContent();
    let voteCountEl: HTMLElement = domElement.nativeElement;
    
    expect(voteCountEl.innerText).toContain("21");
  });

  it('should highlight  the upvote button if upvoted',()=>{
    component.myVote =1;
    fixture.detectChanges();
    let dEl = fixture.debugElement.query(By.css('.glyphicon'));
    expect(dEl.classes['highlighted']).toBeTruthy();
  })

  //onclick
  it("should increase votes when i click button",()=>{
    let btn = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    //btn.triggerEventHandler('click',null);
    //or
    component.upVote();
    expect(component.totalVotes).toEqual(1);
  })
});
