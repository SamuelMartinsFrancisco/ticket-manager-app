import { STORE_USER_TOKEN_KEY } from "@/constants";
import { SecureStoreService } from "@/utils/secure-store/secure-store.service";
import axios from "axios";

export const SERVER_BASE_URL = process.env.EXPO_PUBLIC_SERVER_BASE_URL;

if (!SERVER_BASE_URL) {
  throw new Error('The server base url environment variable must be set');
}

const secureStoreService = new SecureStoreService();

export const api = axios.create({
  baseURL: SERVER_BASE_URL,
  timeout: 10_000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await secureStoreService.getValueFor(STORE_USER_TOKEN_KEY);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } finally {
    return config;
  }
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorStatus = error.response?.status ?? error.status;

    if (errorStatus === 401) {
      await secureStoreService.removeValueFor(STORE_USER_TOKEN_KEY)
    }

    throw error;
  }
);
