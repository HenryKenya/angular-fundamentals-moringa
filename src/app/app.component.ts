import { Component, OnInit } from '@angular/core';
// es6 imports standard

@Component({
  selector: 'app-root',
  template: `<app-customers></app-customers>`
})
export class AppComponent implements OnInit {

  title = "Superman"

    ngOnInit() {}
 }
