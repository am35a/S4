<script lang="ts">
    let fontSizesObj: { [key: string]: any } = {
        Default: '' as string,
        xxs: 'fs-xxs' as string,
        xs: 'fs-xs' as string,
        sm: 'fs-sm' as string,
        md: 'fs-md' as string,
        lg: 'fs-lg' as string,
        xl: 'fs-xl' as string,
        xxl: 'fs-xxl' as string,
        xxxl: 'fs-xxxl' as string
    }
    let fontSize: string = 'Default'

    let inputsObj: { [key: string]: any } = {
        variantsObj: {
            Default: '' as string,
            Alt: 'alt' as string,
            Outline: 'outline' as string
        },
        colorsObj: {
            Default: '' as string,
            Primary: '-primary' as string,
            Secondary: '-secondary' as string,
            Info: '-info' as string,
            Success: '-success' as string,
            Warning: '-warning' as string,
            Error: '-error' as string,
        }
    }
    let inputVariant: string = 'Default'
    let inputColor: string = 'Default'

    export let inputClass: string = ''
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
                        class:active = {inputVariant === key}
                        type="button"
                        disabled = {inputVariant === key}
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
                        class:active = {inputColor === key}
                        type="button"
                        disabled = {inputColor === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Sizes</b>
            <div class="d-flex fw-wrap g-3 ai-center">
                {#each Object.entries(fontSizesObj) as [key, value]}
                    <button
                        on:click={() => fontSize = key}
                        class="btn {value}"
                        class:active = {fontSize === key}
                        type="button"
                        disabled = {fontSize === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
    </div>
</section>