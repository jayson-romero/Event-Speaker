This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

The 15 Build in React Hooks

BASIC HOOKS

- useState : manage state and function component
- useEffect : manage how the state changes in different points life cycle
- useContext : allow to easily share data including state data accross component hierarchy

ADDITIONAL HOOKS

- useRef ,
- useImperativeHandle,
- useLayoutEffect,
- useDebugValue : design to give us a better way to manage diretly the browser DOM

- useReducer : give us more powerful and flexible way to manage state

- useCallbak,
- useMemo : use to maximize the react app performance by effectively caching different part of application by minimizing browse load

- useDefferedValue,
- useTransition : technique we can use to make our app's feel more responsive to users

- useId: brings benefits for app that inlcudes server side rendering

LIBRARY HOOKS

- useSyncExternalStore,
- useInsertionEffect : design not so much for application developers, but for those are building libraries.

MOST USE HOOKS

- useState
- useEffect
- useContext
- useReducer
- useCallbak.
- useMemo
- useRef : allow is to get a reference diretly to the DOM
- useDefferedValue
- useTransition
