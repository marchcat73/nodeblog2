import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MaterialService } from '../../classes/material.service';


@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SiteLayoutComponent implements OnInit,  AfterViewInit {
  @ViewChild('sidenav') sidenavRef: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    MaterialService.initSidenav(this.sidenavRef);
  }

}
