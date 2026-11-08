// Reads a server environment variable and fails loudly, with the name, when it is missing or empty.
export const getEnv = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable ${name}`);
  }

  return value;
};
