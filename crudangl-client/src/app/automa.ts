import { Automabile } from "./automabile";
import { RicercaEvent, SelezionaEvent, AddEvent, ConfermaEvent, AnnullaEvent, RimuoviEvent, ModificaEvent, State, Event} from "./state";

export class CrudAutoma implements State {

    stato: State;
    ui: Automabile;

    constructor(ui: Automabile) {
        this.ui = ui;
        this.stato = new Ricerca();
        ui.entraStatoRicerca();
    }

    next(e: Event, a?: CrudAutoma) {
        this.stato.next(e, a);
    }
}

export class Ricerca implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof RicercaEvent) {
            a.stato = new Ricerca();
            a.ui.entraStatoRicerca();
        } else if (e instanceof SelezionaEvent) {
            a.stato = new Visualizza();
            a.ui.entraStatoVisualizza();
        } else if (e instanceof AddEvent) {
            a.stato = new Aggiungi();
            a.ui.entraStatoAggiungi();
        } else {
            console.log("Evento inaspettato");
        }
    }
}

export class Aggiungi implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof AnnullaEvent) {
            a.stato = new Ricerca();
            a.ui.entraStatoRicerca();
        } else if (e instanceof ConfermaEvent) {
            a.stato = new Visualizza();
            a.ui.entraStatoVisualizza();
        } else if (e instanceof ConfermaEvent) {
            a.stato = new Aggiungi();
            a.ui.entraStatoAggiungi();
        } else {
            console.log("Evento inaspettato");
        }
    }
}

export class Visualizza implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof AddEvent) {
            a.stato = new Aggiungi();
            a.ui.entraStatoAggiungi();
        } else if (e instanceof ModificaEvent) {
            a.stato = new Modifica();
            a.ui.entraStatoModifica();
        } else if (e instanceof RicercaEvent) {
            a.stato = new Ricerca();
            a.ui.entraStatoRicerca();
        } else if (e instanceof RimuoviEvent) {
            a.stato = new Rimuovi();
            a.ui.entraStatoRimuovi();
        } else if (e instanceof SelezionaEvent) {
            a.stato = new Visualizza();
            a.ui.entraStatoVisualizza();
        } else {
            console.log("Evento inaspettato");
        }
    }
}

export class Modifica implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof AnnullaEvent) {
            a.stato = new Visualizza();
            a.ui.entraStatoVisualizza();
        } else if (e instanceof ConfermaEvent) {
            a.stato = new Visualizza();
            a.ui.entraStatoVisualizza();
        } else {
            console.log("Evento inaspettato");
        }
    }
}

export class Rimuovi implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof AnnullaEvent) {
            a.stato = new Visualizza();
            a.ui.entraStatoVisualizza();
        } else if (e instanceof ConfermaEvent) {
            a.stato = new Ricerca();
            a.ui.entraStatoRicerca();
        } else {
            console.log("Evento inaspettato");
        }
    }
}

