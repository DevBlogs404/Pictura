import { HfInference } from "@huggingface/inference";

export function getHfInference(): HfInference {
  const token = process.env.API_TOKEN;
  if (!token) {
    throw new Error("API_TOKEN environment variable not set");
  }

  return new HfInference(token);
}
