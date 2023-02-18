<script lang="ts">
    let buttonVariantArr: string[] = ['', 'alt-', 'outline-']
    // let buttonTypesObj = {
    //     default: '',
    //     mute: 'mute',
    //     outline: '-d'
    // }

    let buttonBorderArr: string[] = ['br-0', 'br-xs', 'br-sm', 'br-md', 'br-lg', 'br-pill']
    let buttonBorder: string = buttonBorderArr[2]

    let buttonSizeArr: string[] = ['btn-xxl', 'btn-xl', 'btn-lg', 'btn-md', 'btn-sm', 'btn-xs', 'btn-xxs']
    let buttonSize: string = buttonSizeArr[3]

</script>

<article>
    <h2 id="css">CSS supported UI</h2>
    <section class="d-grid g-5">

        <h3 id="color">Color</h3>
        <div class="d-flex fw-wrap g-4">            
            <div class="d-grid ji-center p-4 bgc-positive br-lg f" style="--fg: 1; --fb: 0;">
                <div class="ta-center fw-600">primary</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="10em" height="10em"><path class="color-mute" fill="hsl(210 90% 50% / 0.3)" d="M 32 2 L 62 17 L 62 45 L 32 62 L 2 45 L 2 17 L 32 2 Z"></path><path class="color-light" fill="hsl(210 90% 65%)" d="M 4 18 L 32 32 L 32 60 L 4 44 L 4 18 Z"></path><path class="color-default" fill="hsl(210 90% 50%)" d="M 4 18 L 32 4 L 60 18 L 32 32 L 4 18 Z"></path><path class="color-dark" fill="hsl(210 90% 35%)" d="M 32 32 L 60 18 L 60 44 L 32 60 L 32 32 Z"></path></svg>
            </div>
            <div class="d-grid ji-center p-4 bgc-positive br-lg f" style="--fg: 1; --fb: 0;">
                <div class="ta-center fw-600">secondary</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="10em" height="10em"><path class="color-mute" fill="hsl(210 10% 50% / 0.3)" d="M 32 2 L 62 17 L 62 45 L 32 62 L 2 45 L 2 17 L 32 2 Z"></path><path class="color-light" fill="hsl(210 10% 65%)" d="M 4 18 L 32 32 L 32 60 L 4 44 L 4 18 Z"></path><path class="color-default" fill="hsl(210 10% 50%)" d="M 4 18 L 32 4 L 60 18 L 32 32 L 4 18 Z"></path><path class="color-dark" fill="hsl(210 10% 35%)" d="M 32 32 L 60 18 L 60 44 L 32 60 L 32 32 Z"></path></svg>
            </div>
            <div class="d-grid ji-center p-4 bgc-positive br-lg f" style="--fg: 1; --fb: 0;">
                <div class="ta-center fw-600">info</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="10em" height="10em"><path class="color-mute" fill="hsl(190 90% 50% / 0.3)" d="M 32 2 L 62 17 L 62 45 L 32 62 L 2 45 L 2 17 L 32 2 Z"></path><path class="color-light" fill="hsl(190 90% 65%)" d="M 4 18 L 32 32 L 32 60 L 4 44 L 4 18 Z"></path><path class="color-default" fill="hsl(190 90% 50%)" d="M 4 18 L 32 4 L 60 18 L 32 32 L 4 18 Z"></path><path class="color-dark" fill="hsl(190 90% 35%)" d="M 32 32 L 60 18 L 60 44 L 32 60 L 32 32 Z"></path></svg>
            </div>
            <div class="d-grid ji-center p-4 bgc-positive br-lg f" style="--fg: 1; --fb: 0;">
                <div class="ta-center fw-600">success</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="10em" height="10em"><path class="color-mute" fill="hsl(120 50% 50% / 0.3)" d="M 32 2 L 62 17 L 62 45 L 32 62 L 2 45 L 2 17 L 32 2 Z"></path><path class="color-light" fill="hsl(120 50% 65%)" d="M 4 18 L 32 32 L 32 60 L 4 44 L 4 18 Z"></path><path class="color-default" fill="hsl(120 50% 50%)" d="M 4 18 L 32 4 L 60 18 L 32 32 L 4 18 Z"></path><path class="color-dark" fill="hsl(120 50% 35%)" d="M 32 32 L 60 18 L 60 44 L 32 60 L 32 32 Z"></path></svg>
            </div>
            <div class="d-grid ji-center p-4 bgc-positive br-lg f" style="--fg: 1; --fb: 0;">
                <div class="ta-center fw-600">warning</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="10em" height="10em"><path class="color-mute" fill="hsl(40 90% 50% / 0.3)" d="M 32 2 L 62 17 L 62 45 L 32 62 L 2 45 L 2 17 L 32 2 Z"></path><path class="color-light" fill="hsl(40 90% 65%)" d="M 4 18 L 32 32 L 32 60 L 4 44 L 4 18 Z"></path><path class="color-default" fill="hsl(40 90% 50%)" d="M 4 18 L 32 4 L 60 18 L 32 32 L 4 18 Z"></path><path class="color-dark" fill="hsl(40 90% 35%)" d="M 32 32 L 60 18 L 60 44 L 32 60 L 32 32 Z"></path></svg>
            </div>
            <div class="d-grid ji-center p-4 bgc-positive br-lg f" style="--fg: 1; --fb: 0;">
                <div class="ta-center fw-600">error</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="10em" height="10em"><path class="color-mute" fill="hsl(0 50% 50% / 0.3)" d="M 32 2 L 62 17 L 62 45 L 32 62 L 2 45 L 2 17 L 32 2 Z"></path><path class="color-light" fill="hsl(0 50% 65%)" d="M 4 18 L 32 32 L 32 60 L 4 44 L 4 18 Z"></path><path class="color-default" fill="hsl(0 50% 50%)" d="M 4 18 L 32 4 L 60 18 L 32 32 L 4 18 Z"></path><path class="color-dark" fill="hsl(0 50% 35%)" d="M 32 32 L 60 18 L 60 44 L 32 60 L 32 32 Z"></path></svg>
            </div>
            <div class="d-grid g-3 ji-center p-4 br-lg f bgc-negative" style="--fb: 100%;">
                <div class="ta-center fw-600 c-positive">positive</div>
                <div class="d-grid grid-flow-col w-100">
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
            <div class="d-grid g-3 ji-center p-4 br-lg f bgc-positive" style="--fb: 100%;">
                <div class="ta-center fw-600">negative</div>
                <div class="d-grid grid-flow-col w-100">
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

        <h3 id="typography">Typography</h3>
        <div class="d-flex fw-wrap g-4">
            <div class="d-grid ji-center ac-center p-4 bgc-positive br-lg f" style="--fg: 4; --fb: 0;">
                <div class="my-4 w-75 ta-center">
                    <span class="fs lh-1" style="--fs: 8em">Aa</span>
                    <hr class="my-8 w-100 bb">
                    <span class="">system default</span>
                </div>
            </div>
            <div class="d-grid ji-center p-4 bgc-positive br-lg f" style="--fg: 4; --fb: 0;">
                <div class="h1 ws-nowrap">Heading 1</div>
                <div class="h2 ws-nowrap">Heading 2</div>
                <div class="h3 ws-nowrap">Heading 3</div>
                <div class="h4 ws-nowrap">Heading 4</div>
                <div class="h5 ws-nowrap">Heading 5</div>
                <div class="h6 ws-nowrap">Heading 6</div>
            </div>
            <div class="d-grid ji-center p-4 bgc-positive br-lg f" style="--fg: 1;">
                <div class="fw-100">100</div>
                <div class="fw-200">200</div>
                <div class="fw-300">300</div>
                <div class="fw-400">400</div>
                <div class="fw-500">500</div>
                <div class="fw-600">600</div>
                <div class="fw-700">700</div>
                <div class="fw-800">800</div>
                <div class="fw-900">900</div>
            </div>
            <div class="d-grid ji-center p-4 bgc-positive br-lg f" style="--fg: 1;">
                <div class="fs-xxxl">xxx-large</div>
                <div class="fs-xxl">xx-large</div>
                <div class="fs-xl">x-large</div>
                <div class="fs-lg">larger</div>
                <div class="fs-md">default</div>
                <div class="fs-sm">smaller</div>
                <div class="fs-xs">x-small</div>
                <div class="fs-xxs">xx-small</div>
            </div>
            <div class="d-grid p-4 bgc-positive br-lg">
                <p>
                    <b>Paragraph</b> is big part of your designs. And here we are again, prepared for every situation.
                    One hint for your at the end: Always care about readability and use line-height more than 140%.
                </p>
                <p>
                    Don't forget we also have for standard text manipulation: <strong>strong</strong>, <i>italik</i>, <sub>sub</sub>, <sup>sup</sup>, <small>small</small>.
                </p>
            </div>
        </div>

        <h3 id="Icons">Icons</h3>
        <div class="d-grid g-4 p-4 bgc-positive br-lg">
            <div>
                <p>
                    The cash posible icon is the best way to take heart any front-end developer building deep data applications.
                </p>
                <div class="d-grid cols-8 ji-center ai-end">
                    <span class="ico fs-xxxl" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                    <span class="ico fs-xxl" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                    <span class="ico fs-xl" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                    <span class="ico fs-lg" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                    <span class="ico" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                    <span class="ico fs-sm" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                    <span class="ico fs-xs" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                    <span class="ico fs-xxs" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                </div>
                <hr class="mt-1">
                <div class="d-grid cols-8 ji-center ai-top">
                    <span class="fs-xxxl">xxxl</span>
                    <span class="fs-xxl">xxl</span>
                    <span class="fs-xl">xl</span>
                    <span class="fs-lg">lg</span>
                    <span>md</span>
                    <span class="fs-sm">sm</span>
                    <span class="fs-xs">xs</span>
                    <span class="fs-xxs">xxs</span>
                </div>

            </div>
            <div class="d-flex ai-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 100 100">
                    <circle cx="50" cy="23" r="13" fill="var(--success-color)">
                      <animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23"></animate>
                    </circle>
                </svg>
                <p>
                    There is perfect support for icon sets like font awesome, google fonts, ect or simply SVG with or without animation.
                </p>
            </div>
        </div>

        <h3 id="grid">Grid by grid</h3>
        <div class="d-grid cols-12 g-4 p-4 bgc-positive br-lg">
            <p class="col-span-12">
                Play your imagination without limits to be completely responsive now - <b>S4 Grid</b> has everything you need! 
            </p>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-1">one <span class="d-none p:d-inline-block">to twelve</span></div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-11">eleven <span class="d-none p:d-inline-block">to twelve</span></div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-2">two <span class="d-none p:d-inline-block">to twelve</span></div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-10">ten <span class="d-none p:d-inline-block">to twelve</span></div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-3">three <span class="d-none p:d-inline-block">to twelve</span></div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-9">nine <span class="d-none p:d-inline-block">to twelve</span></div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-4">four <span class="d-none p:d-inline-block">to twelve</span></div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-8">eight <span class="d-none p:d-inline-block">to twelve</span></div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-5">five <span class="d-none p:d-inline-block">to twelve</span></div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-7">seven <span class="d-none p:d-inline-block">to twelve</span></div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-6">six <span class="d-none p:d-inline-block">to twelve</span></div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden p:col-span-12 col-span-6">sex <span class="d-none p:d-inline-block">to twelve</span></div>
        </div>
        <div class="d-grid cols-12 g-4 p-4 bgc-positive br-lg">
            <div class="bgc-negative-10 br py-1 ta-center o-hidden col-span-2 col-start-3">two</div>
            <div class="bgc-negative-10 br py-1 ta-center o-hidden col-span-6 col-start-7">six</div>
        </div>

        <h3 class="shadow">Shadow</h3>
        <div class="d-flex m:fw-wrap g-4">
            <div class="d-grid g-3 bgc-positive p-4 br-lg s-xxxl">
                <div>
                    <p>
                        Any of the material fantasy has a solid foundation in the form of eight sets of adaptive shadows.
                    </p>
                    <p>
                        Each you want of the dividers, paragraph, icon, anchor, button and ect of atoms or completly molecules as headers, aside menu or fully components - its all support shadows.
                    </p>
                </div>
                <div class="d-grid bgc-positive p-4 br-lg s-xxl">
                    <div class="d-grid bgc-positive p-4 br-lg s-xl">
                        <div class="d-grid bgc-positive p-4 br-lg s-lg">
                            <div class="d-grid bgc-positive p-4 br-lg s-md">
                                <div class="d-grid bgc-positive p-4 br-lg s-sm">
                                    <div class="d-grid bgc-positive p-4 br-lg s-xs">
                                        <div class="d-grid bgc-positive p-4 br s-xxs">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="alerts">Alerts</h3>
        <div class="d-grid p-4 bgc-positive br-lg">
            <div class="alert alert-primary">
                Give importance with this simple alert.
            </div>
            <div class="alert alert-secondary">
                Secondary alerts are likely to be rarely used.
            </div>
            <hr class="mb-4 w-75 mx-auto">
            <div class="alert alert-info">
                <span class="ico" style="--ico-image: url(/icons/info-circle.svg);">&nbsp;</span>
                All servers are now running smoothly again! Thanks.
            </div>
            <div class="alert alert-success">
                <span class="ico" style="--ico-image: url(/icons/check-circle.svg);">&nbsp;</span>
                Success! This is positive alert.
            </div>
            <div class="alert alert-warning">
                <span class="ico" style="--ico-image: url(/icons/alert-triangel.svg);">&nbsp;</span>
                Warning. Loading of this page taking a way too long.
            </div>
            <div class="alert alert-error mb-0">
                <span class="ico" style="--ico-image: url(/icons/alert-octagon.svg);">&nbsp;</span>
                Error. Can`t connect to the platform.
            </div>
        </div>

        <h3 id="buttons">Buttons</h3>
        <div class="d-flex g-4 jc-between ai-center pb-4 border-bottom">
            <div class="d-flex g-4 ai-center">
                {#each buttonSizeArr as values }
                    <button
                        class="btn btn-outline-primary btn-ico {buttonBorder} {values} {buttonSize === values ? 'active' : ''}"
                        on:click = {() => buttonSize = values}
                        disabled = {buttonSize === values}
                    ><span class="ico" style="--ico-image: url(/icons/empty.svg);">&nbsp;</span></button>
                {/each}
            </div>

            <div class="d-flex g-4">
                {#each buttonBorderArr as values }
                    <button
                        class="btn btn-outline-primary btn-ico {buttonSize} {values} {buttonBorder === values ? 'active' : ''}"
                        on:click={() => buttonBorder = values}
                        disabled = {buttonBorder === values}
                    ><span class="ico" style="--ico-image: url(/icons/empty.svg);">&nbsp;</span></button>
                {/each}
            </div>
        </div>
        <div class="d-flex fw-wrap g-4">

            {#each buttonVariantArr as variant }
            <div class="d-flex g-4 jc-evenly p-4 bgc-positive br-lg f" style="--fg: 1;">
                <div class="d-grid g-3">
                    <button class="btn btn-{variant}primary {buttonBorder} {buttonSize}" type="button">Primary</button>
                    <button class="btn btn-{variant}primary {buttonBorder} {buttonSize} active" type="button">Active</button>
                    <button class="btn btn-{variant}primary {buttonBorder} {buttonSize}" disabled type="button">Disabled</button>
                    <button class="btn btn-{variant}primary {buttonBorder} {buttonSize} active" disabled type="button">Active / Disabled</button>
                </div>
                <div class="d-grid g-3">
                    <button class="btn btn-{variant}secondary {buttonBorder} {buttonSize}" type="button">Secondary</button>
                    <button class="btn btn-{variant}secondary {buttonBorder} {buttonSize} active" type="button">Active</button>
                    <button class="btn btn-{variant}secondary {buttonBorder} {buttonSize}" disabled type="button">Disabled</button>
                    <button class="btn btn-{variant}secondary {buttonBorder} {buttonSize} active" disabled type="button">Active / Disabled</button>
                </div>
            <!-- </div>
            <div class="d-flex fw-wrap g-4 jc-evenly p-4 bgc-positive br-lg f" style="--fg: 1;"> -->
                <div class="d-grid g-3">
                    <button class="btn btn-{variant}info {buttonBorder} {buttonSize}" type="button">
                        <span class="ico" style="--ico-image: url(/icons/send.svg);">&nbsp;</span>
                        Send
                    </button>
                    <button class="btn btn-{variant}info {buttonBorder} {buttonSize} active" type="button">
                        <span class="ico" style="--ico-image: url(/icons/send.svg);">&nbsp;</span>
                        Send
                    </button>
                    <button class="btn btn-{variant}info {buttonBorder} {buttonSize}" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/send.svg);">&nbsp;</span>
                        Send
                    </button>
                    <button class="btn btn-{variant}info {buttonBorder} {buttonSize} active" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/send.svg);">&nbsp;</span>
                        Send
                    </button>
                </div>
                <div class="d-grid g-3">
                    <button class="btn btn-{variant}success {buttonBorder} {buttonSize}" type="button">
                        <span class="ico" style="--ico-image: url(/icons/check.svg);">&nbsp;</span>
                        Confirm
                    </button>
                    <button class="btn btn-{variant}success {buttonBorder} {buttonSize} active" type="button">
                        <span class="ico" style="--ico-image: url(/icons/check.svg);">&nbsp;</span>
                        Confirm
                    </button>
                    <button class="btn btn-{variant}success {buttonBorder} {buttonSize}" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/check.svg);">&nbsp;</span>
                        Confirm
                    </button>
                    <button class="btn btn-{variant}success {buttonBorder} {buttonSize} active" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/check.svg);">&nbsp;</span>
                        Confirm
                    </button>
                </div>
                <div class="d-grid g-3">
                    <button class="btn btn-{variant}warning {buttonBorder} {buttonSize}" type="button">
                        <span class="ico" style="--ico-image: url(/icons/x.svg);">&nbsp;</span>
                        Discard
                    </button>
                    <button class="btn btn-{variant}warning {buttonBorder} {buttonSize} active" type="button">
                        <span class="ico" style="--ico-image: url(/icons/x.svg);">&nbsp;</span>
                        Discard
                    </button>
                    <button class="btn btn-{variant}warning {buttonBorder} {buttonSize}" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/x.svg);">&nbsp;</span>
                        Discard
                    </button>
                    <button class="btn btn-{variant}warning {buttonBorder} {buttonSize} active" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/x.svg);">&nbsp;</span>
                        Discard
                    </button>
                </div>
                <div class="d-grid g-3">
                    <button class="btn btn-{variant}error {buttonBorder} {buttonSize}" type="button">
                        <span class="ico" style="--ico-image: url(/icons/trash.svg);">&nbsp;</span>
                        Remove
                    </button>
                    <button class="btn btn-{variant}error {buttonBorder} {buttonSize} active" type="button">
                        <span class="ico" style="--ico-image: url(/icons/trash.svg);">&nbsp;</span>
                        Remove
                    </button>
                    <button class="btn btn-{variant}error {buttonBorder} {buttonSize}" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/trash.svg);">&nbsp;</span>
                        Remove
                    </button>
                    <button class="btn btn-{variant}error {buttonBorder} {buttonSize} active" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/trash.svg);">&nbsp;</span>
                        Remove
                    </button>
                </div>
            </div>
            {/each}
            
            <div class="d-flex fw-wrap g-4 jc-evenly ai-center p-4 bgc-positive br-lg f" style="--fg: 1;">
                <p>
                    All button sizes depend on the font size. Don't think the S4 only has seven sizes. Make free your design desire and try to place one size element into another size - it's magic!
                </p>
            </div>

        </div>

    </section>
</article>