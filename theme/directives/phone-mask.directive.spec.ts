import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneMaskDirective } from './phone-mask.directive';

// 1. Create a mock component with appPhoneMask in its html
@Component({
  template: `<input appPhoneMask value="1234567890" />`,
})
class MockComponent {} // No need to export as we will use this comp here itself

// describe the phone mask directive here
describe('PhoneMaskDirective', () => {
  let fixture: ComponentFixture<MockComponent>;

  // Cofig the mock component inside the fixture
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [MockComponent, PhoneMaskDirective],
    }).createComponent(MockComponent);

    fixture.detectChanges(); // detecting the changes in html of mockcomp
  });

  // testing the input to be in phone number format
  it('should have a <input> in this phone number format', () => {
    const newInput = fixture.nativeElement.querySelector('input');
    expect(newInput.value).toEqual('(123) 456-7890');
  });
});
