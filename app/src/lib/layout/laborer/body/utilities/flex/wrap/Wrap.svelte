<script lang="ts">
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let flexWrapArr: string[] = ['nowrap', 'wrap', 'wrap-reverse']
    let flexWrap: string = flexWrapArr[0]
</script>

<section>
    <h3 id="flexWrap">Wrap</h3>
    <p>
        Change wrap items with <b>fw-...</b> classes in a flex container.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="d-flex g-2">
            {#each flexWrapArr as values }
                <Button
                    class="btn-secondary {flexWrap === values ? 'active' : ''}"
                    on:click = {() => flexWrap = values}
                    disabled = {flexWrap === values}
                >fw-{values}</Button>
            {/each}
        </div>
        <div class="d-flex fw-{flexWrap} g-4 bgc-negative-10 p-4 ox-hidden ws-nowrap">
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
            <Precode class="br-top-0">
                {
`<div class="d-flex fw-${flexWrap}">
    ...
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>