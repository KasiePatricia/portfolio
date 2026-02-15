import { test, expect } from '@playwright/test'

test('home page shows hero content', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('Hi, my name is')).toBeVisible()
  await expect(page.getByText('Kasie Ugwu')).toBeVisible()
  await expect(page.getByText('Get in touch')).toBeVisible()
})

test('featured project link opens and is reachable', async ({ page, context }) => {
  await page.goto('/')

  const projectLink = page.getByRole('link', { name: 'Rest Countries API' })
  await expect(projectLink).toBeVisible()

  const href = await projectLink.getAttribute('href')
  expect(href).toBe('https://rest-countries-api-topaz-three.vercel.app')

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    projectLink.click(),
  ])

  await newPage.waitForLoadState('domcontentloaded')
  await expect(newPage).toHaveURL(/rest-countries-api/)
})
