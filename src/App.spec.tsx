import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { screen } from "@testing-library/dom"
import App from './App'


test('Link changes the state when hovered', () => {
  render(
    <App />
  )
  const discoverStarshipsButton = screen.getByText('Discover Starships')
  expect(discoverStarshipsButton).toBeVisible() 
})