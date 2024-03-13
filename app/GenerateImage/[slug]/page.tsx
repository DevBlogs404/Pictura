"use client";
import React from "react";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";

const GenerateImagePage = () => {
  const params = useParams<{ slug: string }>();
  //   console.log(slug);

  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    // if (!prompt.trim()) {
    //   setError("Please enter a prompt.");
    //   return;
    // }

    setIsLoading(true);
    try {
      // Your logic to generate an image using your AI model
      // This could be an API call to your backend or a client-side function
      // For demo purposes, we'll just set a placeholder image

      let endpoint;

      switch (params?.slug) {
        case "anime":
          endpoint = "/api/generate-anime-image";
        case "painting":
          endpoint = "/api/generate-painting-image";
        default:
          endpoint = "/api/generate-image";
          break;
      }
      const response = await axios.post(endpoint, { prompt });
      setGeneratedImage(response.data.url);
      setError(null);
      // console.log(response);
    } catch (err) {
      setError("Failed to generate image.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <Head>
        <title>Generate Image</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Generate Image</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md w-full max-w-sm"
        />
        <button
          onClick={generateImage}
          disabled={isLoading}
          className="bg-[#716b67] hover:bg-[#554f4b] text-white font-bold py-2 px-4 rounded"
        >
          {isLoading ? "Generating..." : "Generate"}
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && generatedImage && (
        <div className="mt-4">
          <img
            src={generatedImage}
            alt="Generated Image"
            className=""
            width={400}
          />
        </div>
      )}
    </div>
  );
};

export default GenerateImagePage;
