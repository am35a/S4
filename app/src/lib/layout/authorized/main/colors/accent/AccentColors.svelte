<script>
    import { appConsole } from 'src/store/console'
    import ColorBox from './colorbox/ColorBox.svelte'

    import Input from 'component/Input.svelte'

    export let accentColorsObj = {}
    const accentNamesArr = [ 'primary', 'secondary', 'info', 'success', 'warning', 'error' ]

    $: bgiGradientVar = () => {
        let oklchCircle = ''
        for (let index = 0; index < 360; index+=10)
            oklchCircle += `, oklch(${accentColorsObj['lightness']} ${accentColorsObj['chroma']} ${index})`
        return `--bgi: linear-gradient(to right${oklchCircle})`
    }
</script>

<article>
    <h2 id="accentColors">Accent</h2>
    <section>
            <div>Lightness:</div>
            <div>
                <div class="d-grid gtc-3 ai-end px-2">
                    <small class="ta-start">{accentColorsObj['lightness-offset']}</small>
                    <div class="ta-center">{accentColorsObj['lightness']}</div>
                    <small class="ta-end">{1 - accentColorsObj['lightness-offset']}</small>
                </div>
                <Input
                    bind:value={accentColorsObj['lightness']}
                    min={accentColorsObj['lightness-offset']}
                    max={1 - accentColorsObj['lightness-offset']}
                    class="frm w-100"
                    type="range"
                    step=".01"
                />
            </div>
            <!-- <div>Lightness offset: {accentColorsObj['lightness-offset']}</div>
            <Input
                bind:value={accentColorsObj['lightness-offset']}
                min="0" max="1"
                class="frm w-100"
                type="range"
                step=".01"
            /> -->
            <div>Chroma:</div>
            <div>
                <div class="d-grid gtc-3 ai-end px-2">
                    <small class="ta-start">0</small>
                    <div class="ta-center">{accentColorsObj['chroma']}</div>
                    <small class="ta-end">0.37</small>
                </div>
                <Input
                    bind:value={accentColorsObj['chroma']}
                    min="0" max="0.37"
                    class="frm w-100"
                    type="range"
                    step=".01"
                />
            </div>
            <div>Alfa (mute):</div>
            <div>
                <div class="d-grid gtc-3 ai-end px-2">
                    <small class="ta-start">0</small>
                    <div class="ta-center">{accentColorsObj['alfa']}</div>
                    <small class="ta-end">1</small>
                </div>
                <Input
                    bind:value={accentColorsObj['alfa']}
                    min="0" max="1"
                    class="frm w-100"
                    type="range"
                    step=".01"
                />
            </div>
            <div>Colors</div>
            <div class="d-flex fw-wrap g-2">
                {#each accentNamesArr as value}
                    <div class="d-grid rg-2 ji-center p-4 bgc-positive br f" style="--fg: 1; --fb: 0;">
                        <Input
                            bind:value={accentColorsObj[`${value}-hue`]}
                            min="0" max="360"
                            class="frm w-100 bgi"
                            style="{bgiGradientVar()}"
                            type="range"
                            step="1"
                        />
                        <div>
                            <div class="ta-center fw-600 text c-{value}">{value}</div>
                            oklch(
                                {accentColorsObj['lightness']}
                                {accentColorsObj['chroma']}
                                {accentColorsObj[`${value}-hue`]}
                            )
                        </div>
                        <div class="d-flex fw-nowrap ji-center">
                            <div class="ws-nowrap as-end">
                                <div class="ta-center fw-600 c-{value}-l">light</div>
                                oklch(
                                    {(+(accentColorsObj['lightness']) + ~~accentColorsObj['lightness-offset'])}
                                    {accentColorsObj['chroma']}
                                    {accentColorsObj[`${value}-hue`]}
                                )
                            </div>
                            <div>
                                <ColorBox colorName={value} />
                            </div>
                            <div class="ws-nowrap as-end">
                                <div class="ta-center fw-600 c-{value}-d">dark</div>
                                oklch(
                                    {(+(accentColorsObj['lightness']) - ~~accentColorsObj['lightness-offset'])}
                                    {accentColorsObj['chroma']}
                                    {accentColorsObj[`${value}-hue`]}
                                )
                            </div>
                        </div>
                        <div>
                            <div class="ta-center fw-600 c-{value}-m">mute</div>
                            oklch(
                                {accentColorsObj['lightness']}
                                {accentColorsObj['chroma']}
                                {accentColorsObj[`${value}-hue`]}
                                /
                                {accentColorsObj['alfa']}
                            )
                        </div>
                    </div>
                {/each}
            </div>
    </section>
</article>