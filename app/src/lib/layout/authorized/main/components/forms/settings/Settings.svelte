<script>
    let fontSizesObj={
        Default: '',
        xxs: 'font-size--xxs',
        xs: 'font-size--xs',
        sm: 'font-size--sm',
        md: 'font-size--md',
        lg: 'font-size--lg',
        xl: 'font-size--xl',
        xxl: 'font-size--xxl',
        xxxl: 'font-size--xxxl'
    }
    let fontSize = 'Default'

    let inputsObj={
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
    let inputVariant = 'Default'
    let inputColor = 'Default'

    export let inputClass = ''
    $: {
        inputClass = fnInputClass()

        if (fontSize !== 'Default')
            inputClass = `${inputClass} ${fontSizesObj[fontSize]}`

        function fnInputClass() {
            if (inputsObj.variantsObj[inputVariant] && inputsObj.colorsObj[inputColor])
                return `frm-${inputsObj.variantsObj[inputVariant]}${inputsObj.colorsObj[inputColor]}`
            else
                if (inputsObj.variantsObj[inputVariant])
                    return `frm-${inputsObj.variantsObj[inputVariant]}`
                else
                    if (inputsObj.colorsObj[inputColor])
                        return `frm${inputsObj.colorsObj[inputColor]}`
                    else
                        return ''    
        }
    }
</script>

<section>
    <h3>Settings</h3>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Variants</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each Object.entries(inputsObj.variantsObj) as [key, value]}
                    <button
                        on:click={() => inputVariant = key}
                        class="btn btn-{value}"
                        class:active={inputVariant === key}
                        type="button"
                        disabled={inputVariant === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Colors</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each Object.entries(inputsObj.colorsObj) as [key, value]}
                    <button
                        on:click={() => inputColor = key}
                        class="btn btn{value}"
                        class:active={inputColor === key}
                        type="button"
                        disabled={inputColor === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Sizes</b>
            <div class="display--flex flex-wrap--wrap gap--sm align-items--center">
                {#each Object.entries(fontSizesObj) as [key, value]}
                    <button
                        on:click={() => fontSize = key}
                        class="btn {value}"
                        class:active={fontSize === key}
                        type="button"
                        disabled={fontSize === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
    </div>
</section>