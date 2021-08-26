import { writable } from 'svelte/store'

export let user: any = writable(
    {
        isAuthorized: false as boolean, // false as default
        email: 'test@triafly.ru' as string,
        password: '123456' as string,
        settings: {
            isDarkTheme: true as boolean,
            initialScale: 1 as number, // 1 as default for scale on screentouch devises
        } as any
    }
)