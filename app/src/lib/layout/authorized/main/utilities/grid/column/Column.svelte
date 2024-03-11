<script lang="ts">
    import Input from 'component/Input.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'

    let containerTypeObj={
        'Grid': 'd-grid',
        'Inline grid': 'd-inline-grid'
    }
    let containerType:string = containerTypeObj['Grid'],
        columnClasses: string = '',
        columnStyles: string = ""

</script>

<section>
    <h3 id="column">Column</h3>
    <p>
        <!-- The <b>gc-...</b> classes defines how distributes space between and around content items along the main-axis of a <b>flex</b> container, and the inline axis of a <b>grid</b> container. -->
        ...
    </p>
    <div class="d-grid g-3 mb-4 p-3 background-color--positive border-radius--md">
        <div class="d-grid gtc-2 p_gtc-1 g-2">
            <div class="d-grid">
                <label for="columnClasses">Grid classes:</label>
                <Input
                    id="columnClasses"
                    bind:value={columnClasses}
                    placeholder="example:"
                    type="text" />
            </div>
            <div class="d-grid">
                <label for="columnStyles">Grid styles:</label>
                <Input
                    id="columnStyles"
                    bind:value={columnStyles}
                    placeholder=""
                    type="text" />
            </div>
        </div>
        <div class="d-flex g-2">
            {#each Object.entries(containerTypeObj) as [key, value]}
                <Button
                    class="btn-alt {containerType === value ? 'active' : ''}"
                    on:click={() => containerType = value}
                    disabled={containerType === value}
                >{key}</Button>
            {/each}
        </div>
        <div>
            <div class="{containerType} gtc-12 g-2 background-color--negative-10 p-2">
                <div class="background-color--negative-10 px-2 py-1 gc-span-2 gcs-3">1</div>
                <div class="background-color--negative-10 px-2 py-1 gc-span-6 gcs-7">6</div>
            </div>
        </div>
    </div>
    <Details open>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="border-radius--top-0">
                {
`<div class="${containerType} gtc-12">
    <div class="gc-span-2 gcs-3">one</div>
    <div class="gc-span-6 gcs-7">two</div>
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>