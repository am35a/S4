<script lang="ts">
    import Accordion from 'component/Accordion.svelte'
    import Details from 'component/Details.svelte'
    import Precode from 'component/Precode.svelte'

    let customClasses: string = 'd-grid g-4 w-100'
</script>

<article>
    <h2 id="accordion">Accordion</h2>
    <p>
        The Accordion сomponent is a watcher wrapper for containers <a href="/components/details"><b>Details</b> components</a> or <b>details</b> tags within it.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Customize</b>
            <input
                id="customClasses"
                class="frm"
                bind:value={customClasses}
                type="text"
                placeholder="Type utility classes to customizing the component"
            >
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-flex p-4 bgc-positive br">
                <Accordion class="{customClasses}">
                    {#each Array(3) as _, i}
                        <Details class="dtl-alt mb-0">
                            <svelte:fragment slot="title">
                                Section title {i + 1}
                            </svelte:fragment>
                            <svelte:fragment slot="body">
                                <div class="p-4">
                                    Content for section {i + 1} goes here.
                                </div>
                            </svelte:fragment>
                        </Details>
                    {/each}
                </Accordion>
            </div>        
        </div>
        <div class="d-grid g-4">
            <div class="d-grid g-4">
                <b>Svelte</b>
                <Precode>
                    {
`// before using the component, import it
// import Accordion from 'component/Accordion.svelte'

<Accordion class="${customClasses}">
    // <Details> or <details> goes here
</Accordion>
`
                    }
                </Precode>
            </div>
        </div>
    </div>
</article>