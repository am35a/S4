<script>
    import Precode from 'component/Precode.svelte'

    let bgPositionsArr = [ 'top-left', 'top', 'top-right', 'left', 'center', 'righ','bottom-left', 'bottom', 'bottom-right' ]
</script>

<section>
    <h3 id="backgroundPosition">Position</h3>
    <p>
        Add the <b>bgp-{bgPositionsArr.join('/')}</b> classes to container to work with background-position.
    </p>
    <div class="d-grid g-5">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! The <b>--bgi</b> variable is adaptive. The list of prefixes available on the <a href="/core#map">Core</a> page.
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid gtc-3 g-3 p-2 bgc-positive br-md">
                {#each bgPositionsArr as position }
                    <div
                        class="bgi bgc-negative-10 bgp-{position} bgs h"
                        style="--bgi: url(/images/logo.svg); --bgs: 4em auto; --h: 6em"
                    ></div>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {#each bgPositionsArr as position }
                    {
`<div class="bgi bgp-${position}" style="--bgi: url(...)"></div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>

</section>