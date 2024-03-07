<script>
    import Precode from 'component/Precode.svelte'
</script>

<section>
    <h3 id="backgroundSize">Size</h3>
    <p>
        Add the <b>bgr-cover</b> or <b>background-size--contain</b> classes to container to change background size.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid gtc-2 g-3 p-3 bgc-positive br-md">
                <div
                class="background-image bgc-negative-10 background-size--cover h"
                style="--background-image: url(/images/logo.svg); --h: 8em"
            ></div>
            <div
                class="background-image bgc-negative-10 background-size--contain h"
                style="--background-image: url(/images/logo.svg); --h: 8em"
            ></div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="background-image background-size--cover" style="--background-image: url(...)"></div>
<div class="background-image background-size--contain" style="--background-image: url(...)"></div>
`
                }
            </Precode>
        </div>
    </div>
</section>