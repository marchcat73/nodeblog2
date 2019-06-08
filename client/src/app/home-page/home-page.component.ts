import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MaterialService } from '../shared/classes/material.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})



export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('parallax', null) parallaxRef: ElementRef;
  @ViewChild('personfoto', null) personfotoRef: ElementRef;

  homeStatus = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    MaterialService.initParallax(this.parallaxRef);
    MaterialService.initMaterialbox(this.personfotoRef);
  }

}
