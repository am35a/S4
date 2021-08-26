<script lang="ts">
    import { user } from '../store/store'
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
    <meta name="viewport" content="width=device-width, initial-scale={$user.settings.initialScale}">
    <title>TriaFly</title>
    <link rel="stylesheet" href="/css/{deviceCSSPrefix}utilities.css"> <!-- load only appropriate styles utilities -->
    <!-- <link rel="stylesheet" href="/css/inverse-colors.css"> -->
</svelte:head>