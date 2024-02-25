<script>
    import { appConsole } from 'src/store/console'
    import ColorBox from './colorbox/ColorBox.svelte'

    import Input from 'component/Input.svelte'

    export let accentColorsObj = {}

    var root = document.querySelector('html')
    let computedRoot = getComputedStyle(root)

    function getCSSVarValues() {
        for (const key of Object.keys(accentColorsObj.variablesObj))
            accentColorsObj.variablesObj[key] = +(computedRoot.getPropertyValue(`--${key}`))
        // vals = Object.keys(obj).map(key => obj[key])
    }
    $: if ($appConsole['isWindowLoad'])
        getCSSVarValues()

    $: if ($appConsole['isWindowLoad']) {
        for (const key of Object.keys(accentColorsObj.variablesObj))
            root.style.setProperty(`--${key}`, `${accentColorsObj.variablesObj[key]}`)
    }

    $: bgiGradientVar = () => {
        let oklchCircle = ''
        for (let index = 0; index < 360; index+=10)
            oklchCircle += `, oklch(${accentColorsObj.variablesObj['lightness']} ${accentColorsObj.variablesObj['chroma']} ${index})`
        return `--bgi: linear-gradient(to right${oklchCircle})`
    }
</script>

<section>
    <h2 id="accentColors">Accent</h2>
    <div>
        <div>Lightness:</div>
        <div>
            <div class="d-grid gtc-3 ai-end px-2">
                <small class="ta-start">{accentColorsObj.variablesObj['lightness-offset']}</small>
                <div class="ta-center">{accentColorsObj.variablesObj['lightness']}</div>
                <small class="ta-end">{1 - accentColorsObj.variablesObj['lightness-offset']}</small>
            </div>
            <Input
                bind:value={accentColorsObj.variablesObj['lightness']}
                min={accentColorsObj.variablesObj['lightness-offset']}
                max={1 - accentColorsObj.variablesObj['lightness-offset']}
                class="frm w-100"
                type="range"
                step=".01"
            />
        </div>
        <!-- <div>Lightness offset: {accentColorsObj.variablesObj['lightness-offset']}</div>
        <Input
            bind:value={accentColorsObj.variablesObj['lightness-offset']}
            min="0" max="1"
            class="frm w-100"
            type="range"
            step=".01"
        /> -->
        <div>Chroma:</div>
        <div>
            <div class="d-grid gtc-3 ai-end px-2">
                <small class="ta-start">0</small>
                <div class="ta-center">{accentColorsObj.variablesObj['chroma']}</div>
                <small class="ta-end">0.37</small>
            </div>
            <Input
                bind:value={accentColorsObj.variablesObj['chroma']}
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
                <div class="ta-center">{accentColorsObj.variablesObj['alfa']}</div>
                <small class="ta-end">1</small>
            </div>
            <Input
                bind:value={accentColorsObj.variablesObj['alfa']}
                min="0" max="1"
                class="frm w-100"
                type="range"
                step=".01"
            />
        </div>
        <div>Colors</div>
        <div class="d-flex fw-wrap g-2">
            {#each accentColorsObj.namesArr as value}
                <div class="d-grid rg-2 ji-center p-4 bgc-positive br fx" style="--fxg: 1; --fxb: 0;">
                    <Input
                        bind:value={accentColorsObj.variablesObj[`${value}-hue`]}
                        min="0" max="360"
                        class="frm w-100 bgi"
                        style="{bgiGradientVar()}"
                        type="range"
                        step="1"
                    />
                    <div>
                        <div class="ta-center fw-600 text c-{value}">{value}</div>
                        oklch(
                            {accentColorsObj.variablesObj['lightness']}
                            {accentColorsObj.variablesObj['chroma']}
                            {accentColorsObj.variablesObj[`${value}-hue`]}
                        )
                    </div>
                    <div class="d-flex fw-nowrap ji-center">
                        <div class="ws-nowrap as-end">
                            <div class="ta-center fw-600 c-{value}-l">light</div>
                            oklch(
                                {(+(accentColorsObj.variablesObj['lightness']) + ~~accentColorsObj.variablesObj['lightness-offset'])}
                                {accentColorsObj.variablesObj['chroma']}
                                {accentColorsObj.variablesObj[`${value}-hue`]}
                            )
                        </div>
                        <div>
                            <ColorBox colorName={value} />
                        </div>
                        <div class="ws-nowrap as-end">
                            <div class="ta-center fw-600 c-{value}-d">dark</div>
                            oklch(
                                {(+(accentColorsObj.variablesObj['lightness']) - ~~accentColorsObj.variablesObj['lightness-offset'])}
                                {accentColorsObj.variablesObj['chroma']}
                                {accentColorsObj.variablesObj[`${value}-hue`]}
                            )
                        </div>
                    </div>
                    <div>
                        <div class="ta-center fw-600 c-{value}-m">mute</div>
                        oklch(
                            {accentColorsObj.variablesObj['lightness']}
                            {accentColorsObj.variablesObj['chroma']}
                            {accentColorsObj.variablesObj[`${value}-hue`]}
                            /
                            {accentColorsObj.variablesObj['alfa']}
                        )
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>