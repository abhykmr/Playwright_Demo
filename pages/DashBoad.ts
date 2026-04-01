import { Page, expect } from "@playwright/test";

export class Dashboard {

  constructor(private page: Page) {}

  async verifyDashboard() {

    await expect(this.page).toHaveURL(/inventory/);

  }

}