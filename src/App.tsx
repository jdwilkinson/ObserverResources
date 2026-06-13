import CollapsibleSection from './CollapsibleSection';
import Resources from './resources/Resources';
import { Book, Jersey, ObserverManual, ObserverUniversityVideo, Rules, Scorecard, Shoe } from './types/ResourceTypes';

const App = () => {
  return (
    <main>
      <section>
        <h1 className="topmost-header">Resources for observers</h1>

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

          TODO: Gather these additional ones:
          <ul>
            <li>Zeta's horizontal style</li>
            <li>Wally's vertical style</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Shoes">
          {Resources.shoes.map((shoe: Shoe) => (shoe.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Apparel">
          TODO: Scour Discord for shorts, jackets, hats, etc
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Observer University videos">
          {Resources.observerUniversityVideos.map((video: ObserverUniversityVideo) => (video.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Books">
          {Resources.books.map((book: Book) => (book.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Rules quizzes">
          TODO: Gather and/or duplicate at least these rules quizzes:
          <ul>
            <li><a href='https://docs.google.com/forms/d/e/1FAIpQLScidc_cjJymmk79dqUQKoIT4XOlqpDhVVwxkM3K7AxdEiYL2g/viewform?usp=send_form'>College Nationals 2026 pre-quiz</a></li>
            <li>Other rules quizzes from Cotton?</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Video replays">
          TODO: Consider whether this is the right place to put video resources
          <ul>
            <li>...</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Apps">
          TODO: Scour Discord for apps
          <ul>
            <li>SOTA?</li>
          </ul>
        </CollapsibleSection>
      </section>

      <section>
        <div className="footer">
          Last updated <b>2026-06-12</b>; see&nbsp;
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