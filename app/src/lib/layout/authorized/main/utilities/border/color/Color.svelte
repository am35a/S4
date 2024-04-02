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
        <b>border-color--...-l</b> and <b>border-color--...-d</b> classes set <b>mute (-m)</b>, <b>light (-l)</b>
        or <b>dark (-d)</b> shades for accent colors of border.
    </p>
    <div class="display--grid gap--lg">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! The <b>--border-color</b> variable of <b>border</b>, <b>border-color</b>,
            <b>border-...</b>, <b>border-...-color</b>  is adaptive. The list of prefixes available on the
            <a href="/core#map">Core</a> page.
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm grid-template-columns--2 margin-bottom--md padding--sm background-color--positive border-radius--md">
                <div class="display--flex flex-direction--column-reverse gap--xs padding--xs background-color--negative">
                    {#each {length: 9} as _, i}
                        <div class="border-style--solid border-color--{defaultColorsArr[0]}-{(i + 1) * 10} padding--md text-align--center color--positive">
                            border-color--{defaultColorsArr[0]}-{(i + 1) * 10}
                        </div>
                    {/each}
                    <div class="border-style--solid border-color--{defaultColorsArr[0]} padding--md text-align--center color--positive">
                        border-color--{defaultColorsArr[0]}
                    </div>
                </div>
                <div class="display--flex flex-direction--column-reverse gap--xs padding--xs">
                    {#each {length: 9} as _, i}
                        <div class="border-style--solid border-color--{defaultColorsArr[1]}-{(i + 1) * 10} padding--md text-align--center">
                            border-color--{defaultColorsArr[1]}-{(i + 1) * 10}
                        </div>
                    {/each}
                    <div class="border-style--solid border-color--{defaultColorsArr[1]} padding--md text-align--center">
                        border-color--{defaultColorsArr[1]}
                    </div>
                </div>
                {#each accentColorsArr as item}
                    <div class="display--flex flex-direction--column-reverse gap--xs padding--xs">
                        {#each Object.entries(accentExtraColorsObj) as [key, value]}
                            <div class="border-style--solid border-color--{item}{value} padding--md text-align--center">
                                border-color--{item}{value}
                            </div>
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>