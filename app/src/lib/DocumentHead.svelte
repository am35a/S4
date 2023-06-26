<script lang="ts">
    import { appData, styleFiles } from 'src/store/store'
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
    <link rel="stylesheet" href="/css/styles.css" on:load={() => $styleFiles['styles'] = true}>

    <link rel='stylesheet' href='/css/settings/variables.css'>
    <link rel="stylesheet" href="/css/settings/{deviceCSSPrefix}variables.css"> <!-- load only appropriate styles utilities -->

    {#each cssMap[deviceCSSPrefix] as item}
        <link rel="stylesheet" href="/css/{item}utilities.css">
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

<style lang="sass">

</style>