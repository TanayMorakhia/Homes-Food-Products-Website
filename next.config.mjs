/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
} else if (isGithubActions) {
  repo = 'Homes-Food-Products-Website';
}

const basePath = isGithubActions ? `/${repo}` : '';

const nextConfig = {
  ...(isGithubActions ? { output: 'export' } : {}),
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
