<script>
    let defaultColorsArr = ['positive', 'negative'],
        accentColorsArr = ['primary', 'secondary', 'info', 'success', 'warning', 'error'],
        accentExtraColorsObj={
            light: '-l',
            default: '',
            dark: '-d',
            mute: '-m'
        }
</script>

<section>
    <h3 id="color">Color</h3>
    <p>
        The <b>border-color--...</b> classes allow to set colors for strokes. The <b>border-color--...-m</b>,
        <b>border-color--...-l</b> and <b>border-color--...-d</b> classes set mute, light or dark shades for
        accent colors of border.
    </p>
    <div class="d-grid g-3 gtc-2 mb-4 p-3 background-color--positive border-radius--md">
        <div class="d-flex fd-column-reverse g-2 p-2 background-color--negative">
            {#each {length: 9} as _, i}
                <div class="border-style--solid border-color--{defaultColorsArr[0]}-{(i + 1) * 10} p-4 ta-center c-positive">
                    border-color--{defaultColorsArr[0]}-{(i + 1) * 10}
                </div>
            {/each}
            <div class="border-style--solid border-color--{defaultColorsArr[0]} p-4 ta-center c-positive">
                border-color--{defaultColorsArr[0]}
            </div>
        </div>
        <div class="d-flex fd-column-reverse g-2 p-2">
            {#each {length: 9} as _, i}
                <div class="border-style--solid border-color--{defaultColorsArr[1]}-{(i + 1) * 10} p-4 ta-center">
                    border-color--{defaultColorsArr[1]}-{(i + 1) * 10}
                </div>
            {/each}
            <div class="border-style--solid border-color--{defaultColorsArr[1]} p-4 ta-center">
                border-color--{defaultColorsArr[1]}
            </div>
        </div>
        {#each accentColorsArr as item }
            <div class="d-flex fd-column-reverse g-2 p-2">
                {#each Object.entries(accentExtraColorsObj) as [key, value]}
                    <div class="border-style--solid border-color--{item}{value} p-4 ta-center">
                        border-color--{item}{value}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</section>