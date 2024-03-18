<script>
    let defaultColorsArr = [ 'positive', 'negative' ],
        accentColorsArr = [ 'primary', 'secondary', 'info', 'success', 'warning', 'error' ],
        accentExtraColorsObj={
            light: '-l',
            default: '',
            dark: '-d',
            mute: '-m'
        }
</script>

<section>
    <h2 id="color">Colors</h2>
    <p>
        The <b>c-...</b> classes allow you to set default colors for text, strokes, and other default states
        which use <b>currentColor</b> value. Use <b>c-transparent</b> class to make color or other
        dependencies transparent.
    </p>
    <p>
        The classes from <b>c-...-10</b> to <b>c-...-90</b> make color transparent in percentage which point
        in the end of.
    </p>
    <div class="display--grid g-3 gtc-2 mb-4 p-3 background-color--positive border-radius--md">
        <div class="display--flex fd-column-reverse g-2 background-color--negative">
            {#each Array(9) as _, i}
                <div class="c-{defaultColorsArr[0]}-{(i + 1) * 10} p-4 ta-center">
                    c-{defaultColorsArr[0]}-{(i + 1) * 10}
                </div>
            {/each}
            <div class="c-{defaultColorsArr[0]} p-4 ta-center">
                c-{defaultColorsArr[0]}
            </div>
        </div>
        <div class="display--flex fd-column-reverse g-2">
            {#each Array(9) as _, i}
                <div class="c-{defaultColorsArr[1]}-{(i + 1) * 10} p-4 ta-center">
                    c-{defaultColorsArr[1]}-{(i + 1) * 10}
                </div>
            {/each}
            <div class="c-{defaultColorsArr[1]} p-4 ta-center">
                c-{defaultColorsArr[1]}
            </div>
        </div>
    </div>    
    <p>
        The <b>c-...-l</b> and <b>c-...-d</b> classes set light or dark shades for accent colors.
        The <b>c-...-m</b> classes set partly transparent (mute) colors.
    </p>
    <div class="display--grid g-3 gtc-4 mb-4 p-3 background-color--positive border-radius--md">
        {#each accentColorsArr as item }
            {#each Object.entries(accentExtraColorsObj) as [key, value]}
                <span class="c-{item}{value}">c-{item}{value}</span>
            {/each}
        {/each}
    </div>
</section>