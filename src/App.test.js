import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders a message', () => {
	render(<App />);
	const element = screen.getByText(/Happy hacking/i);
	expect(element).toBeInTheDocument();
});
