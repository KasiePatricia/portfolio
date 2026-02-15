import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home section', () => {
  it('renders the hero text and name', () => {
    render(<Home />)

    expect(screen.getByText('Hi, my name is')).toBeInTheDocument()
    expect(screen.getByText('Kasie Ugwu')).toBeInTheDocument()
  })

  it('renders the call to action button', () => {
    render(<Home />)

    const ctas = screen.getAllByText('Get in touch')
    expect(ctas.length).toBeGreaterThan(0)
  })
})
