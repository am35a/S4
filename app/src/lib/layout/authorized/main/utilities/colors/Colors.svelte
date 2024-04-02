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
        The <b>color--...</b> classes allow you to set default colors for text, strokes, and other default states
        which use <b>currentColor</b> value. Use <b>color--transparent</b> class to make color or other
        dependencies transparent.
    </p>
    <p>
        The classes from <b>color--...-10</b> to <b>color--...-90</b> make color transparent in percentage which point
        in the end of.
    </p>
    <div class="display--grid gap--sm grid-template-columns--2 margin-bottom--md padding--sm background-color--positive border-radius--md">
        <div class="display--flex flex-direction--column-reverse gap--xs background-color--negative">
            {#each Array(9) as _, i}
                <div class="color--{defaultColorsArr[0]}-{(i + 1) * 10} padding--md text-align--center">
                    color--{defaultColorsArr[0]}-{(i + 1) * 10}
                </div>
            {/each}
            <div class="color--{defaultColorsArr[0]} padding--md text-align--center">
                color--{defaultColorsArr[0]}
            </div>
        </div>
        <div class="display--flex flex-direction--column-reverse gap--xs">
            {#each Array(9) as _, i}
                <div class="color--{defaultColorsArr[1]}-{(i + 1) * 10} padding--md text-align--center">
                    color--{defaultColorsArr[1]}-{(i + 1) * 10}
                </div>
            {/each}
            <div class="color--{defaultColorsArr[1]} padding--md text-align--center">
                color--{defaultColorsArr[1]}
            </div>
        </div>
    </div>    
    <p>
        The <b>color--...-l</b> and <b>color--...-d</b> classes set light or dark shades for accent colors.
        The <b>color--...-m</b> classes set partly transparent (mute) colors.
    </p>
    <div class="display--grid gap--sm grid-template-columns--4 margin-bottom--md padding--sm background-color--positive border-radius--md">
        {#each accentColorsArr as item}
            {#each Object.entries(accentExtraColorsObj) as [key, value]}
                <span class="color--{item}{value}">color--{item}{value}</span>
            {/each}
        {/each}
    </div>
</section>