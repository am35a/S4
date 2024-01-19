<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'

    let containerTypeObj = {
        'Grid': 'd-grid',
        'Inline grid': 'd-inline-grid'
    }
    let containerType:string = containerTypeObj['Grid']
</script>

<section>
    <h3 id="column">Column</h3>
    <p>
        <!-- The <b>gc-...</b> classes defines how distributes space between and around content items along the main-axis of a <b>flex</b> container, and the inline axis of a <b>grid</b> container. -->
        ...
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="d-flex g-2">
            {#each Object.entries(containerTypeObj) as [key, value]}
                <Button
                    class="btn-alt {containerType === value ? 'active' : ''}"
                    on:click = {() => containerType = value}
                    disabled={containerType === value}
                >{key}</Button>
            {/each}
        </div>
        <div>
            <div class="{containerType} gtc-12 g-2 bgc-negative-10 p-2">
                <div class="bgc-negative-10 px-2 py-1 gc-span-2 gcs-3">1</div>
                <div class="bgc-negative-10 px-2 py-1 gc-span-6 gcs-7">6</div>
            </div>
            <!-- <div class="{containerType} g-2 bgc-negative-10 p-2">
                <div class="bgc-negative-10 px-2 py-1">one</div>
                <div class="bgc-negative-10 px-2 py-1">two</div>
                <div class="bgc-negative-10 px-2 py-1">three</div>
            </div> -->
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                    {
`<div class="${containerType}">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>
`
                    }
            </Precode>
        </svelte:fragment>
    </Details>
</section>