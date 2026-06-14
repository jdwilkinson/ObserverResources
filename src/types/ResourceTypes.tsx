import Resource from "./Resource";
import { ResourceProperties } from "./Resource";

export class App extends Resource {
    static createFromObject(obj: ResourceProperties): App {
        return new App("App", obj);
    }
}

export class Book extends Resource {
    static createFromObject(obj: ResourceProperties): Book {
        return new Book("Book", obj);
    }
}

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

export class ObserverUniversityVideo extends Resource {
    static createFromObject(obj: ResourceProperties): ObserverUniversityVideo {
        return new ObserverUniversityVideo("Observer University video", obj);
    }
}

export class Rules extends Resource {
    static createFromObject(obj: ResourceProperties): Rules {
        return new Rules("Rules", obj);
    }
}

export class RulesQuiz extends Resource {
    static createFromObject(obj: ResourceProperties): RulesQuiz {
        return new RulesQuiz("Rules quiz", obj);
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
