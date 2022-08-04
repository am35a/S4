<script lang="ts">
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
    <h3 id="BackgroundColor">Background color</h3>
    <p>
        The classes from <b>bg-...-10</b> to <b>bg-...-90</b> make color transparent in percentage which point in the end of.
        Using <b>bg-transparent</b> class make background transparent.
    </p>
    <div class="d-grid g-2 p-2 bg-positive border border-positive rounded">
        <div class="d-flex g-2">
            <Button
                class="btn-secondary {defaultExtraColorsInterval ? 'active' : ''}"
                on:click = {() => defaultExtraColorsInterval ? defaultExtraColorsInterval = null : defaultExtraColorsInterval = 10 }
            >
                default extra colors {defaultExtraColorsInterval ? 'hide' : 'show'}
            </Button>
        </div>
        <div class="d-grid g-2 cols-2">
            <div class="d-flex flex-column-reverse g-2 bg-negative">
                {#if defaultExtraColorsInterval}
                    {#each Array(9) as _, i}
                        <div class="bg-{defaultColorsArr[0]}-{(i + 1) * 10} p-4 color-{defaultColorsArr[1]} text-center">
                            bg-{defaultColorsArr[0]}-{(i + 1) * 10}
                        </div>
                    {/each}
                {/if}
                <div class="bg-{defaultColorsArr[0]} p-4 color-{defaultColorsArr[1]} text-center">
                    bg-{defaultColorsArr[0]}
                </div>
            </div>
            <div class="d-flex flex-column-reverse g-2">
                {#if defaultExtraColorsInterval}
                    {#each Array(9) as _, i}
                        <div class="bg-{defaultColorsArr[1]}-{(i + 1) * 10} p-4 color-{defaultColorsArr[0]} text-center">
                            bg-{defaultColorsArr[0]}-{(i + 1) * 10}
                        </div>
                    {/each}
                {/if}
                <div class="bg-{defaultColorsArr[1]} p-4 color-{defaultColorsArr[0]} text-center">
                    bg-{defaultColorsArr[1]}
                </div>
            </div>
        </div>
    </div>
    
    <p>
        The <b>bg-...-l</b> and <b>bg-...-d</b> classes set light or dark shades for accent background colors.
    </p>
    <div class="d-grid g-2 p-2 bg-positive rounded">
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
</section>