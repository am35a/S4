<script>
    import Precode from 'component/Precode.svelte'

    let alertsObj = {
        variantsObj: {
            Default: '',
            Alt: 'alt',
            Outline: 'outline'
        },
        colorsObj: {
            Primary: '-primary',
            Secondary: '-secondary',
            Info: '-info',
            Success: '-success',
            Warning: '-warning',
            Error: '-error',
        }
    }
    let alertVariant = 'Default'
    let alertColor = 'Primary'
    
    let alertClass = ''
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

    let customClasses = ''
</script>

<article>
    <h2 id="alerts">Alerts</h2>
    <p>
        S4 alerts are available in classes <b>alert alert-...</b>, <b>alert alert-alt...</b> and <b>alert alert-outline...</b> in various visual solutions.
    </p>
    <div class="d-grid g-5">
        <div class="alert alert-info">
            <span class="ico" style="--ico-image:url(/icons/info-circle.svg);">&nbsp;</span>
            Pay attention: Self-closing alerts are available as svelte components. Learn more about them by the <a href="/components/alerts">link</a>.
        </div>
        <div class="d-grid g-4">
            <b>Variants</b>
            <div class="d-flex fw-wrap g-3">
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
            <div class="d-flex fw-wrap g-3">
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
            <b>Customize</b>
            <input
                id="customClasses"
                bind:value={customClasses}
                type="text"
                placeholder="Type utility classes to customizing the component"
            >
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-flex p-4 bgc-positive br">
                <div class="alert {alertClass} {customClasses}">
                    {alertVariant} {customClasses ? 'custom' : ''} variant of alert in {alertColor} color with <a href={'#'}>link</a>.
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <div class="d-grid g-4">
                <b>HTML</b>
                <Precode>
                    {
`<div class="alert ${alertClass} ${customClasses}">
    Alert primary message with <a href={'#'}>link</a>
</div>
`
                    }
                </Precode>
            </div>
        </div>
    </div>
</article>