import { writable } from "svelte/store"

function f() {
    let data = {
        isWindowLoad: false as boolean,
        history: [
            {
                text: 'window: start loading' as string,
                type: 'info' as string,
                time: undefined as string
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
            const date: Date = new Date()
            const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
            data.history.push({text, type, time})
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