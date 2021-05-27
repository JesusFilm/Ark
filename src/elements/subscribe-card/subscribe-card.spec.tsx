import React from 'react'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeCard } from './subscribe-card'

it('should allow submission of valid email', async () => {
  const handleSubmit = jest.fn()
  const { getByRole, getByText } = render(
    <SubscribeCard onSubmit={handleSubmit} />
  )
  const subscribeButton = getByRole('button', { name: 'Subscribe' })
  userEvent.click(subscribeButton)
  await waitFor(() => expect(getByText('Required')).toBeTruthy())
  userEvent.type(getByRole('textbox', { name: 'Email' }), 'test')
  await waitFor(() => expect(getByText('Invalid email')).toBeTruthy())
  userEvent.type(getByRole('textbox', { name: 'Email' }), '@example.com')
  await waitFor(() =>
    expect(
      getByRole('button', { name: 'Subscribe' }).getAttribute('disabled')
    ).toEqual(null)
  )
  userEvent.click(subscribeButton)
  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith(
      { email: 'test@example.com' },
      expect.objectContaining({})
    )
  )
  expect(getByRole('alert', { name: 'Success' }).textContent).toEqual(
    "You've successfully subscribed: test@example.com."
  )
})
