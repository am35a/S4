<script lang="ts">
    import Group from 'src/components/Group.svelte'
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'

    let groupObj: { [key: string]: any }={
        Horizontal: 'gaf-column' as string,
        Vertical: 'gaf-row' as string,
    }
    let groupDirection: string = 'Horizontal'

</script>

<article>
    <h2 class="group">Groups</h2>
    <p>
        S4 makes possible to combine various objects into groups.
        The classes are responsible for vertical grouping <b>.gaf-row</b> and horizontal <b>.gaf-column</b>.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Directions</b>
            <div class="d-flex fw-wrap g-3">
                {#each Object.entries(groupObj) as [key, value]}
                    <button
                        on:click={() => groupDirection = key}
                        class="btn btn{value}"
                        class:active={groupDirection === key}
                        type="button"
                        disabled={groupDirection === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-flex g-4 fw-wrap justify-content--evenly align-items--center p-4 background-color--positive border-radius--md">
            <Group class="{groupObj[groupDirection]}">
                <input
                    class="frm"
                    placeholder="Type text to search"
                    type="text"
                >
                <Button class="btn-primary" disabled>Clear</Button>
                <Button class="btn-primary">Search</Button>
            </Group>
        </div>

        <div class="d-grid g-4">
            <b>Svelte</b>
            <Precode>
                {
`// before using the component, import as Group
<Group class="${groupObj[groupDirection]}">
    Group content place here ...
</Group>
`
                }
            </Precode>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="grp ${groupObj[groupDirection]}">
    Group content place here ...
</div>
`
                }
            </Precode>
        </div>

    </div>
</article>