<script lang="ts">
    import Input from 'component/Input.svelte'

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

    let inputsObj: any = {
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
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Types</b>
            <div class="d-flex fw-wrap g-3">
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
        <div class="d-flex g-4 fw-wrap jc-evenly p-4 bgc-positive br-md">
            <div class="d-grid gtc-2 g-3">
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
</section>