import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setProject(conf.appwriteProjectId)
      .setEndpoint(conf.appwriteUrl);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      console.log("Creating account with:", { email, name });

      // account.create(userId, email, password, name)
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      console.log("Account creation response:", userAccount);

      if (userAccount) {
        // Log in immediately after account creation
        console.log("Logging in user after account creation");
        const session = await this.login({ email, password });
        console.log("Session created:", session);
        return userAccount;
      }

      return userAccount;
    } catch (error) {
      console.error("createAccount error:", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      console.log("Attempting login with email:", email);
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log("Login session response:", session);
      return session;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      console.log("✅ User authenticated:", user.email);
      return user;
    } catch (error) {
      // Silently return null for unauthenticated users (401)
      if (error.code === 401) {
        return null;
      }
      // Log only unexpected errors
      console.error("❌ getCurrentUser error:", error);
      return null;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
