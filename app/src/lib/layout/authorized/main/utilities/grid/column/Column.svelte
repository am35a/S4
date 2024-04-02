<script>
    // import Input from 'component/Input.svelte'
    import Precode from 'component/Precode.svelte'

    let containerTypeObj = {
        'Grid': 'display--grid',
        'Inline grid': 'display--inline-grid'
    },
        containerType = containerTypeObj['Grid']
        // columnClasses = '',
        // columnStyles = ''

</script>

<section>
    <h3 id="column">Column</h3>
    <p>
        <!-- The <b>grid-column--...</b> classes defines how distributes space between and around content items along the main-axis of a <b>flex</b> container, and the inline axis of a <b>grid</b> container. -->
        ...
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Display</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each Object.entries(containerTypeObj) as [key, value]}
                    <button
                        class="btn"
                        class:active={containerType === value}
                        on:click={() => containerType = value}
                        disabled={containerType === value}
                    >{key}</button>
                {/each}
            </div>    
        </div>
        <!-- <div class="display--grid gap--md">
            <b>Customing</b>
            <div class="display--grid grid-template-columns--2 p_grid-template-columns--1 gap--xs">
                <div class="display--grid">
                    <label for="columnClasses">Grid classes:</label>
                    <Input
                        id="columnClasses"
                        bind:value={columnClasses}
                        placeholder=""
                        type="text" />
                </div>
                <div class="display--grid">
                    <label for="columnStyles">Grid styles:</label>
                    <Input
                        id="columnStyles"
                        bind:value={columnStyles}
                        placeholder=""
                        type="text" />
                </div>
            </div>
        </div> -->
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="padding--sm background-color--positive border-radius--md">
                <div class="{containerType} grid-template-columns--12 gap--xs background-color--negative-10 padding--xs">
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs grid-column--span-2 grid-column-start--3">1</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs grid-column--span-6 grid-column-start--7">6</div>
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div class="${containerType} grid-template-columns--12">
    <div class="grid-column--span-2 grid-column-start--3">one</div>
    <div class="grid-column--span-6 grid-column-start--7">two</div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>