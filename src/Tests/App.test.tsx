// Tests
import { render } from '@testing-library/react';
// Redux
import { Provider } from 'react-redux';
import { store } from '../Store/store';
// Components
import { App } from '../App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
