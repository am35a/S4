<script lang="ts">
    import { appConsole } from 'src/store/console'
    import ColorBox from './colorbox/ColorBox.svelte'

    import Input from 'component/Input.svelte'

    let colorPaletteObj: { [key: string]: any } = {
        defaultNamesArr: [
            'positive' as string,
            'negative' as string
        ],
        accentNamesArr: [
            'primary' as string,
            'secondary' as string,
            'info' as string,
            'success' as string,
            'warning' as string,
            'error' as string
        ],
        variablesObj: {
            'lightness': 0 as number, // from 0 to 100
            'lightness-offset': 0 as number, // from 0 to 100
            'chroma': 0 as number, // from 0 to 0.37
            'alfa': 0 as number, // from 0 to 100
            'primary-hue': 0 as number, // from 0 to 360
            'secondary-hue': 0 as number, // from 0 to 360
            'info-hue': 0 as number, // from 0 to 360
            'success-hue': 0 as number, // from 0 to 360
            'warning-hue': 0 as number, // from 0 to 360
            'error-hue': 0 as number // from 0 to 360
        }
    }

    var root = document.querySelector(':root') as any
    let computedRoot = getComputedStyle(root)

    function getCSSVarValues() {
        for (const key of Object.keys(colorPaletteObj.variablesObj))
            colorPaletteObj.variablesObj[key] = +(computedRoot.getPropertyValue(`--${key}`))
        // vals = Object.keys(obj).map(key => obj[key])
    }
    $: if ($appConsole['isWindowLoad'])
        getCSSVarValues()

    $: if ($appConsole['isWindowLoad']) {
        for (const key of Object.keys(colorPaletteObj.variablesObj))
            root.style.setProperty(`--${key}`, `${colorPaletteObj.variablesObj[key]}`)

    }
</script>

<h1>Colors</h1>

<article>
    <h2 id="alignment">Settings:</h2>
    <div>
        <div>Lightness: {colorPaletteObj.variablesObj['lightness']}</div>
        <Input
            bind:value={colorPaletteObj.variablesObj['lightness']}
            min={colorPaletteObj.variablesObj['lightness-offset']} max="1"
            class="frm w-100"
            type="range"
            step=".01"
        />
        <div>Chroma: {colorPaletteObj.variablesObj['chroma']}</div>
        <Input
            bind:value={colorPaletteObj.variablesObj['chroma']}
            min="0" max="0.37"
            class="frm w-100"
            type="range"
            step=".01"
        />
        <div>Alfa (mute): {colorPaletteObj.variablesObj['alfa']}%</div>
        <Input
            bind:value={colorPaletteObj.variablesObj['alfa']}
            min="0" max="1"
            class="frm w-100"
            type="range"
            step=".01"
        />
    </div>
</article>
<div>
    Colors
</div>
<div class="d-flex fw-wrap g-2">
    {#each colorPaletteObj.accentNamesArr as value}
        <div class="d-grid ji-center p-4 bgc-positive br f" style="--fg: 1; --fb: 0;">
            <div>
                <div class="ta-center fw-600 text c-{value}">{value}</div>
                oklch(
                    {colorPaletteObj.variablesObj['lightness']}
                    {colorPaletteObj.variablesObj['chroma']}
                    {colorPaletteObj.variablesObj[`${value}-hue`]}
                )
            </div>
            <div class="d-flex fw-nowrap ji-center">
                <div class="ws-nowrap as-end">
                    <div class="ta-center fw-600 c-{value}-l">light</div>
                    oklch(
                        {(+(colorPaletteObj.variablesObj['lightness']) + colorPaletteObj.variablesObj['lightness-offset']).toFixed(2)}
                        {colorPaletteObj.variablesObj['chroma']}
                        {colorPaletteObj.variablesObj[`${value}-hue`]}
                    )
                </div>
                <div>
                    <ColorBox colorName={value} />
                </div>
                <div class="ws-nowrap as-end">
                    <div class="ta-center fw-600 c-{value}-d">dark</div>
                    oklch(
                        {(+(colorPaletteObj.variablesObj['lightness']) - colorPaletteObj.variablesObj['lightness-offset']).toFixed(2)}
                        {colorPaletteObj.variablesObj['chroma']}
                        {colorPaletteObj.variablesObj[`${value}-hue`]}
                    )
                </div>
            </div>
            <div>
                <div class="ta-center fw-600 c-{value}-m">mute</div>
                oklch(
                    {colorPaletteObj.variablesObj['lightness']}
                    {colorPaletteObj.variablesObj['chroma']}
                    {colorPaletteObj.variablesObj[`${value}-hue`]}
                    /
                    {colorPaletteObj.variablesObj['alfa']}
                )
            </div>
        </div>
    {/each}
</div>