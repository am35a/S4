<script lang="ts">
    import Alert from 'src/components/Alert.svelte'
    import ColorBox from './colorbox/ColorBox.svelte'

    let colorPaletteObj = {
        default: {
            offset: 10,
            positive: { h: 0, s: 0, l: 100 },
            negative: { h: 0, s: 0, l: 0 }
        },
        accent: {
            settings: {
                offset: 15,
                mute: .3
            },
            colors: {
                primary: { h: 210, s: 90, l: 50 },
                secondary: { h: 210, s: 10, l: 50 },
                info: { h: 190, s: 90, l: 50 },
                success: { h: 120, s: 50, l: 50 },
                warning: { h: 40, s: 90, l: 50 },
                error: { h: 0, s: 50, l: 50 }
            }
        }
    }
</script>

<h1>Colors</h1>




<div>
    Settings:
</div>
<div>
    offset {colorPaletteObj.accent.settings.offset} mute {colorPaletteObj.accent.settings.mute}
</div>
<div>
    Colors
</div>
<div class="d-flex fw-wrap g-2">
    {#each Object.entries(colorPaletteObj.accent.colors) as [key, value]}
        <div class="d-grid ji-center p-4 bgc-positive br f-equal">
            <div>
                <div class="ta-center fw-600">{key}</div>
                hsl({value.h} {value.s} {value.l})
            </div>
            <div class="d-flex fw-nowrap ji-center">
                <div class="space-nowrap as-end">
                    <div class="ta-center fw-600">{key}-l</div>
                    hsl({value.h} {value.s} {value.l + colorPaletteObj.accent.settings.offset})
                </div>
                <div class="col-span-2 d-grid">
                    <ColorBox
                        {...value}
                        {...colorPaletteObj.accent.settings}
                    />
                </div>
                <div class="space-nowrap as-end">
                    <div class="ta-center fw-600">{key}-d</div>
                    hsl({value.h} {value.s} {value.l  - colorPaletteObj.accent.settings.offset})
                </div>
            </div>
        </div>
    {/each}
</div>