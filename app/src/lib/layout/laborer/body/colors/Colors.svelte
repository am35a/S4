<script lang="ts">
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
        ]
    }

    // const styleSheets = window.getComputedStyle(document.body)
    let root = document.querySelector(':root')
    function getVarValue(varName) {
        // styleSheets.setProperty(varName, '#000')
        // return styleSheets.getPropertyValue(varName)

        // root.style.setProperty(varName, 'blue');
        // return getComputedStyle(root).getPropertyValue(varName)

        // return getComputedStyle(document.documentElement).getPropertyValue(varName) || 'empty :('
        console.log(getComputedStyle(root).getPropertyValue('--lightness'))
        // return getComputedStyle(document.body).getPropertyValue('--lightness')

    }
</script>


<h1>Colors</h1>

<!-- {getVarValue('--lightness')} -->
<!-- --lightness: {styleSheets.getPropertyValue('background-color')}
{JSON.stringify(styleSheets)} -->


<!-- --lightness: {JSON.stringify(getVarValue('--lightness'))} -->


<!-- https://www.youtube.com/watch?v=HpZbIGFZlwE -->
{getComputedStyle(document.querySelector(':root')).getPropertyValue('--lightness')}

<div>
    Settings:
</div>
<div>
    <!-- offset {colorPaletteObj.accent.settings.offset} mute {colorPaletteObj.accent.settings.mute} -->
</div>
<div>
    Colors
</div>
<div class="d-flex fw-wrap g-2">
    {#each colorPaletteObj.accentNamesArr as value}
        <div class="d-grid ji-center p-4 bgc-positive br f" style="--fg: 1; --fb: 0;">
            <div>
                <div class="ta-center fw-600">{value}</div>
                <!-- oklch({colorPaletteObj.accent.lightness}% {colorPaletteObj.accent.chroma / (key === 'secondary' ? 10 : 1)} {value}) -->
            </div>
            <div class="d-flex fw-nowrap ji-center">
                <div class="ws-nowrap as-end">
                    <div class="ta-center fw-600">light</div>
                    <!-- oklch({colorPaletteObj.accent.lightness + colorPaletteObj.accent.settings.offset}% {colorPaletteObj.accent.chroma / (key === 'secondary' ? 10 : 1)} {value}) -->
                </div>
                <div class="col-span-2 d-grid">
                    <ColorBox colorName={value} />
                </div>
                <div class="ws-nowrap as-end">
                    <div class="ta-center fw-600">dark</div>
                    <!-- oklch({colorPaletteObj.accent.lightness - colorPaletteObj.accent.settings.offset}% {colorPaletteObj.accent.chroma / (key === 'secondary' ? 10 : 1)} {value}) -->
                </div>
            </div>
            <div>
                <div class="ta-center fw-600">mute</div>
                <!-- oklch({colorPaletteObj.accent.lightness}% {colorPaletteObj.accent.chroma / (key === 'secondary' ? 10 : 1)} {value} / {colorPaletteObj.accent.settings.mute}) -->
            </div>
        </div>
    {/each}
</div>