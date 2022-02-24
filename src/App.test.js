import { render } from '@testing-library/react';
import { App } from './App';


// tutorial : https://www.youtube.com/watch?v=-bmdf1oATQo
// documentations :
// Jest : https://jestjs.io/docs/getting-started
// Enzyme : https://www.npmjs.com/package/enzyme

// NOTE: jest is automatically installed when you do "npx create-react-app"





// Using the old style testing bacause the new React update is not yet supported with Enzyme.
describe('Testing Globally', () => {

  test('App: find ".app-main" className', () => {
  //   const { container } = render(<App />)
  //   const linkElement = container.querySelector('.app-main')
  //   expect(linkElement).toBeInTheDocument()
  });

});