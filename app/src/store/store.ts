import { writable } from 'svelte/store'

export let appData = writable(
    {
        title: "Nameless",
        logo: {
            full: ""
        },
        initialScale: 1,
        theme: "default",
        fontFamily: "default"
    }
)
export let userData = writable(
    {
        data: {
            name: "",
            surname: "",
            patronymic: "",
            email: ""
        },
        aside: {
            width: "max",
            items: [
                {
                    id: 1,
                    icon: "home",
                    title: "Home page",
                    segment: "home"
                }
            ]
        }
    }
)

export let app: any = writable(
    {
        name: 'TriaFly' as string,
        isAsideExpand: false as boolean,
        fullscreen: false as boolean,
        popupLoader: false as boolean,
        popupToaster: false as boolean,
        popupSettings: false as boolean,
        modalLoader: false as boolean,
        currentSegment: 'home' as string
    }
)

export let user: any = writable(
    {
        isAuthorized: true as boolean, // false as default
        email: 'test@triafly.ru' as string,
        password: '123456' as string,
        settings: {
            isDarkTheme: true as boolean,
            initialScale: 1 as number, // 1 as default for scale on screentouch devises
        } as any
    }
)