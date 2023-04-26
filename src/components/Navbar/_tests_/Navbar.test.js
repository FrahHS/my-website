import { render, screen } from '@testing-library/react';
import App from '../../../App';
import Navbar from '../Navbar';

test('renders navbar router links', () => {
  render(<App />);
  const linkHome = screen.getByText(/Home/i);
  const linkAbout = screen.getByText(/About/i);
  const linkContact = screen.getByText(/Contact me/i);
  const linkBlog = screen.getByText(/Blog/i);
  expect(linkHome).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
  expect(linkContact).toBeInTheDocument();
  expect(linkBlog).toBeInTheDocument();
});
