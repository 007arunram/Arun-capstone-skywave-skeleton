import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Input() dividers = true;
  @Input() iconSize = 'sm';
  @Input() iconColor = '';

  constructor() { }

  ngOnInit(): void {
  }

}
