<script>
    import Precode from 'component/Precode.svelte'
</script>
<div>
    <h4 id="custom">Custom</h4>
    <p>
        The <b>background-color</b> or <b>background</b> classes enable <b>--background-color</b> variable to set any color.
    </p>
    <div class="display--grid gap--lg">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! The <b>--background-color</b> variable is adaptive. The list of prefixes
            available on the <a href="/core#map">Core</a> page.
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div
    class="background-color"
    style="--background-color: ..."
> ... </div>
// or
<div
    class="background"
    style="--background-color: ..."
> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</div>