import { render as rtlRender } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

export const renderComponentForTest = (
  component: ReactElement,
  {
    store,
    ...renderOptions
  }: {
    store: Store;
  }
) => {
  //  <Provider store={store}>

  const Wrapper: FC = ({ children }) => <Provider store={store}>{children}</Provider>;

  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
