<script lang="ts">
    import Input from "component/Input.svelte"


    let fontSizesObj = {
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

    let inputsObj = {
        typeObj: {
            Text: 'text' as string,
            Password: 'password' as string,
            Time: 'time' as string,
            Url: 'url' as string,
            Week: 'week' as string,
            Month: 'month' as string,
            Email: 'email' as string,
            Date: 'date' as string,
            Datetime: 'datetime-local' as string
        },
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
    let inputType: string = 'Text'
    let inputVariant: string = 'Default'
    let inputColor: string = 'Default'

    let inputClass: string = ''
    $: {
        inputClass = fninputClass()

        if (fontSize !== 'Default')
            inputClass = `${inputClass} ${fontSizesObj[fontSize]}`

        function fninputClass() {
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



    let bindtext: string = 'Text here'

</script>

<section>
    <h3 id="text">Text</h3>
    <!-- <p>
        <b>FrmTxt</b>
    </p> -->

    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Variants</b>
            <div class="d-flex g-3">
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
            <div class="d-flex g-3">
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
            <div class="d-flex g-3 ai-center">
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
        <div class="d-grid g-4">
            <b>Types</b>
            <div class="d-flex g-3">
                {#each Object.entries(inputsObj.typeObj) as [key, value]}
                    <button
                        on:click={() => inputType = key}
                        class="btn btn{value}"
                        class:active = {inputType === key}
                        type="button"
                        disabled = {inputType === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-flex g-4 fw-wrap jc-evenly p-4 bgc-positive br">
            <div class="d-grid cols-2 g-3">
                <b class="js-end as-center">Default</b>
                <div>
                    <Input class="{inputClass}" bind:value={bindtext} type={inputsObj.typeObj[inputType]}/>
                </div>
                <b class="js-end as-center">Active</b>
                <div>
                    <Input class="{inputClass} active" bind:value={bindtext} type={inputsObj.typeObj[inputType]}/>
                </div>
                <b class="js-end as-center">Disabled</b>
                <div>
                    <Input class="{inputClass}" bind:value={bindtext} type={inputsObj.typeObj[inputType]} disabled/>
                </div>
                <b class="js-end as-center">Active & Disabled</b>
                <div>
                    <Input class="{inputClass} active" bind:value={bindtext} type={inputsObj.typeObj[inputType]} disabled/>
                </div>
            </div>
        </div>        
    </div>

    <!-- <div class="d-grid">
        <FrmTxt bind:value={bindtext} placeholder="placeholder">
            <svelte:fragment slot="label">Label</svelte:fragment>
        </FrmTxt>
        <FrmTxt bind:value={bindtext} placeholder="placeholder">
            <svelte:fragment slot="label">Label</svelte:fragment>
        </FrmTxt>
    </div> -->
    <hr class="my-4">
    {bindtext}
</section>