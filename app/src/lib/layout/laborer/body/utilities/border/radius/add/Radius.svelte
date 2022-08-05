<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"

    let borderRadiusSizesArr: string[] = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl' ]
</script>

<div class="d-grid g-2">
    <h4 id="AddBorderRadius">Add radius</h4>
    <p>
        To add the default radius use the <b>rounded</b> class. For different round corners use the <b>rounded-...</b> classes.
    </p>
    <div class="d-grid g-2 p-2 bg-positive rounded">
        <div class="d-flex flex-wrap g-2">
            {#each borderRadiusSizesArr as item }
                <div class="bg-negative-10 p-5 rounded-{item}">rounded-{item}</div>
            {/each}
        </div>
        <div class="d-flex flex-wrap g-2">
            <div>
                <div class="bg-negative-10 p-8 rounded-circle"></div>
            </div>
            <div>
                <div class="bg-negative-10 p-5 rounded-pill">rounded-pill</div>
            </div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {#each borderRadiusSizesArr as item }
                    {
`<div class="rounded-${item}">rounded-${item}</div>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</div>