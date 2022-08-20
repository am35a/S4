<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section class="d-grid g-2">
    <h3 id="flexGrow">Grow</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="fg bgc-negative-10 px-2 py-1">fg one</div>
            <div class="bgc-negative-10 px-2 py-1">simple two</div>
            <div class="fg bgc-negative-10 px-2 py-1">fg three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1">simple one</div>
            <div class="fg bgc-negative-10 px-2 py-1">fg two</div>
            <div class="bgc-negative-10 px-2 py-1">simple three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="fg bgc-negative-10 px-2 py-1">fg one</div>
            <div class="fg bgc-negative-10 px-2 py-1">fg two</div>
            <div class="fg bgc-negative-10 px-2 py-1">fg three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="fg bgc-negative-10 px-2 py-1">fg one</div>
            <div class="fg bgc-negative-10 px-2 py-1" style="--fg: 2">--fg: 2 two</div>
            <div class="fg bgc-negative-10 px-2 py-1" style="--fg: 3">--fg: 3 three</div>
        </div>
    </div>
</section>