import Resource from "./Resource";
import { ResourceProperties } from "./Resource";

export class Scorecard extends Resource {
    static createFromObject(obj: ResourceProperties): Scorecard {
        return new Scorecard(obj);
    }
}

export class Shoe extends Resource {
    static createFromObject(obj: ResourceProperties): Shoe {
        return new Shoe(obj);
    }
}
