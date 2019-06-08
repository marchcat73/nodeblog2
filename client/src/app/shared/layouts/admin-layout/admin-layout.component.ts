import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MaterialService } from '../../classes/material.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('floating', null) floatingRef: ElementRef;

  links = [
    {url: '/admin/posts', name: `Сайты`},
    {url: '/admin/categories', name: `Категории`},
  ];

  constructor(private auth: AuthService,
              private router: Router) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    MaterialService.initFloatingActionButton(this.floatingRef);
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin/login']);
  }

}
