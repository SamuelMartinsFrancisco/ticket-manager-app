import * as SecureStore from 'expo-secure-store';
import { secureStoreService } from './secure-store.service';

jest.mock('expo-secure-store');

const mockSetItemAsync = jest.mocked(SecureStore.setItemAsync);
const mockGetItemAsync = jest.mocked(SecureStore.getItemAsync);

const SAVE_ERROR_MESSAGE =
  'Both key and value params are required to save to Secure Store, and must be non-empty strings';
const GET_KEY_ERROR_MESSAGE =
  'The key param is required to get value from Secure Store, and must be a non-empty string';
const NOT_FOUND_ERROR_MESSAGE = (key: string) =>
  `The value for key ${key} was not found in Secure Store`;

describe('secureStoreService', () => {
  let service: secureStoreService;

  beforeEach(() => {
    service = new secureStoreService();
    jest.resetAllMocks();
  });

  it('should save valid key and value successfully', async () => {
    mockSetItemAsync.mockResolvedValue(undefined);

    await expect(service.save('username', 'john@example.com')).resolves.toBeUndefined();

    expect(mockSetItemAsync).toHaveBeenCalledTimes(1);
    expect(mockSetItemAsync).toHaveBeenCalledWith('username', 'john@example.com');
  });

  it('should reject when key sanitizes to empty string', async () => {
    await expect(service.save('   ', 'someValue')).rejects.toThrow(SAVE_ERROR_MESSAGE);
    expect(mockSetItemAsync).not.toHaveBeenCalled();
  });

  it('should reject when value sanitizes to empty string', async () => {
    await expect(service.save('validKey', '')).rejects.toThrow(SAVE_ERROR_MESSAGE);
    expect(mockSetItemAsync).not.toHaveBeenCalled();
  });

  it('should return the stored value for an existing key', async () => {
    const token = 'secret-token-123';
    mockGetItemAsync.mockResolvedValue(token);

    const result = await service.getValueFor('authToken');

    expect(result).toBe(token);
    expect(mockGetItemAsync).toHaveBeenCalledTimes(1);
    expect(mockGetItemAsync).toHaveBeenCalledWith('authToken');
  });

  it('should reject when key for getValueFor sanitizes to empty string', async () => {
    await expect(service.getValueFor('   ')).rejects.toThrow(GET_KEY_ERROR_MESSAGE);
    expect(mockGetItemAsync).not.toHaveBeenCalled();
  });

  it('should reject when the key does not exist in Secure Store', async () => {
    const missingKey = 'missingKey';
    mockGetItemAsync.mockResolvedValue(null);

    await expect(service.getValueFor(missingKey)).rejects.toThrow(
      NOT_FOUND_ERROR_MESSAGE(missingKey)
    );
    expect(mockGetItemAsync).toHaveBeenCalledTimes(1);
    expect(mockGetItemAsync).toHaveBeenCalledWith(missingKey);
  });
});