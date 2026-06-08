import data from "./resources.json";
import { Scorecard, Shoe } from "../types/ResourceTypes";

const Resources = {
    "scorecards": data.scorecards.map(sc => Scorecard.createFromObject(sc)),
    "shoes": data.shoes.map(shoe => Shoe.createFromObject(shoe)),
};

export default Resources;