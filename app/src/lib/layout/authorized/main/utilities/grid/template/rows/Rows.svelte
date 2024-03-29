<script lang="ts">
    import Precode from 'component/Precode.svelte'

    let containerTypeObj = {
        'Grid': 'display--grid',
        'Inline grid': 'display--inline-grid'
    },
        containerType = containerTypeObj['Grid']
</script>

<div>
    <h4 id="rows">Rows</h4>
    <p>
        To set a number of rows in the <b>grid</b> and <b>inline-grid</b> display container, use the
        <b>grid-template-rows--1/.../12</b> classes. If need to set different number of rows, use a
        variable for <b>--grid-template-rows</b> with the required number of rows
        <b>--grid-template-rows: 15</b>, like the example
        <Precode class="display--inline padding-x--xs padding-y--xxs ws-normal">
            class="grid-template-rows"
            style="--p_grid-template-rows: 16rem auto 10rem; --grid-template-rows: auto 10rem;"
        </Precode>.
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
        <div class="padding--md background-color--positive border-radius--md">
            <div class="{containerType} grid-template-rows--3 gap--sm background-color--negative-10 padding--sm">
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs">one</div>
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {
`<div class="${containerType} grid-template-rows--3">
    ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</div>