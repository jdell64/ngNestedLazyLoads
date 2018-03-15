import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressComponent} from './address.component'
import {AddressRoutingModule} from './address-routing.module'

@NgModule({
  imports: [
    CommonModule,
    AddressRoutingModule
  ],
  declarations: [AddressComponent]
})
export default class AddressModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/