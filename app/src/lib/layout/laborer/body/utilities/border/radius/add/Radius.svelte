<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let borderRadiusSizesArr: string[] = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl' ]
</script>

<div>
    <h4 id="add">Add radius</h4>
    <p>
        To add the default radius use the <b>rounded</b> class. For different round corners use the <b>rounded-...</b> classes.
    </p>
    <div class="d-grid g-4 mb-4 p-4 bgc-positive rounded">
        <div class="d-flex fw-wrap g-2">
            {#each borderRadiusSizesArr as item }
                <div class="bgc-negative-10 p-5 rounded-{item}">rounded-{item}</div>
            {/each}
        </div>
        <div class="d-flex fw-wrap g-4">
            <div>
                <div class="bgc-negative-10 p-8 rounded-circle"></div>
            </div>
            <div>
                <div class="bgc-negative-10 p-5 rounded-pill">rounded-pill</div>
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