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

    let inputsObj: any={
        typeObj: {
            Text: 'text' as string,
            Search: 'search' as string,
            Password: 'password' as string,
            Time: 'time' as string,
            Url: 'url' as string,
            Number: 'number' as string,
            Date: 'date' as string,
            Datetime: 'datetime-local' as string
        },
    }
    let inputType: string = 'Text'

    export let inputClass: string = ''
    $: {
        if (fontSize !== 'Default')
            inputClass = `${inputClass} ${fontSizesObj[fontSize]}`
    }

    let bindtext: string = 'Text here'

</script>

<section>
    <h3 id="text">Text</h3>
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
                    <Input class="{inputClass}" bind:value={bindtext} type={inputsObj.typeObj[inputType]}/>
                </div>
                <b class="justify-self--end align-self--center">Active</b>
                <div>
                    <Input class="{inputClass} active" bind:value={bindtext} type={inputsObj.typeObj[inputType]}/>
                </div>
                <b class="justify-self--end align-self--center">Disabled</b>
                <div>
                    <Input class="{inputClass}" bind:value={bindtext} type={inputsObj.typeObj[inputType]} disabled/>
                </div>
                <b class="justify-self--end align-self--center">Active & Disabled</b>
                <div>
                    <Input class="{inputClass} active" bind:value={bindtext} type={inputsObj.typeObj[inputType]} disabled/>
                </div>
            </div>
        </div>        
    </div>
</section>