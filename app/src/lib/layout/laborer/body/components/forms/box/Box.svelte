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
            Radio: 'radio' as string,
            Checkbox: 'checkbox' as string
        }
    }
    let inputType: string = 'Checkbox'

    export let inputClass: string = ''
    $: {
        if (fontSize !== 'Default')
            inputClass = `${inputClass} ${fontSizesObj[fontSize]}`
    }
</script>

<section>
    <h3 id="box">Boxes</h3>
    <!-- <p>
        <b>FrmTxt</b>
    </p> -->
    <div class="d-grid g-5">
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
                    <Input class="{inputClass}" name="cb" type={inputType}/>
                </div>
                {#if inputType === 'Checkbox'}
                    <b class="js-end as-center">Default Indeterminate</b>
                    <div>
                        <Input class="{inputClass}" name="cb" type={inputType} indeterminate={true}/>
                    </div>
                {/if}
                <b class="js-end as-center">Сhecked</b>
                <div>
                    <Input class="{inputClass}" name="cb" type={inputType} checked/>
                </div>
                <b class="js-end as-center">Disabled</b>
                <div>
                    <Input class="{inputClass}" name="cb" type={inputType} disabled/>
                </div>
                {#if inputType === 'Checkbox'}
                    <b class="js-end as-center">Disabled indeterminate</b>
                    <div>
                        <Input class="{inputClass}" name="cb" type={inputType} disabled indeterminate={true}/>
                    </div>
                {/if}

                <b class="js-end as-center">Сhecked & Disabled</b>
                <div>
                    <Input class="{inputClass}" name="cb" type={inputType} checked disabled/>
                </div>
            </div>
        </div>        
    </div>
</section>