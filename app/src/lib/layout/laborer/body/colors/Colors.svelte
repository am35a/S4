<script lang="ts">
    import Alert from 'src/components/Alert.svelte'
    import ColorBox from './colorbox/ColorBox.svelte'

    // let colorPaletteObj = {
    //     default: {
    //         offset: 10,
    //         positive: { h: 0, s: 0, l: 100 },
    //         negative: { h: 0, s: 0, l: 0 }
    //     },
    //     accent: {
    //         settings: {
    //             offset: 15,
    //             mute: .3
    //         },
    //         colors: {
    //             primary: { h: 210, s: 90, l: 50 },
    //             secondary: { h: 210, s: 10, l: 50 },
    //             info: { h: 190, s: 90, l: 50 },
    //             success: { h: 120, s: 50, l: 50 },
    //             warning: { h: 40, s: 90, l: 50 },
    //             error: { h: 0, s: 50, l: 50 }
    //         }
    //     }
    // }
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

<!-- --lightness-offset: 15%
--chroma: 0.2
--alfa: 0.25

--primary-hue: 255
--secondary-hue: 255
--info-hue: 295
--success-hue: 145
--warning-hue: 85
--error-hue: 25 -->

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
    <ColorBox  l={60} c={0.2} h={255} offset={15} alfa={0.25}/>
    <!-- {#each Object.entries(colorPaletteObj.accent.colors) as [key, value]}
        <div class="d-grid ji-center p-4 bgc-positive br f" style="--fg: 1; --fb: 0;">
            <div>
                <div class="ta-center fw-600">{key}</div>
                hsl({value.h} {value.s} {value.l})
            </div>
            <div class="d-flex fw-nowrap ji-center">
                <div class="ws-nowrap as-end">
                    <div class="ta-center fw-600">light</div>
                    hsl({value.h} {value.s} {value.l + colorPaletteObj.accent.settings.offset})
                </div>
                <div class="col-span-2 d-grid">
                    <ColorBox
                        {...value}
                        {...colorPaletteObj.accent.settings}
                    />
                </div>
                <div class="ws-nowrap as-end">
                    <div class="ta-center fw-600">dark</div>
                    hsl({value.h} {value.s} {value.l  - colorPaletteObj.accent.settings.offset})
                </div>
            </div>
            <div>
                <div class="ta-center fw-600">mute</div>
                hsl({value.h} {value.s} {value.l} / {colorPaletteObj.accent.settings.mute})
            </div>
        </div>
    {/each} -->
</div>