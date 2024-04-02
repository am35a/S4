<script lang="ts">
    import Group from 'src/components/Group.svelte'
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'

    let groupObj: { [key: string]: any }={
        Horizontal: 'grid-auto-flow--column' as string,
        Vertical: 'grid-auto-flow--row' as string,
    }
    let groupDirection: string = 'Horizontal'

</script>

<article>
    <h2 class="group">Groups</h2>
    <p>
        S4 makes possible to combine various objects into groups.
        The classes are responsible for vertical grouping <b>grid-auto-flow--row</b> and horizontal <b>grid-auto-flow--column</b>.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Directions</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
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
        <div class="display--flex gap--md flex-wrap--wrap justify-content--evenly align-items--center padding--md background-color--positive border-radius--md">
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

        <div class="display--grid gap--md">
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
        <div class="display--grid gap--md">
            <b>Code</b>
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