import { test, expect } from '@playwright/test';

const UI_URL= "http://localhost:5173/";

test('should allow the user to sign in', async ({ page }) => {
  await page.goto(UI_URL);//go to the page 

  //get the sign in button
  await page.getByRole("link", { name: "Sign in"}).click();

  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();

  await page.locator("[name=email]").fill("1@1.com");
  await page.locator("[name=password]").fill("password123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Sign in avvenuto!")).toBeVisible();
  await expect(page.getByRole("link", { name: "Auto noleggiata"})).toBeVisible();
  await expect(page.getByRole("link", { name: "Mie pratiche"})).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out"})).toBeVisible();
});

test("should allow user to register", async({ page }) => {
  //Generate a random email for every test
  const testEmail = `test_register_${Math.floor(Math.random()*90000)+ 10000}@test.com`;
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign in" }).click();
  await page.getByRole("link", { name: "Crea un account qui" }).click();
  await expect(page.getByRole("heading", { name: "Crea un account "})).toBeVisible();

  await page.locator("[name=firstName]").fill("test_nome");
  await page.locator("[name=lastName]").fill("test_cognome");
  await page.locator("[name=email]").fill(testEmail);
  await page.locator("[name=password]").fill("password123");
  await page.locator("[name=confirmPassword]").fill("password123");

  await page.getByRole("button", { name: "Crea Account" }).click();

  await expect(page.getByText("Registrazione avvenuta")).toBeVisible();
  await expect(page.getByRole("link", { name: "Auto noleggiata"})).toBeVisible();
  await expect(page.getByRole("link", { name: "Mie pratiche"})).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out"})).toBeVisible();
})