import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFeatureComponent } from './detail-feature/detail-feature.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OhFourComponent } from './oh-four/oh-four.component';
import { OneFeatureComponent } from './one-feature/one-feature.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: LayoutComponent, children : [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'features', component: FeaturesComponent},
    { path: 'features/:name', component: OneFeatureComponent, children: [
      { path: 'detail', component: DetailFeatureComponent, pathMatch:'full'}
    ]},
    { path: 'not-found', component: OhFourComponent},
    { path:'**', redirectTo:'/not-found'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
