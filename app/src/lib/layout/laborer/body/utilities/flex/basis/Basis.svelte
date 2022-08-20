<script lang="ts">
    // import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    // let flexBasisArr: string[] = ['100', 'fill', 'max-content', 'min-content', 'fit-content']
    // let flexBasis: string = flexBasisArr[0]
</script>

<section class="d-grid g-2">
    <h3 id="flexBasis">Basis</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <!-- <div class="d-flex g-2">
            {#each flexBasisArr as values }
                <Button
                    class="btn-secondary {flexBasis === values ? 'active' : ''}"
                    on:click = {() => flexBasis = values}
                    disabled = {flexBasis === values}
                >fb-{values}</Button>
            {/each}
        </div> -->
        <!-- <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="fb-{flexBasis} bgc-negative-10 px-2 py-1">fb-{flexBasis} one</div>
            <div class="fg bgc-negative-10 px-2 py-1">simple two</div>
            <div class="fg bgc-negative-10 px-2 py-1">simple three</div>
        </div> -->
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="fb-100 bgc-negative-10 px-2 py-1">fb-100 one</div>
            <div class="fs bgc-negative-10 px-2 py-1">simple two</div>
            <div class="fg bgc-negative-10 px-2 py-1">simple three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="fb bgc-negative-10 px-2 py-1" style="--fb: 25%">fb 25% one</div>
            <div class="fg bgc-negative-10 px-2 py-1">simple two</div>
            <div class="fg bgc-negative-10 px-2 py-1">simple three</div>
        </div>
    </div>
</section>