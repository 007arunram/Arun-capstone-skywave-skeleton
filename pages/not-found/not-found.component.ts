import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, AfterViewInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public goHome(): void {
    this.router.navigateByUrl('/');
  }

  ngAfterViewInit(): void{
    document.getElementById('preloader')?.classList.add('hide');
  }

}
