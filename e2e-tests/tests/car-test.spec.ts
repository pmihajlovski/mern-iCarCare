import { test, expect } from "@playwright/test";
import path from "path";

const UI_URL = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  // get the sign in button
  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name=email]").fill("1@1.com");
  await page.locator("[name=password]").fill("password123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Sign in avvenuto!")).toBeVisible();
});

test("should allow user to add a hotel", async ({ page }) => {
  await page.goto(`${UI_URL}add-car`);

  await page.locator('[name="brand"]').fill("Test Brand");
  await page.locator('[name="model"]').fill("Test Model");
  await page.locator('[name="city"]').fill("Test city");
  await page.locator('[name="targa"]').fill("Test targa");
  await page.locator('[name="anno"]').fill("2000");
  await page
    .locator('[name="description"]')
    .fill("This is a description for the Test Targa");

  await page.getByText("SUV").click();

  await page.setInputFiles('[name="imageFiles"]', [
    path.join(__dirname, "files", "1.png"),
    path.join(__dirname, "files", "2.png"),
  ]);

  await page.getByRole("button", { name: "Salva" }).click();
  await expect(page.getByText("Auto Salvata!")).toBeVisible();
});