import { Component, OnInit } from '@angular/core';
import {regpage} from '../../../../../../config/keys.js';


@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  regStatus: Boolean;

  constructor() { }

  ngOnInit() {
    this.regStatus = regpage;
  }

}
