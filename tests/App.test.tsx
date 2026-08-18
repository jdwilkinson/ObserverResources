import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App component', () => {
    test('renders successfully', () => {
        const { container } = render(<App />);

        const htmlString = container.innerHTML;
        expect(htmlString).toContain('Resources for observers');
    });

    test('has accurate last-updated date', () => {
        const { container } = render(<App />);

        const htmlString = container.getElementsByClassName('footer')[0].innerHTML;
        const today = new Date().toLocaleDateString('en-CA');
        expect(htmlString).toContain(today);
    });
});
