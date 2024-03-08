<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let widthParamsArr: string[] = [ '', '-0', '-25', '-50', '-75', '-100', '-fit', '-min', '-max' ]
    let width: number = 100
</script>

<section>
    <h3 id="width">Width</h3>
    <p>
        The <b>w</b> classes are used to set the width. The prefix <b>m</b> before <b>w</b> sets the minimum value and after <b>w</b> the maximum value of the width.
        Using <b>--mw/w/wm</b> variable sets custon width. 
        Full list of the width classes:
        <br>
        <span class="d-inline-flex g-4">
            <span class="d-grid g-2">
                {#each widthParamsArr as param}
                    <span class="fw-600">mw{param}</span>
                {/each}
            </span>
            <span class="d-grid g-2">
                {#each widthParamsArr as param}
                    <span class="fw-600">w{param}</span>
                {/each}
            </span>
            <span class="d-grid g-2">
                {#each widthParamsArr as param}
                    <span class="fw-600">wm{param}</span>
                {/each}
            </span>
        </span>
    </p>
    <div class="d-grid g-3 mb-4 p-3 background-color--positive br-md">
        <div class="d-grid">
            <label for="containerWidth">Width {width}%:</label>
            <input type="range" name="containerWidth" min={0} max={100} step={1} bind:value={width}>
        </div>
        <div class="background-color--negative-10 ta-center py-1 ws-nowrap w" style="--w: {width}%">--w: {width}%</div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`div class="w" style="--w: ${width}%">--w: ${width}%</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>