<script>
    import { appConsole } from 'src/store/console'

    import Input from 'component/Input.svelte'

    export let defaultColorsObj={}

    var root = document.querySelector('html')
    let computedRoot = getComputedStyle(root)

    function getCSSVarValues() {
        for (const key of Object.keys(defaultColorsObj.variablesObj))
            defaultColorsObj.variablesObj[key] = +(computedRoot.getPropertyValue(`--${key}`))
    }
    $: if ($appConsole['isWindowLoad'])
        getCSSVarValues()

    $: if ($appConsole['isWindowLoad']) {
        for (const key of Object.keys(defaultColorsObj.variablesObj))
            root.style.setProperty(`--${key}`, `${defaultColorsObj.variablesObj[key]}`)
    }

    $: bgiGradientVar = (colorName) => {
        let oklchCircle = ''
        for (let index = 0; index < 360; index+=10)
            oklchCircle += `, oklch(${defaultColorsObj.variablesObj[`${colorName}-lightness`]} ${defaultColorsObj.variablesObj[`${colorName}-chroma`]} ${index})`
        return `--background-image: linear-gradient(to right${oklchCircle})`
    }

</script>

<section>
    <h2 id="accentColors">Default</h2>
    <!-- <p>
        {JSON.stringify(defaultColorsObj)}
    </p> -->
    <div class="display--grid gap--lg">
        <div>
            <!-- <div>positive:</div> -->
            <div>Lightness:</div>
            <div>
                <div class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                    <small class="text-align--start">0</small>
                    <div class="text-align--center">{defaultColorsObj.variablesObj['positive-lightness']}</div>
                    <small class="text-align--end">1</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['positive-lightness']}
                    min="0"
                    max="1"
                    class="frm width--100"
                    type="range"
                    step=".01"
                />
            </div>
            <div>Chroma:</div>
            <div>
                <div class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                    <small class="text-align--start">0</small>
                    <div class="text-align--center">{defaultColorsObj.variablesObj['positive-chroma']}</div>
                    <small class="text-align--end">0.37</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['positive-chroma']}
                    min="0" max="0.37"
                    class="frm width--100"
                    type="range"
                    step=".01"
                />
            </div>
            <div>Hue:</div>
            <div>
                <div class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                    <small class="text-align--start">0</small>
                    <div class="text-align--center">{defaultColorsObj.variablesObj['positive-hue']}</div>
                    <small class="text-align--end">360</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['positive-hue']}
                    min="0" max="360"
                    class="frm width--100 background-image"
                    style="{bgiGradientVar('positive')}"
                    type="range"
                    step="1"
                />
            </div>
            <div>Colors:</div>
            <div class="display--grid gap--sm justify-items--center padding--md border-radius--md flex background-color--negative" style="--flex-basis: 100%;">
                <div class="text-align--center font-weight--600 c-positive">Positive in negative</div>
                <div class="display--grid grid-auto-flow--column width--100">
                    <div class="background-color--positive-10 c-positive-90 padding-y--md color-negative text-align--center">10</div>
                    <div class="background-color--positive-20 c-positive-80 padding-y--md color-negative text-align--center">20</div>
                    <div class="background-color--positive-30 c-positive-70 padding-y--md color-negative text-align--center">30</div>
                    <div class="background-color--positive-40 c-positive-60 padding-y--md color-negative text-align--center">40</div>
                    <div class="background-color--positive-50 c-positive-50 padding-y--md color-negative text-align--center">50</div>
                    <div class="background-color--positive-60 c-negative-60 padding-y--md color-negative text-align--center">60</div>
                    <div class="background-color--positive-70 c-negative-70 padding-y--md color-negative text-align--center">70</div>
                    <div class="background-color--positive-80 c-negative-80 padding-y--md color-negative text-align--center">80</div>
                    <div class="background-color--positive-90 c-negative-90 padding-y--md color-negative text-align--center">90</div>
                    <div class="background-color--positive c-negative padding-y--md color-negative text-align--center">100</div>
                </div>
            </div>
        </div>
        <div>
            <div>Lightness:</div>
            <div>
                <div class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                    <small class="text-align--start">0</small>
                    <div class="text-align--center">{defaultColorsObj.variablesObj['negative-lightness']}</div>
                    <small class="text-align--end">1</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['negative-lightness']}
                    min="0"
                    max="1"
                    class="frm width--100"
                    type="range"
                    step=".01"
                />
            </div>
            <div>Chroma:</div>
            <div>
                <div class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                    <small class="text-align--start">0</small>
                    <div class="text-align--center">{defaultColorsObj.variablesObj['negative-chroma']}</div>
                    <small class="text-align--end">0.37</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['negative-chroma']}
                    min="0" max="0.37"
                    class="frm width--100"
                    type="range"
                    step=".01"
                />
            </div>
            <div>Hue:</div>
            <div>
                <div class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                    <small class="text-align--start">0</small>
                    <div class="text-align--center">{defaultColorsObj.variablesObj['negative-hue']}</div>
                    <small class="text-align--end">360</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['negative-hue']}
                    min="0" max="360"
                    class="frm width--100 background-image"
                    style="{bgiGradientVar('negative')}"
                    type="range"
                    step="1"
                />
            </div>
            <div>Colors:</div>
            <div class="display--grid gap--sm justify-items--center padding--md border-radius--md flex background-color--positive" style="--flex-basis: 100%;">
                <div class="text-align--center font-weight--600 c-negative">Negative in positive</div>
                <div class="display--grid grid-auto-flow--column width--100">
                    <div class="background-color--negative-10 c-negative-90 padding-y--md color-positive text-align--center">10</div>
                    <div class="background-color--negative-20 c-negative-80 padding-y--md color-positive text-align--center">20</div>
                    <div class="background-color--negative-30 c-negative-70 padding-y--md color-positive text-align--center">30</div>
                    <div class="background-color--negative-40 c-negative-60 padding-y--md color-positive text-align--center">40</div>
                    <div class="background-color--negative-50 c-negative-50 padding-y--md color-positive text-align--center">50</div>
                    <div class="background-color--negative-60 c-positive-60 padding-y--md color-positive text-align--center">60</div>
                    <div class="background-color--negative-70 c-positive-70 padding-y--md color-positive text-align--center">70</div>
                    <div class="background-color--negative-80 c-positive-80 padding-y--md color-positive text-align--center">80</div>
                    <div class="background-color--negative-90 c-positive-90 padding-y--md color-positive text-align--center">90</div>
                    <div class="background-color--negative c-positive padding-y--md color-positive text-align--center">100</div>
                </div>
            </div>
        </div>
    </div>
</section>