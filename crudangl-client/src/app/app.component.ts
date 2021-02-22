import { Component } from '@angular/core';
import { CrudAutoma, Ricerca } from './automa';
import { AddEvent, RicercaEvent } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  disableInputs: boolean = true;
  disableInputsCerca: boolean = false;

  showNuova: boolean = true;
  showModifica: boolean;
  showAnnulla: boolean;
  showConferma: boolean;
  showRimuovi: boolean;
  showCerca: boolean = true;
  showTable: boolean = true;
  showForms: boolean;
  codice: string;
  descrizione: string;
  cercaPerCodice:string;

  ricerca() {
    this.showNuova = true;
    this.showModifica = false;
    this.showAnnulla = false;
    this.showConferma = false;
    this.showRimuovi = false;
    this.showCerca = true;
    this.showTable = true;
    this.showForms = false;
    this.disableInputs = true;
    this.disableInputsCerca = false;
  }

  nuova() {
    this.showNuova = false;
    this.showModifica = false;
    this.showAnnulla = true;
    this.showConferma = true;
    this.showRimuovi = false;
    this.showCerca = false;
    this.showTable=false;
    this.showForms = true;
    this.disableInputs = false;
    this.disableInputsCerca = true;
  }

  conferma() {
    this.showNuova = true;
    this.showModifica = true;
    this.showAnnulla = false;
    this.showConferma = false;
    this.showRimuovi = true;
    this.showCerca = true;
    this.showTable=true;
    this.showForms = true;
    this.disableInputs = true;
    this.disableInputsCerca = false;
  }

  annulla() {
    this.showNuova = true;
    this.showModifica = false;
    this.showAnnulla = false;
    this.showConferma = false;
    this.showRimuovi = false;
    this.showCerca = true;
    this.disableInputsCerca = false;
    this.showTable = true;
    this.showForms = false;
  }
  modifica() {
    this.showNuova = false;
    this.showModifica = false;
    this.showAnnulla = true;
    this.showConferma = true;
    this.showRimuovi = false;
    this.showCerca = false;
    this.showForms = true;
    this.showTable=false;
    this.disableInputs = false;
    this.disableInputsCerca = true;
  }

  rimuovi() {
    this.showNuova = false;
    this.showModifica = false;
    this.showAnnulla = true;
    this.showConferma = true;
    this.showRimuovi = false;
    this.showCerca = false;
    this.showTable=false;
    this.showForms = true;
    this.disableInputs = true;
    this.disableInputsCerca = true;
  }

  cerca(){
    this.showNuova = true;
    this.showModifica = false;
    this.showAnnulla = true;
    this.showConferma = true;
    this.showRimuovi = false;
    this.showCerca = true;
    this.showTable=true;
    this.showForms = false;
    this.disableInputs = true;
    this.disableInputsCerca = false;
    this.cercaPerCodice="";
  }

}
