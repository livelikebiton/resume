import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { MainComponent } from './components/layout-area/main/main.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
