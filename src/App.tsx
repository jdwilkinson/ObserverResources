import { useState } from 'react';
import CollapsibleSection from './CollapsibleSection';
import Resources from './resources/Resources';
import Ruleset from './types/Ruleset';
import RulesetPicker from './RulesetPicker';

const App = () => {
  const [activeRuleset, setActiveRuleset] = useState<string>(Ruleset.USAU);

  function onRulesetChange(newRuleset: string) {
    setActiveRuleset(newRuleset);
  }

  return (
    <main>
      <section className="main-section">
        <h1 className="topmost-header">Resources for observers</h1>

        <hr className="hr-separator" />

        <RulesetPicker onRulesetChange={onRulesetChange} />

        <CollapsibleSection
          sectionTitle="Rules"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.rules, activeRuleset)} />

        <CollapsibleSection
          sectionTitle="Observer manual"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.observerManuals, activeRuleset)} />

        <CollapsibleSection
          sectionTitle="Referee manual"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.refereeManuals, activeRuleset)} />

        <CollapsibleSection
          sectionTitle="Jerseys"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.jerseys, activeRuleset)} />

        <CollapsibleSection
          sectionTitle="Scorecards"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.scorecards, activeRuleset)} />

        <CollapsibleSection
          sectionTitle="Shoes"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.shoes, activeRuleset)} />

        {/* TODO: Scour Discord for shorts, jackets, hats, etc */}
        {/* <CollapsibleSection sectionTitle="Apparel">
          ...
        </CollapsibleSection> */}

        <CollapsibleSection
          sectionTitle="Radios"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.radios, activeRuleset)} />

        <CollapsibleSection
          sectionTitle="Observer University videos"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.observerUniversityVideos, activeRuleset)} />

        <CollapsibleSection
          sectionTitle="Books"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.books, activeRuleset)} />

        <CollapsibleSection
          sectionTitle="Rules quizzes"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.rulesQuizzes, activeRuleset)} />

        <CollapsibleSection
          sectionTitle="Rules clinics"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.rulesClinics, activeRuleset)} />

        {/* TODO: Consider whether this is the right place to put video resources */}
        {/* <CollapsibleSection sectionTitle="Video replays">
          ...
          </CollapsibleSection> */}

        <CollapsibleSection
          sectionTitle="Apps"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.apps, activeRuleset)} />

        <CollapsibleSection
          sectionTitle="Head Observer Tools"
          containedItems={Resources.getRenderedResourcesForRuleset(Resources.headObserverTools, activeRuleset)} />
      </section>

      <section>
        <div className="footer">
          Last updated <b>2026-08-21</b>; see&nbsp;
          <a href='https://github.com/jdwilkinson/ObserverResources/commits/main/' target='_blank'>
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