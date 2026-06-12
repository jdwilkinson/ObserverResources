import CollapsibleSection from './CollapsibleSection';
import Resources from './resources/Resources';
import { Jersey, Scorecard, Shoe } from './types/ResourceTypes';

const App = () => {
  return (
    <main>
      <section>
        <h1 className="topmost-header">Resources for observers</h1>

        <CollapsibleSection sectionTitle="Official documents">
          TODO: Gather these official documents:
          <ul>
            <li>Rules (<a href='https://usaultimate.org/rules/'>Source</a>)</li>
            <li>Observer manual (<a href='https://usaultimate.org/wp-content/uploads/2020/11/2024-Observer-Manual-2024-04-25.pdf'>Outdated link</a>, <a href='https://usaultimate.org/observers/'>Source</a>)</li>
          </ul>
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
          TODO: Convert these links into resources:
          <ul>
            <li><a href='https://www.youtube.com/watch?v=jEssYG0SwO8'>Volume 1</a></li>
            <li><a href='https://www.youtube.com/watch?v=HndetKAiOmE'>Volume 2</a></li>
            <li><a href='https://www.youtube.com/watch?v=HndetKAiOmE'>Volume 3</a></li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Books">
          TODO: Convert this into a resource:
          <ul>
            <li><a href='https://www.amazon.com/Social-Ref-Become-Better-Referee/dp/1793133549'>The Social Ref book</a></li>
          </ul>
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