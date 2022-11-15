import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaskDateDirective } from './mask-date.directive';

// Create a mock component with appMaskDate in its html
@Component({
  template: `<input appMaskDate value="11112022"/>`,
})
class MockComponent {} // No need to export as we will use this comp here itself

// describe the mask date directive here
describe('MaskDateDirective', () => {
  let fixture: ComponentFixture<MockComponent>;

  // Cofig the mock component inside the fixture
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [MockComponent, MaskDateDirective],
    }).createComponent(MockComponent);

    fixture.detectChanges(); // detecting the changes in html of mockcomp
  });

  // testing the input to be in date format
  it('should have a <input> in this date format', () => {
    const newInput = fixture.nativeElement.querySelector('input');
    expect(newInput.value).toEqual('11/11/2022');
  });
});
