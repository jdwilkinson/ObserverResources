import { useState } from "react";
import Ruleset from "./types/Ruleset";

const RulesetPicker = (props: { onRulesetChange: (ruleset: string) => void }) => {
    const [activeRuleset, setActiveRuleset] = useState<string>(Ruleset.USAU);

    function renderAllRulesets(): JSX.Element[] {
        let first: boolean = true;
        let returnArray: JSX.Element[] = [];

        returnArray.push(<span><b>Ruleset:</b> </span>);

        for (const ruleset of Object.values(Ruleset)) {
            if (!first) {
                returnArray.push(<span> &nbsp; | </span>);
            }

            const checked = activeRuleset === ruleset;
            returnArray.push(renderRulesetOption(ruleset, checked));
            first = false;
        }

        return returnArray;
    };

    function renderRulesetOption(ruleset: string, checked: boolean): JSX.Element {
        return (<>
            <input
                type="radio"
                name="ruleset"
                id={`ruleset-${ruleset}`}
                key={`ruleset-${ruleset}`}
                value={ruleset}
                checked={checked}
                onChange={() => { setActiveRuleset(ruleset); props.onRulesetChange(ruleset); }}
            />
            <label
                key={`ruleset-label-${ruleset}`}
                htmlFor={`ruleset-${ruleset}`}>
                {ruleset}
            </label>
        </>);
    }

    return (<div className="ruleset-picker">
        {renderAllRulesets()}
    </div>);
}

export default RulesetPicker;