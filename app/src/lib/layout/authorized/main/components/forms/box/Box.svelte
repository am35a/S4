<script lang="ts">
    import Input from 'component/Input.svelte'

    let fontSizesObj: { [key: string]: any }={
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

    let inputsObj={
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
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Types</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each Object.entries(inputsObj.typeObj) as [key, value]}
                    <button
                        on:click={() => inputType = key}
                        class="btn btn{value}"
                        class:active={inputType === key}
                        type="button"
                        disabled={inputType === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--flex gap--md flex-wrap--wrap justify-content--evenly padding--md background-color--positive border-radius--md">
            <div class="display--grid grid-template-columns--2 gap--sm">
                <b class="justify-self--end align-self--center">Default</b>
                <div>
                    <Input class="{inputClass}" name="boxes" type={inputType}/>
                </div>
                {#if inputType === 'Checkbox'}
                    <b class="justify-self--end align-self--center">Default Indeterminate</b>
                    <div>
                        <Input class="{inputClass}" type={inputType} indeterminate={true}/>
                    </div>
                {/if}
                <b class="justify-self--end align-self--center">Сhecked</b>
                <div>
                    <Input class="{inputClass}" name="boxes" type={inputType} checked/>
                </div>
                <b class="justify-self--end align-self--center">Disabled</b>
                <div>
                    <Input class="{inputClass}" type={inputType} disabled/>
                </div>
                {#if inputType === 'Checkbox'}
                    <b class="justify-self--end align-self--center">Disabled indeterminate</b>
                    <div>
                        <Input class="{inputClass}" type={inputType} disabled indeterminate={true}/>
                    </div>
                {/if}

                <b class="justify-self--end align-self--center">Сhecked & Disabled</b>
                <div>
                    <Input class="{inputClass}" type={inputType} checked disabled/>
                </div>
            </div>
        </div>        
    </div>
</section>