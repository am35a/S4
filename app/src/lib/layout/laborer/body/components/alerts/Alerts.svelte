<script lang="ts">
    import Alert from 'component/Alert.svelte'
    import Precode from 'component/Precode.svelte'

    let alertsObj : { [key: string]: any } = {
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
        },
        typeObj: {
            Permanent: '' as string,
            Closable: 'alert-closable'
        }
    },
        alertVariant: string = 'Default',
        alertColor: string = 'Primary',
        alertType: string = 'Permanent',

        alertClass: string = ''

    $: {
        alertClass = fnalertClass()
    
        function fnalertClass() {
            let classesString = ''

            if (alertsObj.variantsObj[alertVariant] && alertsObj.colorsObj[alertColor])
                classesString = `alert-${alertsObj.variantsObj[alertVariant]}${alertsObj.colorsObj[alertColor]}`
            else
                if (alertsObj.variantsObj[alertVariant])
                    classesString = `alert-${alertsObj.variantsObj[alertVariant]}`
                else
                    if (alertsObj.colorsObj[alertColor])
                        classesString = `alert${alertsObj.colorsObj[alertColor]}`
            
            if (alertsObj.typeObj[alertType])
                classesString = `${classesString} ${alertsObj.typeObj[alertType]}`

            return classesString
        }
    }
</script>

<article>
    <h2 id="alerts">Alerts</h2>
    <p>
        To create self destroyed alerts, add the class name - <b>alert-closable</b>.
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
            <b>Type</b>
            <div class="d-flex g-3">
                {#each Object.entries(alertsObj.typeObj) as [key, value]}
                    <button
                        on:click={() => alertType = key}
                        class="btn btn{value}"
                        class:active = {alertType === key}
                        type="button"
                        disabled = {alertType === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-flex p-4 bgc-positive br">
                <Alert class="{alertClass} mb-0">
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

<Alert class="${alertClass}">
    Alert component place.
</Alert>
`
                    }
                </Precode>
            </div>
        </div>
    </div>
</article>