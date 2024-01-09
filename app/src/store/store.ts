import { writable } from 'svelte/store'

export const appData = writable(
    // below data use as default
    {
        title: 'Nameless' as string,
        logo: {
            full: '' as string
        },
        initialScale: 1 as number,
        // theme: 'light' as string,
        fontFamily: 'default' as string
    }
)

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
        isAuthorized: false as boolean, // false as default
        email: 'guest@mobitoon.ru' as string,
        password: '123456' as string,
        settings: {
            theme: 'light' as string, // light or dark
            initialScale: 1 as number, // 1 as default for scale on screentouch devises
        } as any
    }
)


/*
    For color theme settings
*/
export const styleFiles = writable({})

export const styleSettings = writable(
    {
        default: {
            stylesLoaded: false as boolean, // styles.css
            setuping: false as boolean,
            variables: {
                colors: {
                    // separated colors 
                    '--lightness': undefined as unknown as number,
                    '--lightness-offset': undefined as unknown as number,
                    '--chroma': undefined as unknown as number,
                    '--alfa': undefined as unknown as number,
                    '--primary-hue': undefined as unknown as number,
                    '--secondary-hue': undefined as unknown as number,
                    '--info-hue': undefined as unknown as number,
                    '--success-hue': undefined as unknown as number,
                    '--warning-hue': undefined as unknown as number,
                    '--error-hue': undefined as unknown as number,
                    // composite colors
                    '--primary-l': undefined as unknown as string,
                    '--primary': undefined as unknown as string,
                    '--primary-d': undefined as unknown as string,
                    '--primary-m': undefined as unknown as string,
                    '--secondary-l': undefined as unknown as string,
                    '--secondary': undefined as unknown as string,
                    '--secondary-d': undefined as unknown as string,
                    '--secondary-m': undefined as unknown as string,
                    '--info-l': undefined as unknown as string,
                    '--info': undefined as unknown as string,
                    '--info-d': undefined as unknown as string,
                    '--info-m': undefined as unknown as string,
                    '--success-l': undefined as unknown as string,
                    '--success': undefined as unknown as string,
                    '--success-d': undefined as unknown as string,
                    '--success-m': undefined as unknown as string,
                    '--warning-l': undefined as unknown as string,
                    '--warning': undefined as unknown as string,
                    '--warning-d': undefined as unknown as string,
                    '--warning-m': undefined as unknown as string,
                    '--error-l': undefined as unknown as string,
                    '--error': undefined as unknown as string,
                    '--error-d': undefined as unknown as string,
                    '--error-m': undefined as unknown as string
                }
            }
        }
    }
)
