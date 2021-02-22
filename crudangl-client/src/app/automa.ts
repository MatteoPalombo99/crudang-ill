import { RicercaEvent, SelezionaEvent, AddEvent, ConfermaEvent, AnnullaEvent, RimuoviEvent, ModificaEvent, State, VisualizzaEvent } from "./State";

export class CrudAutoma implements State {

    stato: State;

    next(e: Event) {
        this.stato.next(e);

    }
}

export class Ricerca implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof RicercaEvent) {
            a.stato = new Ricerca();
        } else if (e instanceof SelezionaEvent) {
            a.stato = new Visualizza();
        } else if (e instanceof AddEvent) {
            a.stato = new Aggiungi();
        }
    }
}

export class Aggiungi implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof AnnullaEvent) {
            a.stato = new Ricerca();
        } else if (e instanceof ConfermaEvent) {
            a.stato = new Visualizza();
        } else if (e instanceof ConfermaEvent) {
            a.stato = new Aggiungi();
        }
    }
}

export class Visualizza implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof AddEvent) {
            a.stato = new Aggiungi();
        } else if (e instanceof ModificaEvent) {
            a.stato = new Modifica();
        } else if (e instanceof RicercaEvent) {
            a.stato = new Ricerca();
        } else if (e instanceof RimuoviEvent) {
            a.stato = new Rimuovi();
        } else if (e instanceof SelezionaEvent) {
            a.stato = new Visualizza();
        }
    }
}

export class Modifica implements State {
    next(e: Event, a: CrudAutoma) { }
}

export class Rimuovi implements State {
    next(e: Event, a: CrudAutoma) { }
}

export class Conferma implements State {
    next(e: Event, a: CrudAutoma) { }
}
