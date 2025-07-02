import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from '../components/social/social.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    SocialComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    SocialComponent
  ]
})
export class SharedModule { }