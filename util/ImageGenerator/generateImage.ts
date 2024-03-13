import { getHfInference } from "../Inference/inference";
import { NextApiRequest, NextApiResponse } from "next";

const hf = getHfInference();

export async function generateImage(
  req: NextApiRequest,
  res: NextApiResponse,
  model: string,
  negativePrompt?: string
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { prompt } = req.body;

    const response = await hf.textToImage({
      inputs: "masterpiece, best quality" + prompt,
      model: model,
      parameters: {
        negative_prompt: negativePrompt,
      },
    });

    let buffer = Buffer.from(await response.arrayBuffer());
    let url = "data:" + response.type + ";base64," + buffer.toString("base64");

    res.status(200).json({ url });
  } catch (error) {
    console.log("error generating image: ", error);

    return res.status(500).json({ error: "internal server error" });
  }
}
