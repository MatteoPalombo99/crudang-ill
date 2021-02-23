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
  showSeleziona: boolean = true;

  cerca() {
    this.automa.next(new RicercaEvent, this.automa);
  }

  nuova() {
    this.automa.next(new AddEvent, this.automa);
  }

  conferma() {
    this.automa.next(new ConfermaEvent, this.automa);
  }

  modifica() {
    this.automa.next(new ModificaEvent, this.automa);
  }

  rimuovi() {
    this.automa.next(new RimuoviEvent, this.automa);
  }

  annulla() {
    this.automa.next(new AnnullaEvent, this.automa);
  }

  seleziona() {
    this.automa.next(new SelezionaEvent, this.automa);
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
    this.showSeleziona = true;
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
    this.showSeleziona = false;
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
    this.showSeleziona = true;
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
    this.showSeleziona = false;
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
    this.showSeleziona = false;
  }
}

