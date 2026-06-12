import data from "./resources.json";
import { Jersey, ObserverManual, Rules, Scorecard, Shoe } from "../types/ResourceTypes";

const Resources = {
    "jerseys": data.jerseys.map(jersey => Jersey.createFromObject(jersey)),
    "observerManuals": data.observerManuals.map(manual => ObserverManual.createFromObject(manual)),
    "rules": data.rules.map(rule => Rules.createFromObject(rule)),
    "scorecards": data.scorecards.map(sc => Scorecard.createFromObject(sc)),
    "shoes": data.shoes.map(shoe => Shoe.createFromObject(shoe)),
};

export default Resources;