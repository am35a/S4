<script>
    import Precode from 'component/Precode.svelte'
</script>

<section>
    <h3 id="image">Image</h3>
    <p>
        Add the <b>background-image</b> or <b>background</b> classes to container before work with
        background-image and use the <b>--background-image</b> variable to control the property.
    </p>
    <div class="display--grid gap--lg">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! The <b>--background-image</b> variable is adaptive. The list of prefixes
            available on the <a href="/core#map">Core</a> page.
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--xs background-color--positive border-radius--md">
                <div class="background-image padding--xxxl" style="--background-image: url(/images/logo.svg)"></div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
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
