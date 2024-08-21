import { useState } from 'react'
import { EXAMPLES } from '../data'
import TabButton from './TabButton'
import Tabs from './Tabs'

import Section from './Section'

export default function Example() {
  let tabContent = <p>Please select a topic</p>
  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn)
  }

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }

  return (
    <Section title='Examples' id='examples'>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  )
}
