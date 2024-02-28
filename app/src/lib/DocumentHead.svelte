<script>
    import { appData } from 'src/store/store'
    import { appConsole } from 'src/store/console'
    import device from 'current-device'

    const styleDependencyMap = {
        'l_d_': [ 'l_d_' ],
        'p_d_': [ 'l_d_', 'p_d_' ],
        'l_t_': [ 'l_d_', 'l_t_' ],
        'p_t_': [ 'l_d_', 'p_d_', 'l_t_', 'p_t_' ],
        'l_m_': [ 'l_d_', 'p_m_', 'l_m_' ],
        'p_m_': [ 'l_d_', 'p_d_', 'p_m_' ]
    }

    // start - device and orientation
    let deviceOrientation = device.orientation
    let deviceCSSPrefix = getDeviceCSSPrefix()

    function getDeviceCSSPrefix() {
        return `${deviceOrientation === 'portrait' ? 'p' : 'l'}_${device.type === 'mobile' ? 'm' : device.type === 'tablet' ? 't' : 'd'}_`
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
    <!-- <link
        rel='stylesheet'
        href='/css/settings/variables.css'
        on:load={() => appConsole.message('variables.css: loaded', 'success')}
    > -->
    <!-- <link
        rel="stylesheet"
        href="/css/settings/{deviceCSSPrefix}variables.css"
        on:load={() => appConsole.message(`${deviceCSSPrefix}variables.css: loaded`, 'success')}
    > -->
    <!-- load only appropriate styles utilities -->
    {#each styleDependencyMap[deviceCSSPrefix] as item}
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