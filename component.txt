import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disableInputs: boolean = true;

  showNuova: boolean= true;
  showModifica: boolean;
  showAnnulla: boolean;
  showConferma: boolean;
  showRimuovi: boolean;
  showCerca: boolean= true;
  showTable: boolean= true;
  showForms: boolean;

  ricerca() {
    this.showNuova = true;
    this.showCerca = true;
    this.showTable = true;
    this.showForms = false;
  }

  aggiungi(){
    this.showNuova = false;
    this.showModifica=false;
    this.showAnnulla=true;
    this.showConferma=true;
    this.showRimuovi=false;
    this.showCerca=false;
    this.showForms=true; 
  }
}
