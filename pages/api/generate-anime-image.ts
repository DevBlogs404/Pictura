import { NextApiRequest, NextApiResponse } from "next";
import { getHfInference } from "@/util/Inference/inference";
import { generateImage } from "@/util/ImageGenerator/generateImage";

const hf = getHfInference();

const negative_prompt =
  "nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name";

// {
//   for_anime_boys:"Koolchh/AnimeBoysXL-v1.0",
//   for_anime_overall:"Yntec/animeTWO"
//   "cagliostrolab/animagine-xl-3.0"
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await generateImage(
    req,
    res,
    "cagliostrolab/animagine-xl-3.0",
    negative_prompt
  );
}
