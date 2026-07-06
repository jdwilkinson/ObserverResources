import CollapsibleSection from './CollapsibleSection';
import Resources from './resources/Resources';
import { App as AppResource, Book, HeadObserverTool, Jersey, ObserverManual, ObserverUniversityVideo, Radio, Rules, RulesClinic, RulesQuiz, Scorecard, Shoe } from './types/ResourceTypes';

const App = () => {
  return (
    <main>
      <section className="main-section">
        <h1 className="topmost-header">Resources for observers</h1>

        <hr className="hr-separator" />

        <CollapsibleSection sectionTitle="Rules">
          {Resources.rules.map((rule: Rules) => (rule.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Observer manual">
          {Resources.observerManuals.map((manual: ObserverManual) => (manual.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Jerseys">
          {Resources.jerseys.map((jersey: Jersey) => (jersey.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Scorecards">
          {Resources.scorecards.map((sc: Scorecard) => (sc.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Shoes">
          {Resources.shoes.map((shoe: Shoe) => (shoe.render()))}
        </CollapsibleSection>

        {/* TODO: Scour Discord for shorts, jackets, hats, etc */}
        {/* <CollapsibleSection sectionTitle="Apparel">
          ...
        </CollapsibleSection> */}

        <CollapsibleSection sectionTitle="Radios">
          {Resources.radios.map((radio: Radio) => (radio.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Observer University videos">
          {Resources.observerUniversityVideos.map((video: ObserverUniversityVideo) => (video.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Books">
          {Resources.books.map((book: Book) => (book.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Rules quizzes">
          {Resources.rulesQuizzes.map((quiz: RulesQuiz) => (quiz.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Rules clinics">
          {Resources.rulesClinics.map((clinic: RulesClinic) => (clinic.render()))}
        </CollapsibleSection>

        {/* TODO: Consider whether this is the right place to put video resources */}
        {/* <CollapsibleSection sectionTitle="Video replays">
          ...
          </CollapsibleSection> */}

        <CollapsibleSection sectionTitle="Apps">
          {Resources.apps.map((app: AppResource) => (app.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Head Observer Tools">
          {Resources.headObserverTools.map((tool: HeadObserverTool) => (tool.render()))}
        </CollapsibleSection>
      </section>

      <section>
        <div className="footer">
          Last updated <b>2026-07-03</b>; see&nbsp;
          <a href='https://github.com/jdwilkinson/ObserverResources/commits/main/' target='_blank' rel='noopener noreferrer'>
            detailed changelog
          </a>.
          <br />
          To suggest updates, DM <b>Wilk</b> on the Discord.
        </div>
      </section>
    </main >
  );
};

export default App;