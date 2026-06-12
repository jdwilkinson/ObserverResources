import Resource from "./Resource";
import { ResourceProperties } from "./Resource";

export class Jersey extends Resource {
    static createFromObject(obj: ResourceProperties): Jersey {
        return new Jersey("Jersey", obj);
    }
}

export class ObserverManual extends Resource {
    static createFromObject(obj: ResourceProperties): ObserverManual {
        return new ObserverManual("Observer manual", obj);
    }
}

export class Rules extends Resource {
    static createFromObject(obj: ResourceProperties): Rules {
        return new Rules("Rules", obj);
    }
}

export class Scorecard extends Resource {
    static createFromObject(obj: ResourceProperties): Scorecard {
        return new Scorecard("Scorecard", obj);
    }
}

export class Shoe extends Resource {
    static createFromObject(obj: ResourceProperties): Shoe {
        return new Shoe("Shoe", obj);
    }
}
