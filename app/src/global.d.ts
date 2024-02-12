/// <reference types="svelte" />
declare module '*.svelte'

// fix the error - "Cannot find module svelte-micro or its corresponding type declarations.ts(2307)"
declare module "svelte-micro"