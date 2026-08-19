import resourceData from "../src/resources/resources.json";
import Ruleset from "../src/types/Ruleset";

describe('resources.json file', () => {
    test('has unique IDs', () => {
        const idSet = new Set();
        const topLevelResourceArrays = Object.values(resourceData);
        for (const topLevelResourceArray of topLevelResourceArrays) {
            for (const resource of topLevelResourceArray) {
                expect(idSet.has(resource.id)).toBe(false);
                idSet.add(resource.id);
            }
        }
    });

    test('has valid rulesets', () => {
        const validRulesets = new Set<string>(Object.keys(Ruleset));
        const topLevelResourceArrays = Object.values(resourceData);
        for (const topLevelResourceArray of topLevelResourceArrays) {
            for (const resource of topLevelResourceArray) {
                expect(resource.rulesets.length).toBeGreaterThan(0);
                for (const ruleset of resource.rulesets) {
                    expect(validRulesets.has(ruleset)).toBe(true);
                }
            }
        }
    });
});
