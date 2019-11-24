import { FormsModule } from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    AuthService
  ]
})

export class CoreModule {
}
