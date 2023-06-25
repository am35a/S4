import { writable } from 'svelte/store'

export const appData = writable(
    // below data use as default
    {
        title: 'Nameless' as string,
        logo: {
            full: '' as string
        },
        initialScale: 1 as number,
        theme: 'default' as string,
        fontFamily: 'default' as string
    }
)

export const styleFiles = writable({})

/*
    For Aside.svelte component
*/
// define aside menu width
export const asideWidth = writable('max')
// aside menu expander var
export let asideExpand = writable(false)
// aside menu route items
export let asideItems = writable(
    [
        {
            id: 1 as number,
            icon: 'home' as string,
            title: 'Home page' as string,
            segment: '/home' as string
        }
    ]
)

// define curent route parth as segment for set to aside active items
export let appSegment = writable('/home')


export let userData = writable(
    // below data use as default
    {
        data: {
            name: '' as string,
            surname: '' as string,
            patronymic: '' as string,
            email: '' as string
        },
        aside: {
            width: 'max' as string,
            segment: '/home' as string,
            expand: false as boolean,
            items: [
                {
                    id: 1 as number,
                    icon: 'home' as string,
                    title: 'Home page' as string,
                    segment: '/home' as string
                }
            ]
        }
    }
)

export let app: any = writable(
    {
        name: 'S4' as string,
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
        email: 's4@mobitoon.ru' as string,
        password: '123456' as string,
        settings: {
            isDarkTheme: true as boolean,
            initialScale: 1 as number, // 1 as default for scale on screentouch devises
        } as any
    }
)