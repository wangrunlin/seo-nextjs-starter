# SEO Next.js Starter

[![中文](https://img.shields.io/badge/中文-Click_here-brightgreen?style=for-the-badge)](README-zh.md)
[![English](https://img.shields.io/badge/English-Click_here-brightgreen?style=for-the-badge)](README.md)

[![GitHub][GitHub]][GitHub URL]
[![GitHub stars][Stars]][Stars URL]
[![GitHub forks][Forks]][Forks URL]
[![GitHub issues][Issues]][Issues URL]
[![GitHub license][License]][License URL]
[![Last Commit][Last Commit]][Last Commit URL]

[![use this template][Use This Template]][Use This Template URL]

[![Deploy with Vercel][Deploy with Vercel]][Deploy with Vercel URL]

## Preview

You can see a live preview of the application at [SEO Next.js Starter Preview][Preview URL].

## Use This Template

You can use this template to create your own project by clicking the button below:

[![Use this template][Use This Template]][Use This Template URL]

## About This Template

The SEO Next.js Starter is designed to help developers quickly set up a robust and SEO-friendly web application using Next.js. This template provides a solid foundation for building applications that are optimized for search engines and performance.

### Features

- Server-side rendering for better SEO
- Static site generation for fast performance
- Dynamic routing for flexible navigation
- Built-in CSS and Sass support
- API routes for backend functionality

## Getting Started with This Template

To get started with this template, follow these steps:

1. Clone the repository.
2. Install dependencies using `pnpm install`.
3. Create a `.env` file based on the provided `.env.example` file and fill in your own values.
4. Optionally, you can edit the `src/config.ts` file directly to set your configuration values.
5. Run the development server with `pnpm dev`.

## Who Uses This Template

This template is designed for developers and teams looking to quickly set up SEO-friendly applications using Next.js. Here are some examples of projects and companies that utilize this template or similar setups:

- [Toolbox Hub](https://toolbox-hub.com) - Online Toolbox | Free & Useful Online Tools Collection
- [Stair Calculator](https://stair-calculator.net) - Stair Calculator Pro: Precise Design & Construction Measurements

### Submit Your Website

If you have created a project using this template and would like to share it, please submit your website link on the [Submit Your Website](https://github.com/wangrunlin/seo-nextjs-starter/issues/new?assignees=wangrunlin&labels=website%2C+submission&template=submit-website.yml&title=%5BWebsite+Submission%5D%3A+) issue.

## Environment Variables

You can configure your application using environment variables. The `.env.example` file contains the following variables:

```dotenv
# replace with your own site name
NEXT_PUBLIC_SITE_NAME="SEO Next.js Starter"

# replace with your own title
NEXT_PUBLIC_TITLE="SEO Next.js Starter - A Starter Template for SEO Optimized Next.js Projects"

# replace with your own description
NEXT_PUBLIC_DESCRIPTION="A simple and easy-to-use starter template for building SEO optimized Next.js applications with best practices and performance in mind."

# replace with your own URL
NEXT_PUBLIC_URL="https://example.com"

# <optional> if you want to use Google Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="your-google-analytics-id"
```

## Vercel Environment Variables

If you are deploying your application to Vercel, you can set environment variables directly in the Vercel dashboard. Follow these steps:

1. Go to your Vercel dashboard and select your project.
2. Navigate to the "Settings" tab.
3. Scroll down to the "Environment Variables" section.
4. Click on "Add" to create a new environment variable.
5. Enter the variable name (e.g., `NEXT_PUBLIC_SITE_NAME`) and its corresponding value.
6. Repeat this for all the environment variables you need to set.
7. After adding the variables, redeploy your application to apply the changes.

For more information on configuring environment variables in Vercel, you can refer to the [Vercel Environment Variables Documentation][Vercel Environment Variables].

## Technical Details

### Metadata Management

In Next.js, you can manage metadata using various conventions, including `robots.ts`, `sitemap.ts`, and layout metadata in `layout.tsx`. This allows you to define how your application interacts with search engines and social media platforms. For more details, refer to the [Next.js Metadata Documentation][Next.js Metadata Documentation].

### Open Graph Image Generation

To optimize social media image generation, you can use the Vercel `@vercel/og` library. This library allows you to create dynamic Open Graph images using HTML and CSS, which can enhance how your content appears on social media platforms. For more information, check the [Open Graph Image Generation Documentation][Open Graph Image Generation Documentation].

## SEO Resources

For more information on SEO best practices and guides, check out the [Ahrefs SEO Guide][Ahrefs SEO Guide].

## Deployment

You can easily deploy your application to Vercel with a single click. Click the button below to get started:

[![Deploy with Vercel][Deploy with Vercel]][Deploy with Vercel URL]

## Documentation

For more information, check the official Next.js documentation at [nextjs.org/docs](https://nextjs.org/docs).

## Contributing

We welcome contributions! If you would like to contribute to this project, please follow the guidelines in the repository.

## License

This project is licensed under the MIT License.

[Stars]: https://img.shields.io/github/stars/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Stars URL]: https://github.com/wangrunlin/seo-nextjs-starter/stargazers
[Forks]: https://img.shields.io/github/forks/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Forks URL]: https://github.com/wangrunlin/seo-nextjs-starter/forks
[Issues]: https://img.shields.io/github/issues/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Issues URL]: https://github.com/wangrunlin/seo-nextjs-starter/issues
[License]: https://img.shields.io/github/license/wangrunlin/seo-nextjs-starter?style=for-the-badge
[License URL]: https://github.com/wangrunlin/seo-nextjs-starter/blob/main/LICENSE
[Last Commit]: https://img.shields.io/github/last-commit/wangrunlin/seo-nextjs-starter?style=for-the-badge
[Last Commit URL]: https://github.com/wangrunlin/seo-nextjs-starter/commits/main
[GitHub]: https://img.shields.io/badge/GitHub-wangrunlin%2Fseo--nextjs--starter-blue?style=for-the-badge&logo=github
[GitHub URL]: https://github.com/wangrunlin/seo-nextjs-starter
[Use This Template]: https://img.shields.io/badge/Use_this_template-Click_here-brightgreen?style=for-the-badge
[Use This Template URL]: https://github.com/new?template_name=seo-nextjs-starter&template_owner=wangrunlin
[Deploy with Vercel]: https://vercel.com/button
[Deploy with Vercel URL]: https://vercel.com/templates/next.js/seo-starter
[Preview URL]: https://seo-nextjs-starter.vercel.app/
[Vercel Environment Variables]: https://vercel.com/docs/projects/environment-variables
[Next.js Metadata Documentation]: https://nextjs.org/docs/app/api-reference/file-conventions/metadata
[Open Graph Image Generation Documentation]: https://vercel.com/docs/functions/og-image-generation
[Ahrefs SEO Guide]: https://ahrefs.com/seo
