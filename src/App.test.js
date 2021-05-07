import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.applyFocusVisiblePolyfill = null;
});

test('increments count', () => {
  render(<App />);
  const button = screen.getByText(/increment/i);
  expect(button).toBeInTheDocument();
  button.click();
  const countText = screen.getByText(/count: 1/i);
  expect(countText).toBeInTheDocument();
});
