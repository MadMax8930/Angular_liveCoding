import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { OhFourComponent } from './oh-four/oh-four.component';
import { OneFeatureComponent } from './one-feature/one-feature.component';
import { DetailFeatureComponent } from './detail-feature/detail-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    LoginComponent,
    OhFourComponent,
    OneFeatureComponent,
    DetailFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
