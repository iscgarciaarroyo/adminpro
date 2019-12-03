import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
