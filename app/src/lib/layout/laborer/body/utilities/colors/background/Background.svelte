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
        The classes from <b>bgc-...-10</b> to <b>bgc-...-90</b> make color transparent in percentage which point in the end of.
        Using <b>bgc-transparent</b> class make background transparent.
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2">
            <Button
                class="btn-secondary {defaultExtraColorsInterval ? 'active' : ''}"
                on:click = {() => defaultExtraColorsInterval ? defaultExtraColorsInterval = null : defaultExtraColorsInterval = 10 }
            >
                default extra colors {defaultExtraColorsInterval ? 'hide' : 'show'}
            </Button>
        </div>
        <div class="d-grid g-2 cols-2">
            <div class="d-flex fd-column-reverse g-2 bgc-negative">
                {#if defaultExtraColorsInterval}
                    {#each Array(9) as _, i}
                        <div class="bgc-{defaultColorsArr[0]}-{(i + 1) * 10} p-4 color-{defaultColorsArr[1]} text-center">
                            bgc-{defaultColorsArr[0]}-{(i + 1) * 10}
                        </div>
                    {/each}
                {/if}
                <div class="bgc-{defaultColorsArr[0]} p-4 color-{defaultColorsArr[1]} text-center">
                    bgc-{defaultColorsArr[0]}
                </div>
            </div>
            <div class="d-flex fd-column-reverse g-2">
                {#if defaultExtraColorsInterval}
                    {#each Array(9) as _, i}
                        <div class="bgc-{defaultColorsArr[1]}-{(i + 1) * 10} p-4 color-{defaultColorsArr[0]} text-center">
                            bgc-{defaultColorsArr[0]}-{(i + 1) * 10}
                        </div>
                    {/each}
                {/if}
                <div class="bgc-{defaultColorsArr[1]} p-4 color-{defaultColorsArr[0]} text-center">
                    bgc-{defaultColorsArr[1]}
                </div>
            </div>
        </div>
    </div>
    
    <p>
        The <b>bgc-...-l</b> and <b>bgc-...-d</b> classes set light or dark shades for accent background colors.
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
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
                <div class="bgc-{item}{accentExtraColor} p-4 color-positive">
                    <!-- {item} {Object.keys(accentExtraColorsObj).find(key => accentExtraColorsObj[key] === accentExtraColor)} color -->
                    bgc-{item}{accentExtraColor}
                </div>
            {/each}
        </div>
    </div>
</section>