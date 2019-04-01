import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllKleinAnzeigeComponent} from './all-klein-anzeige/all-klein-anzeige.component';
import {NewKleinAnzeigeComponent} from './new-klein-anzeige/new-klein-anzeige.component';
import {UpdateKleinAnzeigeComponent} from './update-klein-anzeige/update-klein-anzeige.component';
import {PrivateNachrichtComponent} from './private-nachricht/private-nachricht.component';
import {BenutzerAnzeigeComponent} from './benutzer-anzeige/benutzer-anzeige.component';
import {CreateNewBenutzerComponent} from './create-new-benutzer/create-new-benutzer.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: AllKleinAnzeigeComponent},
  {path: 'kleinAnzeiges/addNewAnzeige', component: NewKleinAnzeigeComponent},
  {path: 'kleinAnzeiges/update/:id',  component: UpdateKleinAnzeigeComponent },
  {path: 'privateNachricht', component: PrivateNachrichtComponent},
  {path: 'benutzers/benutzerSicht/:userName', component: BenutzerAnzeigeComponent},
  {path: 'benutzers/add', component: CreateNewBenutzerComponent}
];

@NgModule({
  imports: [ BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
