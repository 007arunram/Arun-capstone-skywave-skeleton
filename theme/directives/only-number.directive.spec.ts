// import { Component } from "@angular/core";

// import { ComponentFixture, TestBed } from "@angular/core/testing";

// import { OnlyNumberDirective } from "./only-number.directive";

// // 1. Create a mock component with appPhoneMask in its html

// @Component({
//   template: ` <input onlyNumber value="1234567890" /> `,
// })
// class MockComponent {} // No need to export as we will use this comp here itself

// // 2. test whether the div in the above mock comp is getting bg color

// describe("OnlyNumberDirective", () => {
//   let fixture: ComponentFixture<MockComponent>;

//   // Step 2.1 Preparing MockComponent for testing - loading it into the TestBed

//   beforeEach(() => {
//     fixture = TestBed.configureTestingModule({
//       declarations: [MockComponent, OnlyNumberDirective],
//     }).createComponent(MockComponent);

//     fixture.detectChanges(); // detecting the changes in html of mockcomp
//   });

//   // Step 2.2 Testing the mock component with input to be in this format

//   it("should have a <input> in this only number format", () => {
//     const newInput = fixture.debugElement.nativeElement.querySelector("input");

//     fixture.detectChanges();

//     const event = new Event("keypress", { bubbles: true });
//     spyOn(event, "preventDefault");
//     newInput.dispatchEvent(event);
//     expect(event.preventDefault).toHaveBeenCalled();
//   });

// });
