import { client } from './client';

export async function getBosses() {
  const response = await client.from('bosses').select('*');

  return response.body;
}