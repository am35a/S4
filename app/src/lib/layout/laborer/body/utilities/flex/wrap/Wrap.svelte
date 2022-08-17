<script lang="ts">
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let displayWrapArr: string[] = ['nowrap', 'wrap', 'wrap-reverse']
    let displayWrap: string = displayWrapArr[0]
</script>
<section class="d-grid g-2">
    <h3 id="wrapFlex">Wrap</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2">
            {#each displayWrapArr as values }
                <Button
                    class="btn-secondary {displayWrap === values ? 'active' : ''}"
                    on:click = {() => displayWrap = values}
                    disabled = {displayWrap === values}
                >d-{values}</Button>
            {/each}
        </div>
        <div class="d-flex f-{displayWrap} g-2 bgc-negative-10 p-4 overflow-x-hidden space-nowrap">
            <div class="bgc-negative-10 px-2 py-1">one</div>
            <div class="bgc-negative-10 px-2 py-1">two</div>
            <div class="bgc-negative-10 px-2 py-1">three</div>
            <div class="bgc-negative-10 px-2 py-1">four</div>
            <div class="bgc-negative-10 px-2 py-1">five</div>
            <div class="bgc-negative-10 px-2 py-1">six</div>
            <div class="bgc-negative-10 px-2 py-1">seven</div>
            <div class="bgc-negative-10 px-2 py-1">eight</div>
            <div class="bgc-negative-10 px-2 py-1">nine</div>
            <div class="bgc-negative-10 px-2 py-1">ten</div>
            <div class="bgc-negative-10 px-2 py-1">eleven</div>
            <div class="bgc-negative-10 px-2 py-1">twelve</div>
            <div class="bgc-negative-10 px-2 py-1">thirteen</div>
            <div class="bgc-negative-10 px-2 py-1">fourteen</div>
            <div class="bgc-negative-10 px-2 py-1">fifteen</div>
            <div class="bgc-negative-10 px-2 py-1">sixteen</div>
            <div class="bgc-negative-10 px-2 py-1">seventeen</div>
            <div class="bgc-negative-10 px-2 py-1">eighteen</div>
            <div class="bgc-negative-10 px-2 py-1">nineteen</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`
`
                }
            </Precode>
        </svelte:fragment>
    </Details>

</section>