import { expect, test } from '@playwright/test';

test('guest can add an Audi TT to Garage', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Guest log in' }).click();
  await expect(page).toHaveURL(/panel\/garage/);

  await page.getByRole('button', { name: 'Add car' }).click();
  await page.getByLabel('Brand').selectOption('Audi');
  await page.getByLabel('Model').selectOption('TT');
  await page.getByRole('spinbutton', { name: 'Mileage' }).fill('12000');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page).toHaveURL(/panel\/garage/);
  await expect(page.getByText('Audi TT', { exact: true })).toBeVisible();
});
