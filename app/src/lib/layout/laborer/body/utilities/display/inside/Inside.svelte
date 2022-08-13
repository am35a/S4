<script lang="ts">
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let displayInsideArr: string[] = ['flow-root', 'flex', 'grid']
    let displayInside: string = displayInsideArr[0]
</script>

<section class="d-grid g-2">
    <h3 id="displayInside">Inside</h3>
    <p>
        These display values override the behavior of the elements.
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2">
            {#each displayInsideArr as values }
                <Button
                    class="btn-secondary {displayInside === values ? 'active' : ''}"
                    on:click = {() => displayInside = values}
                    disabled = {displayInside === values}
                >d-{values}</Button>
            {/each}
        </div>
        <div class="d-grid g-2">
            <div class="d-{displayInside}">
                <span class="bgc-negative-10 p-4">span</span>
                <div class="bgc-negative-10 p-4">div</div>
            </div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="d-${displayInside}">
    <span>span</span>
    <div>div</div>
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>