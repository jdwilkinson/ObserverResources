import data from "./resources.json";
import { Book, Jersey, ObserverManual, ObserverUniversityVideo, Rules, RulesQuiz, Scorecard, Shoe } from "../types/ResourceTypes";

const Resources = {
    "books": data.books.map(book => Book.createFromObject(book)),
    "jerseys": data.jerseys.map(jersey => Jersey.createFromObject(jersey)),
    "observerManuals": data.observerManuals.map(manual => ObserverManual.createFromObject(manual)),
    "observerUniversityVideos": data.observerUniversityVideos.map(video => ObserverUniversityVideo.createFromObject(video)),
    "rules": data.rules.map(rule => Rules.createFromObject(rule)),
    "rulesQuizzes": data.rulesQuizzes.map(quiz => RulesQuiz.createFromObject(quiz)),
    "scorecards": data.scorecards.map(sc => Scorecard.createFromObject(sc)),
    "shoes": data.shoes.map(shoe => Shoe.createFromObject(shoe)),
};

export default Resources;