<script>
    import { appConsole } from 'src/store/console'

    import Input from 'component/Input.svelte'

    export let defaultColorsObj = {}

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
        return `--bgi: linear-gradient(to right${oklchCircle})`
    }

</script>

<section>
    <h2 id="accentColors">Default</h2>
    <!-- <p>
        {JSON.stringify(defaultColorsObj)}
    </p> -->
    <div class="d-grid g-5">
        <div>
            <!-- <div>positive:</div> -->
            <div>Lightness:</div>
            <div>
                <div class="d-grid gtc-3 ai-end px-2">
                    <small class="ta-start">0</small>
                    <div class="ta-center">{defaultColorsObj.variablesObj['positive-lightness']}</div>
                    <small class="ta-end">1</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['positive-lightness']}
                    min="0"
                    max="1"
                    class="frm w-100"
                    type="range"
                    step=".01"
                />
            </div>
            <div>Chroma:</div>
            <div>
                <div class="d-grid gtc-3 ai-end px-2">
                    <small class="ta-start">0</small>
                    <div class="ta-center">{defaultColorsObj.variablesObj['positive-chroma']}</div>
                    <small class="ta-end">0.37</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['positive-chroma']}
                    min="0" max="0.37"
                    class="frm w-100"
                    type="range"
                    step=".01"
                />
            </div>
            <div>Hue:</div>
            <div>
                <div class="d-grid gtc-3 ai-end px-2">
                    <small class="ta-start">0</small>
                    <div class="ta-center">{defaultColorsObj.variablesObj['positive-hue']}</div>
                    <small class="ta-end">360</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['positive-hue']}
                    min="0" max="360"
                    class="frm w-100 bgi"
                    style="{bgiGradientVar('positive')}"
                    type="range"
                    step="1"
                />
            </div>
            <div>Colors:</div>
            <div class="d-grid g-3 ji-center p-4 br-md fx bgc-negative" style="--fxb: 100%;">
                <div class="ta-center fw-600 c-positive">Positive in negative</div>
                <div class="d-grid gaf-column w-100">
                    <div class="bgc-positive-10 c-positive-90 py-4 color-negative ta-center">10</div>
                    <div class="bgc-positive-20 c-positive-80 py-4 color-negative ta-center">20</div>
                    <div class="bgc-positive-30 c-positive-70 py-4 color-negative ta-center">30</div>
                    <div class="bgc-positive-40 c-positive-60 py-4 color-negative ta-center">40</div>
                    <div class="bgc-positive-50 c-positive-50 py-4 color-negative ta-center">50</div>
                    <div class="bgc-positive-60 c-negative-60 py-4 color-negative ta-center">60</div>
                    <div class="bgc-positive-70 c-negative-70 py-4 color-negative ta-center">70</div>
                    <div class="bgc-positive-80 c-negative-80 py-4 color-negative ta-center">80</div>
                    <div class="bgc-positive-90 c-negative-90 py-4 color-negative ta-center">90</div>
                    <div class="bgc-positive c-negative py-4 color-negative ta-center">100</div>
                </div>
            </div>
        </div>
        <div>
            <div>Lightness:</div>
            <div>
                <div class="d-grid gtc-3 ai-end px-2">
                    <small class="ta-start">0</small>
                    <div class="ta-center">{defaultColorsObj.variablesObj['negative-lightness']}</div>
                    <small class="ta-end">1</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['negative-lightness']}
                    min="0"
                    max="1"
                    class="frm w-100"
                    type="range"
                    step=".01"
                />
            </div>
            <div>Chroma:</div>
            <div>
                <div class="d-grid gtc-3 ai-end px-2">
                    <small class="ta-start">0</small>
                    <div class="ta-center">{defaultColorsObj.variablesObj['negative-chroma']}</div>
                    <small class="ta-end">0.37</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['negative-chroma']}
                    min="0" max="0.37"
                    class="frm w-100"
                    type="range"
                    step=".01"
                />
            </div>
            <div>Hue:</div>
            <div>
                <div class="d-grid gtc-3 ai-end px-2">
                    <small class="ta-start">0</small>
                    <div class="ta-center">{defaultColorsObj.variablesObj['negative-hue']}</div>
                    <small class="ta-end">360</small>
                </div>
                <Input
                    bind:value={defaultColorsObj.variablesObj['negative-hue']}
                    min="0" max="360"
                    class="frm w-100 bgi"
                    style="{bgiGradientVar('negative')}"
                    type="range"
                    step="1"
                />
            </div>
            <div>Colors:</div>
            <div class="d-grid g-3 ji-center p-4 br-md fx bgc-positive" style="--fxb: 100%;">
                <div class="ta-center fw-600 c-negative">Negative in positive</div>
                <div class="d-grid gaf-column w-100">
                    <div class="bgc-negative-10 c-negative-90 py-4 color-positive ta-center">10</div>
                    <div class="bgc-negative-20 c-negative-80 py-4 color-positive ta-center">20</div>
                    <div class="bgc-negative-30 c-negative-70 py-4 color-positive ta-center">30</div>
                    <div class="bgc-negative-40 c-negative-60 py-4 color-positive ta-center">40</div>
                    <div class="bgc-negative-50 c-negative-50 py-4 color-positive ta-center">50</div>
                    <div class="bgc-negative-60 c-positive-60 py-4 color-positive ta-center">60</div>
                    <div class="bgc-negative-70 c-positive-70 py-4 color-positive ta-center">70</div>
                    <div class="bgc-negative-80 c-positive-80 py-4 color-positive ta-center">80</div>
                    <div class="bgc-negative-90 c-positive-90 py-4 color-positive ta-center">90</div>
                    <div class="bgc-negative c-positive py-4 color-positive ta-center">100</div>
                </div>
            </div>
        </div>
    </div>
</section>