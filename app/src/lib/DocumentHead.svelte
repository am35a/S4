<script lang="ts">
    import { appData } from 'src/store/store'
    import device from 'current-device'

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
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/settings/{deviceCSSPrefix}variables.css"> <!-- load only appropriate styles utilities -->
    <link rel="stylesheet" href="/css/{deviceCSSPrefix}utilities.css"> <!-- load only appropriate styles utilities -->
    <link rel='stylesheet' href='/css/settings/variables.css'>
</svelte:head>

<style lang="sass">

</style>