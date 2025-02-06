import { useState } from 'react'
import { EXAMPLES } from '../data'
import TabButton from './TabButton'
import Tabs from './Tabs'

import Section from './Section'

export default function Example() {
  let tabContent = <p data-test='no-tab'>Please select a topic</p>
  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn)
  }

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content' data-test="tab-content">
        <h3 data-test="tab-content-title">{EXAMPLES[selectedTopic].title}</h3>
        <p data-test="tab-content-desc">{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code data-test="tab-content-code">{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }

  return (
    <Section title='Examples' id='examples' data-test='examples-section'>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
              data-test='components-tab'
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
              data-test='jsx-tab'
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
              data-test='props-tab'
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
              data-test='state-tab'
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
