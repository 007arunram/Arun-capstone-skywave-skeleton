import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { MenuItem } from 'src/app/app.models';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit, OnChanges {
  @Input() menuItem!: MenuItem | any;
  @Input() lazyLoad = false;
  @Input() viewType = 'grid';
  @Input() viewColChanged: any;
  public column = 4;
  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void{
    if (changes.viewColChanged){
      this.getColumnCount(changes.viewColChanged.currentValue);
    }
  }

  public getColumnCount(value: number): void{
    if (value === 25){
      this.column = 4;
    }
    else if (value === 33.3){
      this.column = 3;
    }
    else if (value === 50){
      this.column = 2;
    }
    else{
      this.column = 1;
    }
  }


}
