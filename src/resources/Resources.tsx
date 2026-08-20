import data from "./resources.json";
import { App, Book, HeadObserverTool, Jersey, ObserverManual, ObserverUniversityVideo, Radio, RefereeManual, Rules, RulesClinic, RulesQuiz, Scorecard, Shoe } from "../types/ResourceTypes";
import Resource from "../types/Resource";

const Resources = {
    "apps": data.apps.map(app => App.createFromObject(app)),
    "books": data.books.map(book => Book.createFromObject(book)),
    "headObserverTools": data.headObserverTools.map(tool => HeadObserverTool.createFromObject(tool)),
    "jerseys": data.jerseys.map(jersey => Jersey.createFromObject(jersey)),
    "observerManuals": data.observerManuals.map(manual => ObserverManual.createFromObject(manual)),
    "refereeManuals": data.refereeManuals.map(manual => RefereeManual.createFromObject(manual)),
    "observerUniversityVideos": data.observerUniversityVideos.map(video => ObserverUniversityVideo.createFromObject(video)),
    "radios": data.radios.map(radio => Radio.createFromObject(radio)),
    "rules": data.rules.map(rule => Rules.createFromObject(rule)),
    "rulesClinics": data.rulesClinics.map(clinic => RulesClinic.createFromObject(clinic)),
    "rulesQuizzes": data.rulesQuizzes.map(quiz => RulesQuiz.createFromObject(quiz)),
    "scorecards": data.scorecards.map(sc => Scorecard.createFromObject(sc)),
    "shoes": data.shoes.map(shoe => Shoe.createFromObject(shoe)),

    getRenderedResourcesForRuleset: function (resources: Resource[], ruleset: string): JSX.Element[] {
        return resources
            .filter(r => r.includeInRuleset(ruleset))
            .map(r => r.render());
    }
};

export default Resources;