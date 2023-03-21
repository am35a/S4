<script lang="ts">
    import Alert from 'component/Alert.svelte'
    import Precode from 'component/Precode.svelte'

    let alertsObj = {
        variantsObj: {
            Default: '' as string,
            Alt: 'alt' as string,
            Outline: 'outline' as string
        },
        colorsObj: {
            Primary: '-primary' as string,
            Secondary: '-secondary' as string,
            Info: '-info' as string,
            Success: '-success' as string,
            Warning: '-warning' as string,
            Error: '-error' as string,
        }
    }
    let alertVariant: string = 'Default'
    let alertColor: string = 'Primary'
    
    let alertClass: string = ''
    $: {
        alertClass = fnalertClass()
    
        function fnalertClass() {
            if (alertsObj.variantsObj[alertVariant] && alertsObj.colorsObj[alertColor])
                return `alert-${alertsObj.variantsObj[alertVariant]}${alertsObj.colorsObj[alertColor]}`
            else
                if (alertsObj.variantsObj[alertVariant])
                    return `alert-${alertsObj.variantsObj[alertVariant]}`
                else
                    if (alertsObj.colorsObj[alertColor])
                        return `alert${alertsObj.colorsObj[alertColor]}`
                    else
                        return ''
        }
    }

    let customClasses: string = ''
</script>

<article>
    <h2>Alerts</h2>
    <p>
        To add the close button for killing an alerts add the <b>alert-closable</b> class name.
    </p>

    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Variants</b>
            <div class="d-flex g-3">
                {#each Object.entries(alertsObj.variantsObj) as [key, value]}
                    <button
                        on:click={() => alertVariant = key}
                        class="btn btn-{value}"
                        class:active = {alertVariant === key}
                        type="button"
                        disabled = {alertVariant === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Colors</b>
            <div class="d-flex g-3">
                {#each Object.entries(alertsObj.colorsObj) as [key, value]}
                    <button
                        on:click={() => alertColor = key}
                        class="btn btn{value}"
                        class:active = {alertColor === key}
                        type="button"
                        disabled = {alertColor === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Custom</b>
            <input
                id="customClasses"
                bind:value={customClasses}
                type="text"
                placeholder="Type utility classes to customizing the component"
            >
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-flex g-4 p-4 bgc-positive br">
                <Alert class="{alertClass} {customClasses} alert-closable mb-0">
                    Click the close icon in the top right corner to destroy the block of alert message.
                </Alert>
            </div>        
        </div>
        <div class="d-grid g-4">
            <div class="d-grid g-4">
                <b>Svelte</b>
                <Precode>
                    {
`// before using the component, import it
// import Alert from 'component/Alert.svelte'

<Alert class="${alertClass} alert-closable">
    Alert component place.
</Alert>
`
                    }
                </Precode>
            </div>
        </div>
    </div>
</article>