<script lang="ts">
    import { appData } from 'src/store/store'
    import { appConsole } from 'src/store/console'
    import device from 'current-device'

    const cssMap = {
        'l-d-': [ 'l-d-' ],
        'p-d-': [ 'l-d-', 'p-d-' ],
        'l-t-': [ 'l-d-', 'l-t-' ],
        'p-t-': [ 'l-d-', 'p-d-', 'l-t-', 'p-t-' ],
        'l-m-': [ 'l-d-', 'p-m-', 'l-m-' ],
        'p-m-': [ 'l-d-', 'p-d-', 'p-m-' ]
    }

    // start - device and orientation
    let deviceOrientation: string = device.orientation
    let deviceCSSPrefix: string = getDeviceCSSPrefix()

    function getDeviceCSSPrefix(): string {
        return `${deviceOrientation === 'portrait' ? 'p' : 'l'}-${device.type === 'mobile' ? 'm' : device.type === 'tablet' ? 't' : 'd'}-`
    }

    device.onChangeOrientation(newOrientation => {
        if(deviceOrientation !== newOrientation) {
            deviceOrientation = newOrientation
            deviceCSSPrefix = getDeviceCSSPrefix()
        }
    })
    // ^ the end
</script>

<!-- Here is below only dynamic change head content -->
<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale={$appData.initialScale}">
    <title>{$appData.title}</title>
    <link
        rel="stylesheet"
        href="/css/styles.css"
        on:load={() => appConsole.message('styles.css: loaded', 'success')}
    >

    <link
        rel='stylesheet'
        href='/css/settings/variables.css'
        on:load={() => appConsole.message('variables.css: loaded', 'success')}
    >
    <link
        rel="stylesheet"
        href="/css/settings/{deviceCSSPrefix}variables.css"
        on:load={() => appConsole.message(`${deviceCSSPrefix}variables.css: loaded`, 'success')}
    ><!-- load only appropriate styles utilities -->

    {#each cssMap[deviceCSSPrefix] as item}
        <link
            rel="stylesheet"
            href="/css/{item}utilities.css"
            on:load={() => appConsole.message(`${item}utilities.css: loaded`, 'success')}
        >
    {/each}
    <style>
        /* * {
            scrollbar-width: none;
        } */

        /* * {
            scrollbar-width: thin;
            scrollbar-color: var(--positive-color-50) var(--negative-color-50);
        } */

        /* ::-webkit-scrollbar-thumb {
            background-color: var(--secondary-color);
        }
        ::-webkit-scrollbar-track {
            background: var(--secondary-color-d);
        } */
    </style>
</svelte:head>
