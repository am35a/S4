<script>
    let fontSizesObj={
        Default: '',
        xxs: 'fs-xxs',
        xs: 'fs-xs',
        sm: 'fs-sm',
        md: 'fs-md',
        lg: 'fs-lg',
        xl: 'fs-xl',
        xxl: 'fs-xxl',
        xxxl: 'fs-xxxl'
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
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Variants</b>
            <div class="d-flex fw-wrap g-3">
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
        <div class="d-grid g-4">
            <b>Colors</b>
            <div class="d-flex fw-wrap g-3">
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
        <div class="d-grid g-4">
            <b>Sizes</b>
            <div class="d-flex fw-wrap g-3 align-items--center">
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