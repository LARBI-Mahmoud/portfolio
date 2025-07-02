import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/components/shared.module';
import { FeaturedProjectsComponent } from 'src/app/components/featured-projects/featured-projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ButtonComponent,
    CardComponent,
    FeaturedProjectsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { 

  
}
