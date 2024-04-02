<script>
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'

    let groupObj={
        Horizontal: 'grp-h',
        Vertical: 'grp-v',
    }
    let groupVariant = 'Horizontal'

    let buttonsObj={
        variantsObj: {
            Default: '',
            Alt: 'alt',
            Outline: 'outline'
        },
        colorsObj: {
            Default: '',
            Primary: '-primary',
            Secondary: '-secondary',
            Info: '-info',
            Success: '-success',
            Warning: '-warning',
            Error: '-error',
        }
    }
    let buttonVariant = 'Default'
    let buttonColor = 'Default'

    let buttonClass = ''
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
        S4 makes possible to combine various objects into groups. The classes are responsible for vertical grouping <b>grp-v</b> and horizontal <b>grp-h</b>.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Variants</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each Object.entries(buttonsObj.variantsObj) as [key, value]}
                    <button
                        on:click={() => buttonVariant = key}
                        class="btn btn-{value}"
                        class:active={buttonVariant === key}
                        type="button"
                        disabled={buttonVariant === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Colors</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each Object.entries(buttonsObj.colorsObj) as [key, value]}
                    <button
                        on:click={() => buttonColor = key}
                        class="btn btn{value}"
                        class:active={buttonColor === key}
                        type="button"
                        disabled={buttonColor === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Directions</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each Object.entries(groupObj) as [key, value]}
                    <button
                        on:click={() => groupVariant = key}
                        class="btn btn{value}"
                        class:active={groupVariant === key}
                        type="button"
                        disabled={groupVariant === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--flex gap--md flex-wrap--wrap justify-content--evenly align-items--center padding--md background-color--positive border-radius--md">
            <div class="{groupObj[groupVariant]}">
                <Button class="{buttonClass}">Default</Button>
                <Button class="{buttonClass} active">Active</Button>
                <Button class="{buttonClass}" disabled>Disabled</Button>
                <Button class="{buttonClass} active" disabled>Act./Dis.</Button>
            </div>
        </div>
        <div class="display--grid gap--md">
            <div class="display--grid gap--md">
                <b>Code</b>
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