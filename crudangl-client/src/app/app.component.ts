import { Component } from '@angular/core';
import { CrudAutoma } from './automa';
import { Automabile } from './automabile';
import { AddEvent, AnnullaEvent, ConfermaEvent, ModificaEvent, RicercaEvent, RimuoviEvent, SelezionaEvent } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Automabile {
  automa: CrudAutoma = new CrudAutoma(this);

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
  cercaPerCodice: string;

  ricerca() {
    //Se decommentate viene generato un errore di transiplazione
    //this.automa.stato.next(new RicercaEvent());
  }

  nuova() {
    //this.automa.stato.next(new AddEvent());
  }

  conferma() {
    //this.automa.stato.next(new ConfermaEvent());
  }

  modifica() {
    //this.automa.stato.next(new ModificaEvent());
  }

  rimuovi() {
    //this.automa.stato.next(new RimuoviEvent());
  }

  annulla() {
    //this.automa.stato.next(new AnnullaEvent());
  }

  seleziona() {
    //this.automa.stato.next(new SelezionaEvent());
  }

  entraStatoRicerca() {
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

  entraStatoAggiungi() {
    this.showNuova = false;
    this.showModifica = false;
    this.showAnnulla = true;
    this.showConferma = true;
    this.showRimuovi = false;
    this.showCerca = false;
    this.showTable = false;
    this.showForms = true;
    this.disableInputs = false;
    this.disableInputsCerca = true;
  }

  entraStatoVisualizza() {
    this.showNuova = true;
    this.showModifica = true;
    this.showAnnulla = false;
    this.showConferma = false;
    this.showRimuovi = true;
    this.showCerca = true;
    this.showTable = true;
    this.showForms = true;
    this.disableInputs = true;
    this.disableInputsCerca = false;
  }



  entraStatoModifica() {
    this.showNuova = false;
    this.showModifica = false;
    this.showAnnulla = true;
    this.showConferma = true;
    this.showRimuovi = false;
    this.showCerca = false;
    this.showForms = true;
    this.showTable = false;
    this.disableInputs = false;
    this.disableInputsCerca = true;
  }

  entraStatoRimuovi() {
    this.showNuova = false;
    this.showModifica = false;
    this.showAnnulla = true;
    this.showConferma = true;
    this.showRimuovi = false;
    this.showCerca = false;
    this.showTable = false;
    this.showForms = true;
    this.disableInputs = true;
    this.disableInputsCerca = true;
  }
}

