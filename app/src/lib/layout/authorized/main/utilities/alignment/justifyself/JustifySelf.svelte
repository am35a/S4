<script>
    import Precode from 'component/Precode.svelte'

    let justifySelfArr = [ 'center', 'end', 'start', 'stretch' ]
</script>

<section>
    <h3 id="justifySelf">Justify self</h3>
    <p>
        The <b>js-{Object.values(justifySelfArr).join('/')}</b> utilities sets the way a box is
        justified inside its alignment container along the appropriate axis.
    </p>
    <div class="d-grid g-5">
        <div class="alert alert-warning js-start">
            <span class="ico fs-xl" style="--ico-image: url(/icons/alert-triangle.svg)"></span>
            The properties works only for <b>grid</b> containers!
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br-md">
                {#each justifySelfArr as item }
                    <div class="d-grid gtc-2 g-2 bgc-negative-10 p-2">
                        <div class="bgc-negative-10 px-2 py-1 js-{item}">one</div>
                        <div class="bgc-negative-10 px-2 py-1">two</div>
                        <div class="bgc-negative-10 px-2 py-1">three</div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {#each justifySelfArr as item }
                    {
`<div class="d-grid">
    <div class="js-${item}">one</div>
    // ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>