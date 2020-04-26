import { ReversePipe } from './reverse-pipe';
import { UserService } from './unit-service';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UnitTestComponent } from './unit-test.component';
import { DataService } from './data-service';

describe('UnitTestComponent', () => {//suite: group of related tests
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ UnitTestComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(UnitTestComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [UnitTestComponent]
    })
  })

  it("should create app", ()=>{//spec/test
    fixture = TestBed.createComponent(UnitTestComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it("should use user name from service",()=>{
    fixture = TestBed.createComponent(UnitTestComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    //to detect changes after ngInit
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  })

  it("should display user name if user is logged in",()=>{
    fixture = TestBed.createComponent(UnitTestComponent);
    let app = fixture.debugElement.componentInstance;
    
    app.isLoggedIn = true;
    //to detect changes after ngInit
    fixture.detectChanges();
    let compiledTemplate = fixture.debugElement.nativeElement;
    console.log(compiledTemplate.querySelector('p').textContent);
    expect(compiledTemplate.querySelector('p').textContent).toContain(app.user.name);
  })

  it("shouldn't display user name if user is not logged in",()=>{
    fixture = TestBed.createComponent(UnitTestComponent);
    let app = fixture.debugElement.componentInstance;

    //to detect changes after ngInit
    fixture.detectChanges();
    let compiledTemplate = fixture.debugElement.nativeElement;
    console.log(compiledTemplate.querySelector('p').textContent);
    expect(compiledTemplate.querySelector('p').textContent).not.toContain(app.user.name);
  })

  it("shouldn't fetch data successfully if not called asynchronously",()=>{
    fixture = TestBed.createComponent(UnitTestComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    
    let spy = spyOn(dataService, 'getData').and.returnValue(Promise.resolve('Data'));
    //to detect changes after ngInit
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  })

  it("should fetch data successfully if called asynchronously", async(()=>{
    fixture = TestBed.createComponent(UnitTestComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    
    let spy = spyOn(dataService, 'getData').and.returnValue(Promise.resolve('Data'));
    //to detect changes after ngInit
    fixture.detectChanges();
    //only execute once all async tasks are done
    fixture.whenStable().then(()=>{
      expect(app.data).toBe('Data');
    })
  }))

  it("should fetch data successfully if called asynchronously", fakeAsync(()=>{
    fixture = TestBed.createComponent(UnitTestComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    
    let spy = spyOn(dataService, 'getData').and.returnValue(Promise.resolve('Data'));
    //to detect changes after ngInit
    fixture.detectChanges();
    //tick ensures all async tasks are done
    tick();
    expect(app.data).toBe('Data');
  }))

  //unlike other test this is isolated test which is not depended on testbed/app 
  //good to move this spec to new file
  it("should reverse the string", ()=>{
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  })
});
