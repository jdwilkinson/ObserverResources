import CollapsibleSection from './CollapsibleSection';
import Resources from './resources/Resources';
import { Scorecard, Shoe } from './types/ResourceTypes';

const App = () => {
  return (
    <main>
      <section>
        <h1>Resources to include</h1>

        <CollapsibleSection sectionTitle="Official jerseys">
          <a href='https://www.spinultimate.com/collections/usa-ultimate-observer-jerseys'>Link to Spin store</a>
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Other apparel recommendations">
          (scour Discord for shorts, jackets, hats, etc)
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Shoes">
          {Resources.shoes.map((shoe: Shoe) => (shoe.render()))}
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Scorecards">
          {Resources.scorecards.map((sc: Scorecard) => (sc.render()))}

          <ul>
            <li>Zeta's horizontal style</li>
            <li>Wally's vertical style</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection sectionTitle='Rules quizzes'>
          <ul>
            <li><a href='https://docs.google.com/forms/d/e/1FAIpQLScidc_cjJymmk79dqUQKoIT4XOlqpDhVVwxkM3K7AxdEiYL2g/viewform?usp=send_form'>College Nationals 2026 pre-quiz</a></li>
            <li>Other rules quizzes from Cotton?</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Video replays">
          <ul>
            <li>...</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection sectionTitle='Observer University videos'>
          <ul>
            <li><a href='https://www.youtube.com/watch?v=jEssYG0SwO8'>Volume 1</a></li>
            <li><a href='https://www.youtube.com/watch?v=HndetKAiOmE'>Volume 2</a></li>
            <li><a href='https://www.youtube.com/watch?v=HndetKAiOmE'>Volume 3</a></li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Official documents">
          <ul>
            <li>Rules (<a href='https://usaultimate.org/rules/'>Source</a>)</li>
            <li>Observer manual (<a href='https://usaultimate.org/wp-content/uploads/2020/11/2024-Observer-Manual-2024-04-25.pdf'>Outdated link</a>, <a href='https://usaultimate.org/observers/'>Source</a>)</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Apps">
          <ul>
            <li>SOTA?</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection sectionTitle="Supplemental education">
          <ul>
            <li><a href='https://www.amazon.com/Social-Ref-Become-Better-Referee/dp/1793133549'>The Social Ref book</a></li>
          </ul>
        </CollapsibleSection>
      </section>
    </main >
  );
};

export default App;