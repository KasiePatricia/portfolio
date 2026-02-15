import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Jobs from './Jobs'

describe('Jobs section', () => {
  it('renders all defined roles', () => {
    render(<Jobs />)

    expect(screen.getByText("Where I've Worked")).toBeInTheDocument()
    expect(screen.getByText(/Wicrypt/)).toBeInTheDocument()
    expect(screen.getByText(/Ayika/)).toBeInTheDocument()
    expect(screen.getByText(/BetaKopa/)).toBeInTheDocument()
  })

  it('renders bullet points for each role', () => {
    render(<Jobs />)

    const bulletItems = screen.getAllByRole('listitem')
    expect(bulletItems.length).toBeGreaterThan(0)
  })
})
