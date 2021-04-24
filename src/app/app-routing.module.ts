import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterSelectComponent } from './components/character-select/character-select.component';

const routes: Routes = [
  { path: '', redirectTo: 'character/select', pathMatch: 'full'},
  { path: '**', redirectTo: 'character/select', pathMatch: 'full'},
  { path: 'character/select', component: CharacterSelectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
