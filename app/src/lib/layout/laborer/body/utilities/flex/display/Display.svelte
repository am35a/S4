<script lang="ts">
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let displayFlexArr: string[] = ['inline-flex', 'flex']
    let displayFlex: string = displayFlexArr[0]
</script>

<section>
    <h3 id="displayFlex">Display</h3>
    <p>
        Create the flex container to start. Choose one of behaviors: <b>inline-flex</b> or <b>flex</b>.
    </p>
    <div class="d-grid g-4 mb-4 p-4 bgc-positive rounded">
        <div class="d-flex g-2">
            {#each displayFlexArr as values }
                <Button
                    class="btn-secondary {displayFlex === values ? 'active' : ''}"
                    on:click = {() => displayFlex = values}
                    disabled = {displayFlex === values}
                >d-{values}</Button>
            {/each}
        </div>
        <div>
            <div class="d-{displayFlex} bgc-negative-10 p-4">{displayFlex} container</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="d-${displayFlex}">...</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>

</section>