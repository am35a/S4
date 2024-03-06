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
    <h3 id="borderColor">Color</h3>
    <p>
        The <b>border-...</b> classes allow to set colors for strokes. The <b>border-...-m</b>, <b>border-...-l</b> and <b>border-...-d</b> classes set mute, light or dark shades for accent colors of border.
    </p>
    <div class="d-grid g-3 gtc-2 mb-4 p-3 bgc-positive br-md">
        <div class="d-flex fd-column-reverse g-2 p-2 bgc-negative">
            {#each Array(9) as _, i}
                <div class="border border-{defaultColorsArr[0]}-{(i + 1) * 10} p-4 ta-center c-positive">
                    border-{defaultColorsArr[0]}-{(i + 1) * 10}
                </div>
            {/each}
            <div class="border border-{defaultColorsArr[0]} p-4 ta-center c-positive">
                border-{defaultColorsArr[0]}
            </div>
        </div>
        <div class="d-flex fd-column-reverse g-2 p-2">
            {#each Array(9) as _, i}
                <div class="border border-{defaultColorsArr[1]}-{(i + 1) * 10} p-4 ta-center">
                    border-{defaultColorsArr[1]}-{(i + 1) * 10}
                </div>
            {/each}
            <div class="border border-{defaultColorsArr[1]} p-4 ta-center">
                border-{defaultColorsArr[1]}
            </div>
        </div>
        {#each accentColorsArr as item }
            <div class="d-flex fd-column-reverse g-2 p-2">
                {#each Object.entries(accentExtraColorsObj) as [key, value]}
                    <div class="border border-{item}{value} p-4 ta-center">
                        border-{item}{value}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</section>