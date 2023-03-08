import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { App } from './App'
import type { Post } from './types'
import { posts } from './mockData'

export default {
  title: 'App',
  component: App,
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = () => <App />

export const Loading = Template.bind({})
Loading.parameters = {
 
}

export const Data = Template.bind({})
Data.parameters = {
 
}

export const Error = Template.bind({})
Error.parameters = {
  msw: {
    handlers: [ ],
  },
}
