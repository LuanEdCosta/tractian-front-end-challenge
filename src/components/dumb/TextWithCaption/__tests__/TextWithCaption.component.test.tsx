import { render } from '@testing-library/react'

import { TextWithCaption } from '../TextWithCaption.component'

describe('TextWithCaption', () => {
  it('should render the caption and the text', async () => {
    const { getByText } = render(
      <TextWithCaption text="TEXT" caption="CAPTION" />,
    )

    expect(getByText('TEXT')).toBeVisible()
    expect(getByText('CAPTION')).toBeVisible()
  })

  it('should accept passing a node to the text prop', async () => {
    const { getByText } = render(
      <TextWithCaption
        text={
          <span>
            <span>NODE</span>
          </span>
        }
        caption="CAPTION"
      />,
    )

    expect(getByText('NODE')).toBeVisible()
    expect(getByText('CAPTION')).toBeVisible()
  })
})
