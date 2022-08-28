<script lang="ts">
    let bgPositionsArr: string[] = [ 'top-left', 'top', 'top-right', 'left', 'center', 'righ','bottom-left', 'bottom', 'bottom-right' ]
</script>

<section>
    <h3 id="backgroundPosition">Position</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-3 mb-4 p-3 cols-3 bgc-positive rounded">
        {#each bgPositionsArr as position }
            <div class="bgi bgc-negative-10 bgp-{position} p-8" style="--bgi: url(http://placekitten.com/32/32)"></div>
        {/each}
    </div>
</section>