import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  if(process.env.NODE_ENV== "development"){
    console.log('My client is running ' + process.env.NODE_ENV + ' environment');
  }
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

});
