import data from "./resources.json";
import { Book, Jersey, ObserverManual, Rules, Scorecard, Shoe } from "../types/ResourceTypes";

const Resources = {
    "books": data.books.map(book => Book.createFromObject(book)),
    "jerseys": data.jerseys.map(jersey => Jersey.createFromObject(jersey)),
    "observerManuals": data.observerManuals.map(manual => ObserverManual.createFromObject(manual)),
    "rules": data.rules.map(rule => Rules.createFromObject(rule)),
    "scorecards": data.scorecards.map(sc => Scorecard.createFromObject(sc)),
    "shoes": data.shoes.map(shoe => Shoe.createFromObject(shoe)),
};

export default Resources;