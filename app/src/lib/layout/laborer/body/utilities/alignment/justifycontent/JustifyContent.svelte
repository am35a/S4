<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'

    let containerTypeObj = {
        'inline-grid': 'd-inline-grid',
        'flex': 'd-flex'
    }
    let containerType:string = containerTypeObj['flex']

    let justifyContentArr = [ 'center', 'end', 'start', 'stretch', 'between', 'around', 'evenly' ]
</script>

<section class="d-grid g-2">
    <h3 class="JustifyContent">Justify content</h3>
    <p>
        The <b>jc-...</b> classes defines how distributes space between and around content items along the main-axis of a <b>flex</b> container, and the inline axis of a <b>grid</b> container.
    </p>
    <div class="d-grid g-2 p-2 bg-positive br">
        <div class="d-flex g-2">
            {#each Object.entries(containerTypeObj) as [key, value]}
                <Button
                    class="btn-secondary {containerType === value ? 'active' : ''}"
                    on:click = {() => containerType = value}
                    disabled={containerType === value}
                >{key}</Button>
            {/each}
        </div>
        <div class="d-grid g-2">
            {#each justifyContentArr as item }
                <div class="{containerType} g-2 bg-negative-10 p-2 jc-{item}">
                    <div class="bg-negative-10 px-2 py-1">one</div>
                    <div class="bg-negative-10 px-2 py-1">two</div>
                    <div class="bg-negative-10 px-2 py-1">three</div>
                </div>
            {/each}
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="btr-0">
                {#each justifyContentArr as item }
                    {
`<div class="d-flex jc-${item}">
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