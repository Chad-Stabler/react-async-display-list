import { client } from './client';

export async function getBosses() {
  const response = await client.from('bosses').select('*');

  return response.body;
}

export async function getAnimals() {
  const response = await client.from('animals'). select('*');

  return response.body;
}

export async function getToys() {
  const response = await client.from('toys'). select('*');

  return response.body;
}

export async function getShows() {
  const response = await client.from('shows'). select('*');

  return response.body;
}