<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let heightParamsArr: string[] = [ '', '-0', '-25', '-50', '-75', '-100', '-fit', '-min', '-max' ]
    let height: number = 100
</script>

<section>
    <h3 id="height">Height</h3>
    <p>
        The <b>h</b> classes are used to set the height. The prefix <b>m</b> before <b>h</b> sets the minimum value and after <b>h</b> the maximum value of the height.
        Using <b>--mh/h/hm</b> variable sets custon height. 
        Full list of the height classes:
        <br>
        <span class="display--inline-flex g-4">
            <span class="display--grid g-2">
                {#each heightParamsArr as param}
                    <span class="fw-600">mh{param}</span>
                {/each}
            </span>
            <span class="display--grid g-2">
                {#each heightParamsArr as param}
                    <span class="fw-600">h{param}</span>
                {/each}
            </span>
            <span class="display--grid g-2">
                {#each heightParamsArr as param}
                    <span class="fw-600">hm{param}</span>
                {/each}
            </span>
        </span>
    </p>
    <div class="display--grid g-3 mb-4 p-3 background-color--positive border-radius--md">
        <div class="display--grid">
            <label for="containerHeight">Height {height}%:</label>
        </div>
        <div class="display--flex" style="height: 10em;">
            <div>
                <input class="h-100" type="range" name="containerHeight" orient="vertical" min={0} max={100} step={1} bind:value={height}>
            </div>
            <div class="background-color--negative-10 ta-center mt-auto mx-auto px-1 ws-nowrap w-fit h display--flex align-items--end" style="--h: {height}%">--h: {height}%</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="border-radius--top-0">
                {
`div class="h" style="--h: ${height}%">--h: ${height}%</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>