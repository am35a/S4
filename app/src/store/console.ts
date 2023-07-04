import { writable } from "svelte/store"

function f() {
    let data = {
        isWindowLoad: false as boolean,
        history: [
            {
                text: 'window: start loading' as string,
                type: 'default' as string
            }
        ],
        state: 'open' as string, // states: close, open or half
    }

    const { subscribe, set } = writable(data)

    return {
        subscribe,
        windowLoaded: (value: boolean) => {
            data.isWindowLoad = value
            appConsole.message('window: loaded', 'success')
            appConsole.setState()
            set(data)
        },
        message: (text: string, type: string = 'default') => {
            data.history.push({text, type})
            set(data)
        },
        setState: () => {
            console.log('setState')
            switch(data.state) {
                case 'close':
                    console.log('close / half')
                    data.state = 'half'
                    break
                case 'open':
                    console.log('open / close')
                    data.state = 'close'
                    break
                case 'half':
                    console.log('half / close')
                    data.state = 'close'
                    break
            }
            set(data)
        }
    }
}

export const appConsole = f()