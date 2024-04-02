<script>
    import Precode from 'component/Precode.svelte'

    let fontSizeArr = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl' ]
</script>

<div>
    <h4 id="size">Size</h4>
    <p>
        To set a font size have to use the <b>font-size--...</b> classes.
        Also available the standard <b>small</b> attribute to make any font small and <b>small</b> supports
        levels, the more attributes inside the smaller the font.
    </p>
    <div class="display--grid gap--lg">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! For custom sizes use the <b>font-size</b> class with the <b>--font-size</b>
            adaptive variable. The list of prefixes available on the <a href="/core#map">Core</a> page.
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="
                display--grid
                grid-template-columns--8
                gap--sm
                padding--sm
                background-color--positive
                border-radius--md
                justify-items--center
                align-items--center"
            >
                {#each fontSizeArr as item}
                    <div class="font-size--{item}">{item}</div>
                {/each}
            </div>
            <div class="
                display--grid
                grid-template-columns--3
                gap--sm
                padding--sm
                background-color--positive
                border-radius--md
                justify-items--center
                align-items--center"
            >
                <small>small</small>
                <small><small>double small</small></small>
                <small><small><small>triple small</small></small></small>
            </div>
            <div class="
                display--grid
                padding--sm
                background-color--positive
                border-radius--md
                justify-items--center
                align-items--center"
            >
                <div class="font-size" style="--font-size: 2em">
                    font-size 2em 
                </div>
            </div>
            <div class="display--grid gap--md">
                <b>Code</b>
                <Precode>
                    {#each fontSizeArr as item}
                        {
`<div class="font-size--${item}"> ... </div>
`
                        }
                    {/each}
                    {
`<small>small</small>
<small><small>bouble small</small></small>
<small><small><small>triple small</small></small></small>

<div class="font-size" style="--font-size: 2em">font-size 2em</div>
`
                    }
                </Precode>
            </div>
        </div>
    </div>
</div>