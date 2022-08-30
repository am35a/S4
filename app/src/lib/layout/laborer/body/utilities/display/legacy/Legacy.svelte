<script lang="ts">
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let displayLegacyArr: string[] = ['inline-block', 'inline-flex', 'inline-grid']
    let displayLegacy: string = displayLegacyArr[0]
</script>

<section class="d-grid g-2">
    <h3 id="displayLegacy">Legacy</h3>
    <p>
        From CSS 2 the legasy display values welcome still here and set control element of their both side. Equared to two modern two words value: "inline-flex" = "inline flex" and ect.
    </p>
    <div class="d-grid g-2 p-2 bgc-positive br">
        <div class="d-flex g-2">
            {#each displayLegacyArr as values }
                <Button
                    class="btn-secondary {displayLegacy === values ? 'active' : ''}"
                    on:click = {() => displayLegacy = values}
                    disabled = {displayLegacy === values}
                >d-{values}</Button>
            {/each}
        </div>
        <div class="d-grid g-2">
            <div class="d-{displayLegacy}">
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
            <Precode class="br-top-0">
                {
`<div class="d-${displayLegacy}">
    <span>span</span>
    <div>div</div>
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>