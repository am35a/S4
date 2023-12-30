<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let borderRadiusSizesArr: string[] = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl' ]
</script>

<div>
    <h4 id="add">Add radius</h4>
    <p>
        To add the default radius use the <b>br</b> class. For different round corners use the <b>br-...</b> classes.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="d-flex fw-wrap g-2">
            {#each borderRadiusSizesArr as item }
                <div class="bgc-negative-10 p-5 br-{item}">br-{item}</div>
            {/each}
        </div>
        <div class="d-flex fw-wrap g-4">
            <div>
                <div class="bgc-negative-10 p-8 br-oval"></div>
            </div>
            <div>
                <div class="bgc-negative-10 p-5 br-pill">br-pill</div>
            </div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {#each borderRadiusSizesArr as item }
                    {
`<div class="br-${item}">br-${item}</div>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</div>