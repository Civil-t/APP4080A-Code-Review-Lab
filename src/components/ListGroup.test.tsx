// ListGroup.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import ListGroupComponent from './ListGroup';

import '@testing-library/jest-dom/extend-expect';

import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

import '@testing-library/jest-dom/extend-expect';

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeInTheDocument(): R;
        }
    }
}

expect.extend({
    toBeInTheDocument(received) {
        const pass = received && received instanceof HTMLElement && document.body.contains(received);
        if (pass) {
            return {
                message: () => `expected ${received} not to be in the document`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} to be in the document`,
                pass: false,
            };
        }
    },
});

test('renders ListGroup component', () => {
        render(<ListGroupComponent />);

        // Check if the component renders the title "My Curriculum Vitae"
        expect(screen.getByText('My Curriculum Vitae')).toBeInTheDocument();

        // Check if the component renders links for each section
        expect(screen.getByText('Personal Details and Photo')).toBeInTheDocument();
        expect(screen.getByText('Hobbies and Interests')).toBeInTheDocument();
        expect(screen.getByText('Education Background')).toBeInTheDocument();
        expect(screen.getByText('Special Skills')).toBeInTheDocument();
        expect(screen.getByText('Extra Curriculum Activities')).toBeInTheDocument();

        // You can add more specific checks as needed.
});

