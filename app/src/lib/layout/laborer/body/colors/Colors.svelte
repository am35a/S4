<script lang="ts">
    import { styleFiles } from 'src/store/store'
    import Alert from 'src/components/Alert.svelte'
    import ColorBox from './colorbox/ColorBox.svelte'

    let colorPaletteObj = {
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
            'lightness': undefined as number,
            'lightness-offset': undefined as number,
            'chroma': undefined as number,
            'alfa': undefined as number,
            'primary-hue': undefined as number,
            'secondary-hue': undefined as number,
            'info-hue': undefined as number,
            'success-hue': undefined as number,
            'warning-hue': undefined as number,
            'error-hue': undefined as number
        }
    }

    let computedRoot = getComputedStyle(document.querySelector(':root'))

    // function getVarValue(varName) {
        // styleSheets.setProperty(varName, '#000')
        // return styleSheets.getPropertyValue(varName)

        // root.style.setProperty(varName, 'blue');
        // return getComputedStyle(root).getPropertyValue(varName)

        // return getComputedStyle(document.documentElement).getPropertyValue(varName) || 'empty :('
        // console.log(getComputedStyle(root).getPropertyValue('--lightness'))
        // return getComputedStyle(document.body).getPropertyValue('--lightness')

    // }

    $: if ($styleFiles['styles']) {
        for (const key of Object.keys(colorPaletteObj.variablesObj)) {
            colorPaletteObj.variablesObj[key] = +(computedRoot.getPropertyValue(`--${key}`).replace('%', ''))
        }
        // vals = Object.keys(obj).map(key => obj[key])
    }
</script>


<h1>Colors</h1>

<!-- https://www.youtube.com/watch?v=HpZbIGFZlwE -->
{getComputedStyle(document.querySelector(':root')).getPropertyValue('--lightness')}

<div>
    Settings:
</div>
<div>
    <!-- offset {colorPaletteObj.accent.settings.offset} mute {colorPaletteObj.accent.settings.mute} -->
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => console.log($styleFiles, colorPaletteObj.variablesObj)}>
    Colors
</div>
<div class="d-flex fw-wrap g-2">
    {#each colorPaletteObj.accentNamesArr as value}
        <div class="d-grid ji-center p-4 bgc-positive br f" style="--fg: 1; --fb: 0;">
            <div>
                <div class="ta-center fw-600">{value}</div>
                oklch(
                    {colorPaletteObj.variablesObj['lightness']}%
                    {colorPaletteObj.variablesObj['chroma']}
                    {colorPaletteObj.variablesObj[`${value}-hue`]}
                )
            </div>
            <div class="d-flex fw-nowrap ji-center">
                <div class="ws-nowrap as-end">
                    <div class="ta-center fw-600">light</div>
                    oklch(
                        {colorPaletteObj.variablesObj['lightness'] + colorPaletteObj.variablesObj['lightness-offset']}%
                        {colorPaletteObj.variablesObj['chroma']}
                        {colorPaletteObj.variablesObj[`${value}-hue`]}
                    )
                </div>
                <div class="col-span-2 d-grid">
                    <ColorBox colorName={value} />
                </div>
                <div class="ws-nowrap as-end">
                    <div class="ta-center fw-600">dark</div>
                    oklch(
                        {colorPaletteObj.variablesObj['lightness'] - colorPaletteObj.variablesObj['lightness-offset']}%
                        {colorPaletteObj.variablesObj['chroma']}
                        {colorPaletteObj.variablesObj[`${value}-hue`]}
                    )
                </div>
            </div>
            <div>
                <div class="ta-center fw-600">mute</div>
                oklch(
                    {colorPaletteObj.variablesObj['lightness']}%
                    {colorPaletteObj.variablesObj['chroma']}
                    {colorPaletteObj.variablesObj[`${value}-hue`]}
                    /
                    {colorPaletteObj.variablesObj['alfa']}
                )
            </div>
        </div>
    {/each}
</div>