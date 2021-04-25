import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { NgxFileDropModule } from 'ngx-file-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './modules/material/material.module';
import { SpellCreationComponent } from './components/spell-creation/spell-creation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    CharacterSelectComponent,
    CharacterCreationComponent,
    SpellCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
