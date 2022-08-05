<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"

    let borderRadiusSizesArr: string[] = [ 'sss', 'ss', 's', 'm', 'l', 'll', 'lll', 'llll' ]
</script>

<div class="d-grid g-2">
    <h4 id="AddBorderRadius">Add radius</h4>
    <p>
        To add the default radius use the <b>br</b> class. For different round corners use the <b>br-...</b> classes.
    </p>
    <div class="d-grid g-2 p-2 bg-positive br">
        <div class="d-flex flex-wrap g-2">
            {#each borderRadiusSizesArr as item }
                <div class="bg-negative-10 p-5 br-{item}">br-{item}</div>
            {/each}
        </div>
        <div class="d-flex flex-wrap g-2">
            <div>
                <div class="bg-negative-10 p-8 br-c"></div>
            </div>
            <div>
                <div class="bg-negative-10 p-5 br-p">br-p</div>
            </div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="btr-0">
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