import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';

import { jsComponent as App } from '../src/app.re';
import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('App', module)
  .add('main story', () => <div>Hello!</div>);

storiesOf('App/First', module)
  .addDecorator(withKnobs)
  .add('run my app', () => <App message={text("message", "Hello there!")} />)
  .add('run my app 2', () => <App message={text("message", "Yo!")} />);
