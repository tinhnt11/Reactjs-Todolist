import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import for the custom matchers
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // Ensure 'learn react' exists in App component
  expect(linkElement).toBeInTheDocument(); // Check if the element is in the document
});
