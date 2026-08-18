import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CollapsibleSection from '../src/CollapsibleSection';

describe('CollapsibleSection component', () => {
    test('renders title', () => {
        const { container } = render(<CollapsibleSection sectionTitle="Test Section">Content</CollapsibleSection>);

        const htmlString = container.innerHTML;
        expect(htmlString).toContain('Test Section');
    });

    test('renders child count when collapsed', () => {
        const { container } = render(
            <CollapsibleSection sectionTitle="x">
                <span>a</span>
                <span>b</span>
                <span>c</span>
            </CollapsibleSection>
        );

        const htmlString = container.innerHTML;
        expect(htmlString).toContain('(3)');
        expect(htmlString).toContain('to expand');
    });

    test('child count disappears when expanded', async () => {
        const { container } = render(
            <CollapsibleSection sectionTitle="x">
                <span>a</span>
                <span>b</span>
                <span>c</span>
            </CollapsibleSection>
        );

        const header = container.getElementsByClassName('collapsiblesection-always-visible-header')[0];
        await userEvent.click(header);

        const htmlString = container.innerHTML;
        expect(htmlString).not.toContain('(3)');
        expect(htmlString).toContain('to collapse');
    });

    test('doesn\'t render if empty', () => {
        const { container } = render(<CollapsibleSection sectionTitle="Empty Section" />);

        const htmlString = container.innerHTML;
        expect(htmlString).toBe('');
    });
});
