<script lang="ts">
    import Input from 'component/Input.svelte'

    let fontSizesObj: { [key: string]: any }={
        Default: '' as string,
        xxs: 'font-size--xxs' as string,
        xs: 'font-size--xs' as string,
        sm: 'font-size--sm' as string,
        md: 'font-size--md' as string,
        lg: 'font-size--lg' as string,
        xl: 'font-size--xl' as string,
        xxl: 'font-size--xxl' as string,
        xxxl: 'font-size--xxxl' as string
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