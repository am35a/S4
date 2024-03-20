<script lang="ts">
    import Precode from 'component/Precode.svelte'

    let containerTypeObj = {
        'Grid': 'display--grid',
        'Inline grid': 'display--inline-grid'
    },
        containerType = containerTypeObj['Grid']
</script>

<div>
    <h4 id="columns">Columns</h4>
    <p>
        To set a number of columns in the <b>grid</b> and <b>inline-grid</b> display container, use the
        <b>grid-template-columns--1/.../12</b> classes. If need to set different number of columns, use a
        variable for <b>--grid-template-columns</b> with the required number of columns
        <b>--grid-template-columns: 20</b>, like the example
        <Precode class="display--inline px-2 py-1 ws-normal">
            class="grid-template-columns"
            style="--p_grid-template-columns: 16rem auto 10rem; --grid-template-columns: auto 10rem;"
        </Precode>.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Display</b>
            <div class="display--flex flex-wrap--wrap g-3">
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
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="p-3 background-color--positive border-radius--md">
                <div class="{containerType} grid-template-columns--3 g-3 background-color--negative-10 p-3">
                    <div class="background-color--negative-10 px-2 py-1">one</div>
                    <div class="background-color--negative-10 px-2 py-1">two</div>
                    <div class="background-color--negative-10 px-2 py-1">three</div>
                </div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="${containerType} grid-template-columns--3">
    ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</div>