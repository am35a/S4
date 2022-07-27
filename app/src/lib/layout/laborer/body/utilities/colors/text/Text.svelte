<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'

    let defaultColorsArr: string[] = [ 'positive', 'negative' ]
    let defaultExtraColorsInterval: number = null

    let accentColorsArr: string[] = [ 'primary', 'secondary', 'info', 'success', 'warning', 'error' ]

    let accentExtraColorsObj = {
        light: '-l',
        default: '',
        dark: '-d'
    }
    let accentExtraColor: string = accentExtraColorsObj.default
</script>

<section class="d-grid g-2">
    <h3 id="Color">Text color</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bg-positive rounded-md">
        <div class="d-flex g-2">
            <Button
                class="btn-secondary {defaultExtraColorsInterval ? 'active' : ''}"
                on:click = {() => defaultExtraColorsInterval ? defaultExtraColorsInterval = null : defaultExtraColorsInterval = 10 }
            >
                default extra colors {defaultExtraColorsInterval ? 'hide' : 'show'}
            </Button>
        </div>
        <div class="d-grid g-2 cols-2">
            <div class="col-span-2 p-4 color-transparent">color-transparent</div>
            <div class="d-grid g-2 bg-negative">
                {#if defaultExtraColorsInterval}
                    {#each Array(9) as _, i}
                        <div class="color-{defaultColorsArr[0]}-{(i + 1) * 10} p-4">
                            color-{defaultColorsArr[0]}-{(i + 1) * 10}
                        </div>
                    {/each}
                {/if}
                <div class="color-{defaultColorsArr[0]} p-4">
                    color-{defaultColorsArr[0]}
                </div>
            </div>
            <div class="d-grid g-2">
                {#if defaultExtraColorsInterval}
                    {#each Array(9) as _, i}
                        <div class="color-{defaultColorsArr[1]}-{(i + 1) * 10} p-4">
                            color-{defaultColorsArr[0]}-{(i + 1) * 10}
                        </div>
                    {/each}
                {/if}
                <div class="color-{defaultColorsArr[1]} p-4">
                    color-{defaultColorsArr[1]}
                </div>
            </div>
        </div>
    </div>
    
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bg-positive rounded-md">
        <div class="d-flex g-2">
            {#each Object.entries(accentExtraColorsObj) as [key, value]}
                <Button
                    class="btn-secondary {accentExtraColor === value ? 'active' : ''}"
                    on:click = {() => accentExtraColor = value}
                    disabled = {accentExtraColor === value}
                >{key}</Button>
            {/each}
        </div>
        <div class="d-grid g-2 cols-2">
            {#each accentColorsArr as item }
                <div class="bg-{item}{accentExtraColor} p-4 color-positive">
                    <!-- {item} {Object.keys(accentExtraColorsObj).find(key => accentExtraColorsObj[key] === accentExtraColor)} color -->
                    bg-{item}{accentExtraColor}
                </div>
            {/each}
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {#each accentColorsArr as item }
                    {
`<div class="bg-${item}${accentExtraColor} p-4 color-positive">
    ${item}${accentExtraColor} color
</div>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</section>