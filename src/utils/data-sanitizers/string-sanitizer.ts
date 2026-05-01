export const sanitizeString = (value: string): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }

  let sanitizedValue = value.trim();

  return sanitizedValue;
}