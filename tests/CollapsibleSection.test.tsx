import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CollapsibleSection from '../src/CollapsibleSection';

describe('CollapsibleSection component', () => {
    test('renders title', () => {
        const { container } = render(
            <CollapsibleSection
                sectionTitle="Test Section"
                containedItems={[<div key="a">Content</div>]}
            />);

        const htmlString = container.innerHTML;
        expect(htmlString).toContain('Test Section');
    });

    test('renders child count when collapsed', () => {
        const { container } = render(
            <CollapsibleSection
                sectionTitle="x"
                containedItems={[
                    <span key="a">a</span>,
                    <span key="b">b</span>,
                    <span key="c">c</span>]}
            />
        );

        const htmlString = container.innerHTML;
        expect(htmlString).toContain('(3)');
        expect(htmlString).toContain('to expand');
    });

    test('child count disappears when expanded', async () => {
        const { container } = render(
            <CollapsibleSection
                sectionTitle="x"
                containedItems={[
                    <span key="a">a</span>,
                    <span key="b">b</span>,
                    <span key="c">c</span>]}
            />
        );

        const header = container.getElementsByClassName('collapsiblesection-always-visible-header')[0];
        await userEvent.click(header);

        const htmlString = container.innerHTML;
        expect(htmlString).not.toContain('(3)');
        expect(htmlString).toContain('to collapse');
    });

    test('doesn\'t render if empty', () => {
        const { container } = render(
            <CollapsibleSection
                sectionTitle="Empty Section"
                containedItems={[]}
            />
        );

        const htmlString = container.innerHTML;
        expect(htmlString).toBe('');
    });
});
