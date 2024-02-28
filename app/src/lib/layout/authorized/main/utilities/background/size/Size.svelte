<script>
    import Precode from 'component/Precode.svelte'
</script>

<section>
    <h3 id="backgroundSize">Size</h3>
    <p>
        Add the <b>bgr-cover</b> or <b>bgs-contain</b> classes to container to change background size.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid gtc-2 g-3 p-3 bgc-positive br">
                <div
                class="bgi bgc-negative-10 bgs-cover h"
                style="--bgi: url(/images/logo.svg); --h: 8em"
            ></div>
            <div
                class="bgi bgc-negative-10 bgs-contain h"
                style="--bgi: url(/images/logo.svg); --h: 8em"
            ></div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="bgi bgs-cover" style="--bgi: url(...)"></div>
<div class="bgi bgs-contain" style="--bgi: url(...)"></div>
`
                }
            </Precode>
        </div>
    </div>
</section>