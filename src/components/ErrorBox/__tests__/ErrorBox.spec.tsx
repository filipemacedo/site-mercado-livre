import React from 'react';
import { mount, shallow } from 'enzyme';
import ErrorBox from '..';

describe('ErrorBox Component', () => {
  it('should render ErrorBox', () => {
    const app = shallow(<ErrorBox />);

    expect(app).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const app = mount(<ErrorBox description="message" title="title" />);

    expect(app.find('.error__icon img')).toBeDefined();
    expect(app.find('.error__message .error__message-title')).toBeDefined();
    expect(
      app.find('.error__message .error__message-description'),
    ).toBeDefined();
  });

  it('should render with correct custom props', () => {
    const app = mount(<ErrorBox description="message" title="title" />);

    expect(app.find('.error__message .error__message-title').text()).toBe(
      'title',
    );
    expect(app.find('.error__message .error__message-description').text()).toBe(
      'message',
    );
  });
});
