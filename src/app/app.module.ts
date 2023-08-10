import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule} from 'ng-zorro-antd/table';
import { HomeComponent } from './home/home/home.component';
import { AddEditComponent } from './add-edit/add-edit.component'
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [AppComponent, HomeComponent, AddEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    ScrollingModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
