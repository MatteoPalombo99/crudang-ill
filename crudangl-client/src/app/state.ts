import { CrudAutoma } from "./automa";


export interface State {
    next(e: Event, a?: CrudAutoma);

}

export interface Event {

}

export class RicercaEvent implements Event {

}

export class AddEvent implements Event {

}

export class VisualizzaEvent implements Event {

}

export class ModificaEvent implements Event {

}

export class RimuoviEvent implements Event {

}

export class SelezionaEvent implements Event {

}

export class ConfermaEvent implements Event {

}

export class AnnullaEvent implements Event {

}