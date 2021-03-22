import React from 'react';
import MyComponent from '../../../dist/collection/components/my-component/my-component';

export default {
  title: 'Demo/MyComponent',
  component: MyComponent,
  argTypes: {
    label: { type: 'text', description: 'The text which is shown as label' },
    name: { type: 'text', description: 'Is needed to reference the form data after the form is submitted' },
    disabled: {
      type: 'boolean',
      description: 'If true, the button is displayed as disabled',
      defaultValue: { summary: false },
    },
  },
};

const defaultArgs = {
  disabled: false,
};

const Template = args => {
  args.id = args.id ? args.id : 'my-component';
  setTimeout(() => {
    document.getElementById(args.id).options = [
      {
        value: 'Item 1',
        displayText: 'Item 1',
      },
      {
        value: 'Item 2',
        displayText: 'Item 2',
      },
      {
        value: 'Item 3',
        displayText: 'Item 3',
      },
    ];
  });
  return <my-component {...args}></my-component>;
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs, id: 'my-comp-default' };

export const WithLabel = Template.bind({});
WithLabel.args = { ...defaultArgs, label: 'A nice label', id: 'my-comp-label' };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true, id: 'my-comp-disabled' };
