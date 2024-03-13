import { NextApiRequest, NextApiResponse } from "next";
import { getHfInference } from "@/util/Inference/inference";
import { generateImage } from "@/util/ImageGenerator/generateImage";

const hf = getHfInference();

// {
//   painting_photos:"ProGamerGov/Min-Illust-Background-Diffusion", // text to image best for paintings images
//   indian_painting:"calihyper/trad-kor-landscape-ink-wash-painting",
//   "zthrx/painting_generator",
//    "GREESHMA720/converting-instructions-to-painting"
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await generateImage(
    req,
    res,
    "GREESHMA720/converting-instructions-to-painting"
  );
}
