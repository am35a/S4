<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'

    let accentColorsArr: string[] = [ 'primary', 'secondary', 'info', 'success', 'warning', 'error' ]

    let accentExtraColorsObj = {
        light: '-l',
        default: '',
        dark: '-d'
    }
    let accentExtraColor: string = accentExtraColorsObj.default
</script>

<section class="d-grid g-2">
    <h3 id="BackgroundColor">Background color</h3>
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
                    {item} {Object.keys(accentExtraColorsObj).find(key => accentExtraColorsObj[key] === accentExtraColor)} color
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