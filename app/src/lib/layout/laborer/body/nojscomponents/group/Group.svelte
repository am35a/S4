<script lang="ts">
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'

    let groupObj = {
        Horizontal: 'grp-h' as string,
        Vertical: 'grp-v' as string,
    }
    let groupVariant: string = 'Horizontal'

    let buttonsObj = {
        variantsObj: {
            Default: '' as string,
            Alt: 'alt' as string,
            Outline: 'outline' as string
        },
        colorsObj: {
            Default: '' as string,
            Primary: '-primary' as string,
            Outline: '-secondary' as string,
            Info: '-info' as string,
            Success: '-success' as string,
            Warning: '-warning' as string,
            Error: '-error' as string,
        }
    }
    let buttonVariant: string = 'Default'
    let buttonColor: string = 'Default'

    let buttonClass: string = ''
    $: {
        buttonClass = fnButtonClass()
    
        function fnButtonClass() {
            if (buttonsObj.variantsObj[buttonVariant] && buttonsObj.colorsObj[buttonColor])
                return `btn-${buttonsObj.variantsObj[buttonVariant]}${buttonsObj.colorsObj[buttonColor]}`
            else
                if (buttonsObj.variantsObj[buttonVariant])
                    return `btn-${buttonsObj.variantsObj[buttonVariant]}`
                else
                    if (buttonsObj.colorsObj[buttonColor])
                        return `btn${buttonsObj.colorsObj[buttonColor]}`
                    else
                        return ''
        }
    }
</script>

<article>
    <h2 class="ButtonGroup">Group</h2>
    <p>
        S4 makes possible to combine various objects into groups. The classes are responsible for vertical grouping <b>.grp-v</b> and horizontal <b>.grp-h</b>.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Variants</b>
            <div class="d-flex g-3">
                {#each Object.entries(buttonsObj.variantsObj) as [key, value]}
                    <button
                        on:click={() => buttonVariant = key}
                        class="btn btn-{value}"
                        class:active = {buttonVariant === key}
                        type="button"
                        disabled = {buttonVariant === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Colors</b>
            <div class="d-flex g-3">
                {#each Object.entries(buttonsObj.colorsObj) as [key, value]}
                    <button
                        on:click={() => buttonColor = key}
                        class="btn btn{value}"
                        class:active = {buttonColor === key}
                        type="button"
                        disabled = {buttonColor === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Directions</b>
            <div class="d-flex g-3">
                {#each Object.entries(groupObj) as [key, value]}
                    <button
                        on:click={() => groupVariant = key}
                        class="btn btn{value}"
                        class:active = {groupVariant === key}
                        type="button"
                        disabled = {groupVariant === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-flex g-4 fw-wrap jc-evenly ai-center p-4 bgc-positive br">
            <div class="{groupObj[groupVariant]}">
                <Button class="{buttonClass}">Default</Button>
                <Button class="{buttonClass} active">Active</Button>
                <Button class="{buttonClass}" disabled>Disabled</Button>
                <Button class="{buttonClass} active" disabled>Act./Dis.</Button>
            </div>
        </div>
        <div class="d-grid g-4">
            <div class="d-grid g-4">
                <b>HTML</b>
                <Precode>
                    {
`<div class="${groupObj[groupVariant]}">
    /* Place for a buttons, alerts or other as HTML tags or Svelte components. */
</div>
`
                    }
                </Precode>
            </div>
        </div>
    </div>

</article>