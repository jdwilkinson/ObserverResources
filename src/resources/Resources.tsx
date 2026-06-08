import data from "./resources.json";
import { Jersey, Scorecard, Shoe } from "../types/ResourceTypes";

const Resources = {
    "jerseys": data.jerseys.map(jersey => Jersey.createFromObject(jersey)),
    "scorecards": data.scorecards.map(sc => Scorecard.createFromObject(sc)),
    "shoes": data.shoes.map(shoe => Shoe.createFromObject(shoe)),
};

export default Resources;