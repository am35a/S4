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
    let accentExtraColor: string = accentExtraColorsObj.default
</script>

<section>
    <h3 id="backgroundColor">Background color</h3>
    <p>
        The <b>bgc-span-...-l</b> and <b>bgc-span-...-d</b> classes set light or dark shades for accent background colors.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="d-flex g-2">
            {#each Object.entries(accentExtraColorsObj) as [key, value]}
                <Button
                    class="btn-secondary {accentExtraColor === value ? 'active' : ''}"
                    on:click = {() => accentExtraColor = value}
                    disabled = {accentExtraColor === value}
                >{key}</Button>
            {/each}
        </div>
        <div class="d-grid g-3 gtc-2">
            {#each accentColorsArr as item }
                <div class="bgc-span-{item}{accentExtraColor} p-4 c-positive">
                    <!-- {item} {Object.keys(accentExtraColorsObj).find(key => accentExtraColorsObj[key] === accentExtraColor)} color -->
                    bgc-span-{item}{accentExtraColor}
                </div>
            {/each}
        </div>
    </div>
    <p>
        The classes from <b>bgc-span-...-10</b> to <b>bgc-span-...-90</b> make color transparent in percentage which point in the end of.
        Using <b>bgc-span-transparent</b> class make background transparent.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="d-flex g-2">
            <Button
                class="btn-secondary {defaultExtraColorsInterval ? 'active' : ''}"
                on:click = {() => defaultExtraColorsInterval ? defaultExtraColorsInterval = null : defaultExtraColorsInterval = 10 }
            >
                default extra colors {defaultExtraColorsInterval ? 'hide' : 'show'}
            </Button>
        </div>
        <div class="d-grid g-3 gtc-2">
            <div class="d-flex fd-column-reverse g-2 bgc-negative">
                {#if defaultExtraColorsInterval}
                    {#each Array(9) as _, i}
                        <div class="bgc-span-{defaultColorsArr[0]}-{(i + 1) * 10} p-4 color-{defaultColorsArr[1]} ta-center">
                            bgc-span-{defaultColorsArr[0]}-{(i + 1) * 10}
                        </div>
                    {/each}
                {/if}
                <div class="bgc-span-{defaultColorsArr[0]} p-4 color-{defaultColorsArr[1]} ta-center">
                    bgc-span-{defaultColorsArr[0]}
                </div>
            </div>
            <div class="d-flex fd-column-reverse g-2">
                {#if defaultExtraColorsInterval}
                    {#each Array(9) as _, i}
                        <div class="bgc-span-{defaultColorsArr[1]}-{(i + 1) * 10} p-4 color-{defaultColorsArr[0]} ta-center">
                            bgc-span-{defaultColorsArr[0]}-{(i + 1) * 10}
                        </div>
                    {/each}
                {/if}
                <div class="bgc-span-{defaultColorsArr[1]} p-4 color-{defaultColorsArr[0]} ta-center">
                    bgc-span-{defaultColorsArr[1]}
                </div>
            </div>
        </div>
    </div>
</section>