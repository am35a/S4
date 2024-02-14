<script>
    import { appConsole } from 'src/store/console'
    import ColorBox from './colorbox/ColorBox.svelte'

    import Input from 'component/Input.svelte'

    let colorPaletteObj = {
        defaultNamesArr: [
            'positive',
            'negative'
        ],
        accentNamesArr: [
            'primary',
            'secondary',
            'info',
            'success',
            'warning',
            'error'
        ],
        variablesObj: {
            'lightness': 0, // from 0 to 1
            'lightness-offset': 0, // from 0 to 1
            'chroma': 0, // from 0 to 0.37
            'alfa': 0, // from 0 to 100
            'primary-hue': 0, // from 0 to 360
            'secondary-hue': 0, // from 0 to 360
            'info-hue': 0, // from 0 to 360
            'success-hue': 0, // from 0 to 360
            'warning-hue': 0, // from 0 to 360
            'error-hue': 0 // from 0 to 360
        }
    }

    var root = document.querySelector(':root')
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

    $: bgiGradientVar = () => {
        let oklchCircle = ''
        for (let index = 0; index < 360; index+=10)
            oklchCircle += `, oklch(${colorPaletteObj.variablesObj['lightness']} ${colorPaletteObj.variablesObj['chroma']} ${index})`
        return `--bgi: linear-gradient(to right${oklchCircle})`
    }
</script>

<h1 id="colorPalette">Color palette</h1>
<article>
    <div>
        <div>Lightness:</div>
        <div class="d-grid gtc-3 ai-end px-2">
            <small class="ta-start">{colorPaletteObj.variablesObj['lightness-offset']}</small>
            <div class="ta-center">{colorPaletteObj.variablesObj['lightness']}</div>
            <small class="ta-end">{1 - colorPaletteObj.variablesObj['lightness-offset']}</small>
        </div>
        <Input
            bind:value={colorPaletteObj.variablesObj['lightness']}
            min={colorPaletteObj.variablesObj['lightness-offset']}
            max={1 - colorPaletteObj.variablesObj['lightness-offset']}
            class="frm w-100"
            type="range"
            step=".01"
        />
        <!-- <div>Lightness offset: {colorPaletteObj.variablesObj['lightness-offset']}</div>
        <Input
            bind:value={colorPaletteObj.variablesObj['lightness-offset']}
            min="0" max="1"
            class="frm w-100"
            type="range"
            step=".01"
        /> -->
        <div>Chroma:</div>
        <div class="d-grid gtc-3 ai-end px-2">
            <small class="ta-start">0</small>
            <div class="ta-center">{colorPaletteObj.variablesObj['chroma']}</div>
            <small class="ta-end">0.37</small>
        </div>
        <Input
            bind:value={colorPaletteObj.variablesObj['chroma']}
            min="0" max="0.37"
            class="frm w-100"
            type="range"
            step=".01"
        />
        <div>Alfa (mute):</div>
        <div class="d-grid gtc-3 ai-end px-2">
            <small class="ta-start">0</small>
            <div class="ta-center">{colorPaletteObj.variablesObj['alfa']}</div>
            <small class="ta-end">1</small>
        </div>
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
        <div class="d-grid rg-2 ji-center p-4 bgc-positive br f" style="--fg: 1; --fb: 0;">
            <Input
                bind:value={colorPaletteObj.variablesObj[`${value}-hue`]}
                min="0" max="360"
                class="frm w-100 bgi"
                style="{bgiGradientVar()}"
                type="range"
                step="1"
            />
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
                        {(+(colorPaletteObj.variablesObj['lightness']) + ~~colorPaletteObj.variablesObj['lightness-offset'])}
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
                        {(+(colorPaletteObj.variablesObj['lightness']) - ~~colorPaletteObj.variablesObj['lightness-offset'])}
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