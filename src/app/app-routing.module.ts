import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';

const routes: Routes = [
  { path: '', redirectTo: 'character/select', pathMatch: 'full'},
  { path: 'character',
    // component: FlashcardSetComponent,
    children: [
      { path: 'create', component: CharacterCreationComponent },
      { path: 'select', component: CharacterSelectComponent }
    ]
  },
  { path: '**', redirectTo: 'character/select', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
