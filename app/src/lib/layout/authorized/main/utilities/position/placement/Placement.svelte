<script>
    import Precode from 'component/Precode.svelte'

    let placementObj =  {
            left: 'l',
            top: 't',
            right: 'r',
            bottom: 'b'
        },
        placement = placementObj.left
</script>

<section>
    <h3 id="placement">Placement</h3>
    <p>
        The <b>{Object.values(placementObj).join('/')}</b> sets the horizontal and/or vertical position of
        a positioned element. To fine-tune positioning, you can use variables <b>--{Object.values(placementObj).join('/--')}</b> that are adaptive.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Position</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each Object.entries(placementObj) as [key, value]}
                    <button
                        class="btn"
                        class:active = {placement === value}
                        on:click = {() => placement = value}
                        disabled={placement === value}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="p-6 bgc-positive br o-hidden">
                <div class="p-relative bgc-negative-10 h" style="--h: 10em">
                    <div class="p-absolute bgc-negative-10 px-2 py-1 {placement}-0">0%</div>
                    <div class="p-absolute bgc-negative-10 px-2 py-1 {placement}-50">50%</div>
                    <div class="p-absolute bgc-negative-10 px-2 py-1 {placement}-100">100%</div>
                </div>
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="p-relative">
    <div class="p-absolute ${placement}-0">0%</div>
    <div class="p-absolute ${placement}-50">50%</div>
    <div class="p-absolute ${placement}-100">100%</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>