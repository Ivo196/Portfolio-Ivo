---
title: AI - Image To Text Generator App
publishDate: 2023-01-010 00:00:00
img: /assets/15.1.png
img_alt: AI - Image To Text Generator App
description: |
tags:
  - Hugging Face
  - Next Js  
  - NLP 
---
### AI - Image To Text Generator App
> Deep Learning - NLP 

This project will generate relevant alt text for images using AI.

How it works? 

It uses an ML modal from Salesforce called BLIP on Replicate to generate relevant alt text for images. You can feed the Next.js API route an image as a query param and it will return a one sentence description of that image.

Clone and Deploya
Execute create-next-app with pnpm to bootstrap the example:

"pnpm create next-app --example https://github.com/vercel/examples/tree/main/solutions/alt-tag-generator"

After cloning the repo, go to Replicate to make an account and put your API key in a file called .env.local.

Then, run the application in the command line and it will be available at http://localhost:3000.

"pnpm dev"

To use the API route, go to the link below in your browser or run a curl command in your terminal to get a sample result. Feel free to replace the dub.sh link with a link to any image.

curl http://localhost:3000/api/generate?imageUrl=YOUR-IMAGE-URL



##### <a href="https://github.com/Ivo196/generate-ImageToText-AI-NextJs" target="_blank">GitHub AI - Image To Text Generator</a>

