## NEXT DOC LINKS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## SUPABASE TYPE GENERATION STEPS

1. login to supabase CLI
    - run
        npx supabase login
    - get login token from provided link and log in
    - run
        run supabase command with project id and file destination
        npx supabase gen types typescript --project-id jfbyqhzzothodtxblxdi > lib/database.types.ts^C

## CLI COMMANDS

    -lint and fix errors on all files if able
        npx eslint "src/**/*.{js,jsx,ts,tsx}" --fix
