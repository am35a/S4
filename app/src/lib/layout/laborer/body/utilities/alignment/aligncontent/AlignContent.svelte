<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'
    
    let containerTypesObj = {
        grid: 'd-grid cols-2',
        flex: 'd-flex fw-wrap'
    }
    let containerType: string = containerTypesObj.grid

    let alignContentArr: string[] = [ 'start', 'end', 'stretch', 'around', 'between', 'evenly' ]
</script>

<section>
    <h3 id="alignContent">Align content</h3>
    <p>
        The <b>ac-...</b> classes sets the distribution of space between and around content item of <b>grid</b> and <b>flex</b> containers.
    </p>
    <div class="d-grid g-4 mb-4 p-4 bgc-positive rounded">
        <div class="d-flex g-2">
            {#each Object.entries(containerTypesObj) as [key, value]}
                <Button
                    class="btn-secondary {containerType === value ? 'active' : ''}"
                    on:click = {() => containerType = value}
                    disabled = {containerType === value}
                >{key}</Button>
            {/each}
        </div>
        <div class="d-grid g-4">
            {#each alignContentArr as item }
                <div class="{containerType} g-2 bgc-negative-10 p-2 ac-{item}" style="height: 160rem;">
                    <div class="bgc-negative-10 px-2 py-1">one</div>
                    <div class="bgc-negative-10 px-2 py-1">two</div>
                    <div class="bgc-negative-10 px-2 py-1">three</div>
                    {#if containerType.includes('d-flex')}
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
                    {/if}
                </div>
            {/each}
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {#each alignContentArr as item }
                    {
`<div class="${containerType} ac-${item}">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</section>