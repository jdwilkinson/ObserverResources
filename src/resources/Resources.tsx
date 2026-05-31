import data from "./resources.json";
import Scorecard from "../types/Scorecard";

const scorecards = data.scorecards.map(sc => Scorecard.createFromObject(sc));

const Resources = {
    "scorecards": scorecards,
};

export default Resources;