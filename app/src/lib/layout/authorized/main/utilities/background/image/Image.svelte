<script>
    import Precode from 'component/Precode.svelte'
</script>

<section>
    <h3 id="image">Image</h3>
    <p>
        Add the <b>background-image</b> class to container before work with background-image and use the <b>--background-image</b> variable to control the property.
    </p>
    <div class="d-grid g-5">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! The <b>--background-image</b> variable is adaptive. The list of prefixes
            available on the <a href="/core#map">Core</a> page.
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-2 background-color--positive br-md">
                <div class="background-image p-8" style="--background-image: url(/images/logo.svg)"></div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div
    class="background-image"
    style="--background-image: url(...)"
> //... </div>
// or
<div
    class="background"
    style="--background-image: url(...)"
>
`
                }
            </Precode>
        </div>
    </div>
</section>
