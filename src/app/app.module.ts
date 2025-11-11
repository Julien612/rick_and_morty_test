import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { App } from './app';

import { CharactersComponent } from './components/characters/characters.component';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { SvgIconComponent } from './components/shared//svg-icon/svg-icon';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    App,
    CharactersComponent,
    CharacterPageComponent,
    SvgIconComponent
  ],
  providers: []
})
export class AppModule { }


