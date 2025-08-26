import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the RiskPilot text', () => {
  render(<App />);
  expect(screen.getByText(/RiskPilot/i)).toBeInTheDocument();
});
