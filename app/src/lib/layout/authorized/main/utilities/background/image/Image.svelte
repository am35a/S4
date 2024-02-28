<script>
    import Precode from 'component/Precode.svelte'
</script>

<section>
    <h3 id="backgroundImage">Image</h3>
    <p>
        Add the <b>bgi</b> class to container before work with background-image and use the <b>--bgi</b> variable to control the property.
    </p>
    <div class="d-grid g-5">
        <div class="alert alert-info js-start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! The <b>--bgi</b> variable is adaptive. The list of prefixes
            available on the <a href="/core#map">Core</a> page.
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-2 bgc-positive br">
                <div class="bgi p-8" style="--bgi: url(/images/logo.svg)"></div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="bgi" style="--bgi: url(...)"></div>
`
                }
            </Precode>
        </div>
    </div>
</section>
