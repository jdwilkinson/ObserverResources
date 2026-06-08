import Resource from "./Resource";
import { ResourceProperties } from "./Resource";

class Scorecard extends Resource {
    static createFromObject(obj: ResourceProperties): Scorecard {
        return new Scorecard(obj);
    }
}

export default Scorecard;