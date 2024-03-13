import { NextApiRequest, NextApiResponse } from "next";
import { generateImage } from "@/util/ImageGenerator/generateImage";

// {
//   background_removal:"briaai/RMBG-1.4", // image to image // bg-removal
//   painting_photos:"ProGamerGov/Min-Illust-Background-Diffusion", // text to image best for paintings images
//   logo_maker:"artificialguybr/LogoRedmond-LogoLoraForSDXL-V2",   // text to image best for logo
//   text_to_image"stabilityai/stable-diffusion-xl-base-1.0"        // text to image best for overall images
//   3d_style_render:"goofyai/3d_render_style_xl"          // text to image
//   3d_style_render:"artificialguybr/3DRedmond-V1"          // text to image
//   3d_style_render:"peft-internal-testing/artificialguybr__3DRedmond-V1"          // text to image
//   openjourney_open_source_option :"prompthero/openjourney-v4"                    // text-to-image
// }

const negative_prompt = "bad quality, nsfw, bad anatomy,extra limbs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await generateImage(
    req,
    res,
    "latent-consistency/lcm-lora-sdxl",
    // "artificialguybr/3DRedmond-V1",
    negative_prompt
  );
}
