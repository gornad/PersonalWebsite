import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public imagesurl;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Small])
    .pipe(
      map(result => result.matches)
    );
  
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
	  	this.imagesurl = ['assets/1.jpg','assets/2.jpg','assets/3.jpg','assets/4.jpg'];
  }

}
