<script lang="ts">
    import Button from 'component/Button.svelte'
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"

    let displayOutsideArr: string[] = ['inline', 'block']
    let displayOutside: string = displayOutsideArr[0]
</script>

<section class="d-grid g-2">
    <h3 id="displayOutside">Outside</h3>
    <p>
        These display values override the outside behavior of the elements.
    </p>
    <div class="d-grid g-2 p-2 bgc-positive br">
        <div class="d-flex g-2">
            {#each displayOutsideArr as values }
                <Button
                    class="btn-secondary {displayOutside === values ? 'active' : ''}"
                    on:click = {() => displayOutside = values}
                    disabled = {displayOutside === values}
                >d-{values}</Button>
            {/each}
        </div>
        <div class="d-grid g-2">
            <div>
                <span class="d-{displayOutside} bgc-negative-10 p-4">span</span>
                <div class="d-{displayOutside} bgc-negative-10 p-4">div</div>
            </div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<div>
    <span class="d-${displayOutside}">span</span>
    <div class="d-${displayOutside}">div</div>
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>