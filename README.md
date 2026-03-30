This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Create Project

npx create-next-app@15.1.6 project-name

npm install -D tailwindcss@3.4.1 postcss autoprefixer

npm i clsx tailwind-merge tailwindcss-animate

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Next config

```bash
On next.config.ts paste in:
images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
},
```

## Tailwind Config

In src, create folder \_lib:
create utils.ts and paste in:

```bash
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Prisma Config Using MySQL

In src, create folder \_lib:

```bash
create prisma.ts and paste in:

import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

// vou usar para chamar meu banco de dados
export const db = prisma;

```

First, run the install

```bash
npm i prisma@6.2.1 --save-dev

npm i @prisma/client@6.2.1 @prisma/adapter-mariadb dotenv

npx prisma init --datasource-provider mysql
```

Second, run migrations and generate Prisma Client

```bash
npx prisma migrate dev --name init

npx prisma generate
```

To run seeds, needs to:

```bash
add to package.json, below scripts ->
"prisma": {
    "seed": "ts-node prisma/seed.ts"
}

install -> npm i -D ts-node

run -> npx prisma db seed
```

## Prettier with tailwindcss

First run install

```bash
npm install -D prettier prettier-plugin-tailwindcss

Create on root prettierrc.json, paste in
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tabWidth": 2,
  "semi": false
}
```

## GIT Hooks

```bash
npm i -D husky lint-staged git-commit-msg-linter

npx husky init

Inside the folder .husky change file pre-commit paste in: npx lint-staged

Create on root .lintstagedrc.json, paste in
{
"*.ts?(x)": ["eslint --fix", "prettier --write"]
}

- Create inside folder .husky -> commit-msg
  paste in:
  .git/hooks/commit-mgs $1
```

## Package.json

```bash
on scripts paste in:
"prepare": "husky && prisma generate"
```
