<script>
    import Accordion from 'component/Accordion.svelte'
    import Details from 'component/Details.svelte'
    import Precode from 'component/Precode.svelte'

    let customClasses = 'display--grid gap--md width--100'
</script>

<article>
    <h2 id="accordion">Accordion</h2>
    <p>
        The Accordion сomponent is a watcher wrapper for containers <a href="/components/details"><b>Details</b> components</a> or <b>details</b> tags within it.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Customize</b>
            <input
                id="customClasses"
                class="frm"
                bind:value={customClasses}
                type="text"
                placeholder="Type utility classes to customizing the component"
            >
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--flex padding--md background-color--positive border-radius--md">
                <Accordion class="{customClasses}">
                    {#each Array(3) as _, i}
                        <Details>
                            <svelte:fragment slot="title">
                                Section title {i + 1}
                            </svelte:fragment>
                            <svelte:fragment slot="body">
                                <div class="padding--md">
                                    Content for section {i + 1} goes here.
                                </div>
                            </svelte:fragment>
                        </Details>
                    {/each}
                </Accordion>
            </div>        
        </div>
        <div class="display--grid gap--md">
            <div class="display--grid gap--md">
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