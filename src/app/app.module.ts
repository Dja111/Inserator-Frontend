import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewKleinAnzeigeComponent } from './new-klein-anzeige/new-klein-anzeige.component';
import { UpdateKleinAnzeigeComponent } from './update-klein-anzeige/update-klein-anzeige.component';
import { AllKleinAnzeigeComponent } from './all-klein-anzeige/all-klein-anzeige.component';
import { BenutzerAnzeigeComponent } from './benutzer-anzeige/benutzer-anzeige.component';
import { PrivateNachrichtComponent } from './private-nachricht/private-nachricht.component';
import { CreateNewBenutzerComponent } from './create-new-benutzer/create-new-benutzer.component';
import {AllKleinAnzeigeService} from './all-klein-anzeige/all-klein-anzeige.service';
import {BenutzerAnzeigeService} from './benutzer-anzeige/benutzer-anzeige.service';
import {CreateNewBenutzerService} from './create-new-benutzer/create-new-benutzer.service';
import {NewKleinAnzeigeService} from './new-klein-anzeige/new-klein-anzeige.service';
import {PrivateNachrichtService} from './private-nachricht/private-nachricht.service';
import {UpdateKleinAnzeigeService} from './update-klein-anzeige/update-klein-anzeige.service';

@NgModule({
  declarations: [
    AppComponent,
    NewKleinAnzeigeComponent,
    UpdateKleinAnzeigeComponent,
    AllKleinAnzeigeComponent,
    BenutzerAnzeigeComponent,
    PrivateNachrichtComponent,
    CreateNewBenutzerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AllKleinAnzeigeService, BenutzerAnzeigeService , CreateNewBenutzerService ,
    NewKleinAnzeigeService , PrivateNachrichtService , UpdateKleinAnzeigeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
