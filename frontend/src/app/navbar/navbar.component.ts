import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  name: string = "Jessica";

  menus: string[] = ["About", "Experience", "Works", "Contact"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
