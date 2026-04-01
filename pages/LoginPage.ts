import  {page} from "@playwright/test";

export class LoginPage {
    private page: page;

    constructor(page:page){
        this.page = page;
    }

    async goto(){
        await page.goto("/login");
    }

    async login(email: string, password:string){
        await this.page.getByLabel('Email').fil(email);

    await this.page.getByLabel('Password').fill(password);

    await this.page.getByRole('button', { name: 'Login' }).click();
    }
}