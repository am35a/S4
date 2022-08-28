<script lang="ts">
    import Button from 'component/Button.svelte'

    let defaultColorsArr: string[] = [ 'positive', 'negative' ]
    let defaultExtraColorsInterval: number = null

    let accentColorsArr: string[] = [ 'primary', 'secondary', 'info', 'success', 'warning', 'error' ]

    let accentExtraColorsObj = {
        light: '-l',
        default: '',
        dark: '-d',
        mute: '-m'
    }
</script>

<section>
    <h3 id="color">Color sets</h3>
    <p>
        The <b>color-...</b> classes allow you to set default colors for text, strokes, and other default states which use <b>currentColor</b> value.
        Use <b>color-transparent</b> class to make color or other dependencies transparent.
    </p>
    <p>
        The classes from <b>color-...-10</b> to <b>color-...-90</b> make color transparent in percentage which point in the end of.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive rounded">
        <div class="d-flex g-2">
            <Button
                class="btn-secondary {defaultExtraColorsInterval ? 'active' : ''}"
                on:click = {() => defaultExtraColorsInterval ? defaultExtraColorsInterval = null : defaultExtraColorsInterval = 10 }
            >
                default extra colors {defaultExtraColorsInterval ? 'hide' : 'show'}
            </Button>
        </div>
        <div class="d-grid g-3 cols-2">
            <div class="d-flex fd-column-reverse g-2 bgc-negative">
                {#if defaultExtraColorsInterval}
                    {#each Array(9) as _, i}
                        <div class="color-{defaultColorsArr[0]}-{(i + 1) * 10} p-4 ta-center">
                            color-{defaultColorsArr[0]}-{(i + 1) * 10}
                        </div>
                    {/each}
                {/if}
                <div class="color-{defaultColorsArr[0]} p-4 ta-center">
                    color-{defaultColorsArr[0]}
                </div>
            </div>
            <div class="d-flex fd-column-reverse g-2">
                {#if defaultExtraColorsInterval}
                    {#each Array(9) as _, i}
                        <div class="color-{defaultColorsArr[1]}-{(i + 1) * 10} p-4 ta-center">
                            color-{defaultColorsArr[0]}-{(i + 1) * 10}
                        </div>
                    {/each}
                {/if}
                <div class="color-{defaultColorsArr[1]} p-4 ta-center">
                    color-{defaultColorsArr[1]}
                </div>
            </div>
        </div>
    </div>    
    <p>
        The <b>color-...-l</b> and <b>color-...-d</b> classes set light or dark shades for accent colors.
    </p>
    <div class="d-grid g-3 cols-4 mb-4 p-3 bgc-positive rounded">
        {#each accentColorsArr as item }
            {#each Object.entries(accentExtraColorsObj) as [key, value]}
                <span class="color-{item}{value}">color-{item}{value}</span>
            {/each}
        {/each}
    </div>
</section>