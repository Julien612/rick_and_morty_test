import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterPageComponent } from './components/character-page/character-page.component';

export const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'character/:id', component: CharacterPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
