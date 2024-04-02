<script>
    import { appConsole } from 'src/store/console'
    import ColorBox from './colorbox/ColorBox.svelte'

    import Input from 'component/Input.svelte'

    export let accentColorsObj={}

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
        return `--background-image: linear-gradient(to right${oklchCircle})`
    }
</script>

<section>
    <h2 id="accentColors">Accent</h2>
    <div>
        <div>Lightness:</div>
        <div>
            <div class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                <small class="text-align--start">{accentColorsObj.variablesObj['lightness-offset']}</small>
                <div class="text-align--center">{accentColorsObj.variablesObj['lightness']}</div>
                <small class="text-align--end">{1 - accentColorsObj.variablesObj['lightness-offset']}</small>
            </div>
            <Input
                bind:value={accentColorsObj.variablesObj['lightness']}
                min={accentColorsObj.variablesObj['lightness-offset']}
                max={1 - accentColorsObj.variablesObj['lightness-offset']}
                class="frm width--100"
                type="range"
                step=".01"
            />
        </div>
        <!-- <div>Lightness offset: {accentColorsObj.variablesObj['lightness-offset']}</div>
        <Input
            bind:value={accentColorsObj.variablesObj['lightness-offset']}
            min="0" max="1"
            class="frm width--100"
            type="range"
            step=".01"
        /> -->
        <div>Chroma:</div>
        <div>
            <div class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                <small class="text-align--start">0</small>
                <div class="text-align--center">{accentColorsObj.variablesObj['chroma']}</div>
                <small class="text-align--end">0.37</small>
            </div>
            <Input
                bind:value={accentColorsObj.variablesObj['chroma']}
                min="0" max="0.37"
                class="frm width--100"
                type="range"
                step=".01"
            />
        </div>
        <div>Alfa (mute):</div>
        <div>
            <div class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                <small class="text-align--start">0</small>
                <div class="text-align--center">{accentColorsObj.variablesObj['alfa']}</div>
                <small class="text-align--end">1</small>
            </div>
            <Input
                bind:value={accentColorsObj.variablesObj['alfa']}
                min="0" max="1"
                class="frm width--100"
                type="range"
                step=".01"
            />
        </div>
        <div>Colors</div>
        <div class="display--flex flex-wrap--wrap gap--xs">
            {#each accentColorsObj.namesArr as value}
                <div class="display--grid rg-2 justify-items--center padding--md background-color--positive border-radius--md flex" style="--flex-grow: 1; --flex-basis: 0;">
                    <Input
                        bind:value={accentColorsObj.variablesObj[`${value}-hue`]}
                        min="0" max="360"
                        class="frm width--100 background-image"
                        style="{bgiGradientVar()}"
                        type="range"
                        step="1"
                    />
                    <div>
                        <div class="text-align--center font-weight--600 text color--{value}">{value}</div>
                        oklch(
                            {accentColorsObj.variablesObj['lightness']}
                            {accentColorsObj.variablesObj['chroma']}
                            {accentColorsObj.variablesObj[`${value}-hue`]}
                        )
                    </div>
                    <div class="display--flex flex-wrap--nowrap justify-items--center">
                        <div class="white-space--nowrap align-self--end">
                            <div class="text-align--center font-weight--600 color--{value}-l">light</div>
                            oklch(
                                {(+(accentColorsObj.variablesObj['lightness']) + ~~accentColorsObj.variablesObj['lightness-offset'])}
                                {accentColorsObj.variablesObj['chroma']}
                                {accentColorsObj.variablesObj[`${value}-hue`]}
                            )
                        </div>
                        <div>
                            <ColorBox colorName={value} />
                        </div>
                        <div class="white-space--nowrap align-self--end">
                            <div class="text-align--center font-weight--600 color--{value}-d">dark</div>
                            oklch(
                                {(+(accentColorsObj.variablesObj['lightness']) - ~~accentColorsObj.variablesObj['lightness-offset'])}
                                {accentColorsObj.variablesObj['chroma']}
                                {accentColorsObj.variablesObj[`${value}-hue`]}
                            )
                        </div>
                    </div>
                    <div>
                        <div class="text-align--center font-weight--600 color--{value}-m">mute</div>
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