<script lang="ts">
    let defaultColorsArr: string[] = [ 'positive', 'negative' ]
    let accentColorsArr: string[] = [ 'primary', 'secondary', 'info', 'success', 'warning', 'error' ]
    let accentExtraColorsObj = {
        light: '-l',
        default: '',
        dark: '-d',
        mute: '-m'
    }
</script>

<section>
    <h2 id="color">Colors</h2>
    <p>
        The <b>c-...</b> classes allow you to set default colors for text, strokes, and other default states which use <b>currentColor</b> value.
        Use <b>c-transparent</b> class to make color or other dependencies transparent.
    </p>
    <p>
        The classes from <b>c-...-10</b> to <b>c-...-90</b> make color transparent in percentage which point in the end of.
    </p>
    <div class="d-grid g-3 cols-2 mb-4 p-3 bgc-positive br">
        <div class="d-flex fd-column-reverse g-2 bgc-negative">
            {#each Array(9) as _, i}
                <div class="c-{defaultColorsArr[0]}-{(i + 1) * 10} p-4 ta-center">
                    c-{defaultColorsArr[0]}-{(i + 1) * 10}
                </div>
            {/each}
            <div class="c-{defaultColorsArr[0]} p-4 ta-center">
                c-{defaultColorsArr[0]}
            </div>
        </div>
        <div class="d-flex fd-column-reverse g-2">
            {#each Array(9) as _, i}
                <div class="c-{defaultColorsArr[1]}-{(i + 1) * 10} p-4 ta-center">
                    c-{defaultColorsArr[0]}-{(i + 1) * 10}
                </div>
            {/each}
            <div class="c-{defaultColorsArr[1]} p-4 ta-center">
                c-{defaultColorsArr[1]}
            </div>
        </div>
    </div>    
    <p>
        The <b>c-...-l</b> and <b>c-...-d</b> classes set light or dark shades for accent colors.
    </p>
    <div class="d-grid g-3 cols-4 mb-4 p-3 bgc-positive br">
        {#each accentColorsArr as item }
            {#each Object.entries(accentExtraColorsObj) as [key, value]}
                <span class="c-{item}{value}">c-{item}{value}</span>
            {/each}
        {/each}
    </div>
</section>