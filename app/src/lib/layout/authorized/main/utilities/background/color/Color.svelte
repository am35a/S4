<script>
    let defaultColorsArr = [ 'positive', 'negative' ],
        defaultExtraColorsInterval = 0

    let accentColorsArr = [ 'primary', 'secondary', 'info', 'success', 'warning', 'error' ]

    let accentExtraColorsObj = {
        light: '-l',
        default: '',
        dark: '-d',
        mute: '-m'
    },
        accentExtraColor = accentExtraColorsObj.default
</script>

<section>
    <h3 id="backgroundColor">Background color</h3>
    <div>
        <h4 id="backgroundAccentColors">Accent colors</h4>
        <p>
            The <b>bgc-...-l</b> and <b>bgc-...-d</b> classes set light or dark shades for accent background colors.
        </p>
        <div class="d-grid g-5">
            <div class="d-grid g-4">
                <b>Colors</b>
                <div class="d-flex fw-wrap g-2">
                    {#each Object.entries(accentExtraColorsObj) as [key, value]}
                        <button
                            class = "btn"
                            class:active = {accentExtraColor === value}
                            on:click = {() => accentExtraColor = value}
                            disabled = {accentExtraColor === value}
                        >{key}</button>
                    {/each}
                </div>
            </div>
            <div class="d-grid g-4">
                <b>Preview</b>
                <div class="d-grid g-3 p-3 bgc-positive br">
                    <div class="d-grid g-3 gtc-2">
                        {#each accentColorsArr as item }
                            <div
                                class:c-negative = {accentExtraColor === '-m'}
                                class = "bgc-{item}{accentExtraColor} p-4 c-positive"
                            >
                                <!-- {item} {Object.keys(accentExtraColorsObj).find(key => accentExtraColorsObj[key] === accentExtraColor)} color -->
                                bgc-{item}{accentExtraColor}
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

        <h4 id="backgroundDefaultColors">Default colors</h4>
        <p>
            The classes from <b>bgc-...-10</b> to <b>bgc-...-90</b> make color transparent in percentage which point in the end of.
            Using <b>bgc-transparent</b> class make background transparent.
        </p>
        <div class="d-grid g-5">
            <div class="d-grid g-4">
                <b>Colors</b>
                <div class="d-flex fw-wrap g-2">
                    <button
                        class = "btn"
                        class:active = {defaultExtraColorsInterval}
                        on:click = {() => defaultExtraColorsInterval = 10}
                        disabled = {defaultExtraColorsInterval}
                    >
                        show gradient
                    </button>
                    <button
                        class = "btn"
                        class:active = {!defaultExtraColorsInterval}
                        on:click = {() => defaultExtraColorsInterval = 0}
                        disabled = {!defaultExtraColorsInterval}
                    >
                        hide gradient
                    </button>
                </div>
            </div>
            <div class="d-grid g-4">
                <b>Preview</b>
                <div class="d-grid g-3 p-3 bgc-positive br">
                    <div class="d-grid g-3 gtc-2">
                        <div class="d-flex fd-column-reverse g-2 bgc-negative">
                            {#if defaultExtraColorsInterval}
                                {#each Array(9) as _, i}
                                    <div
                                        class="bgc-{defaultColorsArr[0]}-{(i + 1) * 10} p-4 c-{defaultColorsArr[i < 5 ? 0 : 1]} ta-center"
                                    >bgc-{defaultColorsArr[0]}-{(i + 1) * 10}</div>
                                {/each}
                            {/if}
                            <div class="bgc-{defaultColorsArr[0]} p-4 c-{defaultColorsArr[1]} ta-center">
                                bgc-{defaultColorsArr[0]}
                            </div>
                        </div>
                        <div class="d-flex fd-column-reverse g-2">
                            {#if defaultExtraColorsInterval}
                                {#each Array(9) as _, i}
                                    <div
                                        class="bgc-{defaultColorsArr[1]}-{(i + 1) * 10} p-4 c-{defaultColorsArr[i < 4 ? 1 : 0]} ta-center"
                                    >
                                        bgc-{defaultColorsArr[0]}-{(i + 1) * 10}
                                    </div>
                                {/each}
                            {/if}
                            <div class="bgc-{defaultColorsArr[1]} p-4 c-{defaultColorsArr[0]} ta-center">
                                bgc-{defaultColorsArr[1]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h4 id="backgroundCustomColors">Custom colors</h4>
        <div class="d-grid g-5">
            <div class="alert alert-info js-start">
                <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
                Pay attentions! The <b>--bgc</b> variable is adaptive. The list of prefixes
                available on the <a href="/core#map">Core</a> page.
            </div>
        </div>
    </div>
</section>