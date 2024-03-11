<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let borderRadiusSizesArr: string[] = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl' ]
</script>

<div>
    <h4 id="add">Add radius</h4>
    <p>
        To add the default radius use the <b>br</b> class. For different round corners use the <b>border-radius--...</b> classes.
    </p>
    <div class="d-grid g-3 mb-4 p-3 background-color--positive border-radius--md">
        <div class="d-flex fw-wrap g-2">
            {#each borderRadiusSizesArr as item }
                <div class="background-color--negative-10 p-5 border-radius--{item}">border-radius--{item}</div>
            {/each}
        </div>
        <div class="d-flex fw-wrap g-4">
            <div>
                <div class="background-color--negative-10 p-8 border-radius--oval"></div>
            </div>
            <div>
                <div class="background-color--negative-10 p-5 border-radius--pill">border-radius--pill</div>
            </div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="border-radius--top-0">
                {#each borderRadiusSizesArr as item }
                    {
`<div class="border-radius--${item}">border-radius--${item}</div>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</div>