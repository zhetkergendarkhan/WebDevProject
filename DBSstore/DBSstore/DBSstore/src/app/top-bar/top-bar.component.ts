import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TestComponent} from '../test/test.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public openModal() {
    this.dialog.open(TestComponent, {data: {name: 'Номер телефона:'}});
  }

  ngOnInit() {
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
