<script lang="ts">
    let bgPositionsArr: string[] = [ 'top-left', 'top', 'top-right', 'left', 'center', 'righ','bottom-left', 'bottom', 'bottom-right' ]
</script>

<section class="d-grid g-2">
    <h3 id="BackgroundPosition">Position</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 cols-3 bgc-positive rounded">
        {#each bgPositionsArr as position }
            <div class="bgi bgc-negative-10 bgp-{position} p-8" style="--bgi: url(http://placekitten.com/32/32)"></div>
        {/each}
    </div>
</section>