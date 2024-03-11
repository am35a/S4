<script lang="ts">
    import Columns from './columns/Columns.svelte'
    import Rows from './rows/Rows.svelte'

    import Input from 'component/Input.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let templateObj={
        rows: 4,
        columns: 4,
        items: 4
    }

    $: templateObj.columns || templateObj.rows, itemsToogler()

    function itemsToogler() {
        templateObj.items = templateObj.columns * templateObj.rows
    }

</script>

<section>
    <h3 id="template">Template</h3>
    <Columns />
    <Rows />
 
    <!-- <h4 id="template">Template playground</h4> -->
    <div class="d-grid g-3 mb-4 p-3 background-color--positive border-radius--md d-none">
        <!-- <input class="h-100" type="range" name="containerHeight" orient="vertical" min="0" max="100" step="1"> -->

        <div></div>
        <div class="d-grid">
            <!-- <label for="containerWidth">Columns {templateObj.columns}:</label> -->
            <Input
                name="containerWidth"
                min={1} max={12} step={1}
                bind:value={templateObj.columns}
                type="range"
            />
        </div>
        <div class="d-grid">
            <!-- <label for="containerWidth">Columns {templateObj.columns}:</label> -->
            <Input
                name="containerWidth"
                min={1} max={12} step={1}
                bind:value={templateObj.rows}
                type="range"
            />
            <!-- orient="vertical" -->
        </div>
        <div>
            <div class="d-grid gtc-{templateObj.columns} g-4 background-color--negative-10 p-4">
                {#each Array(templateObj.items) as _, i}
                    <div class="background-color--negative-10 px-2 py-1">{i + 1}</div>
                {/each}
            </div>
        </div>
    </div>
    <Details class="d-none">
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="border-radius--top-0">
                {
`...
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>