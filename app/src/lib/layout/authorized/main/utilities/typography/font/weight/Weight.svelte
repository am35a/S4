<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<div>
    <h4 id="weight">Weight</h4>
    <p>
        To set a font weight have to use the <b>fw-...</b> classes.
    </p>
    <div class="display--grid gap--sm margin-bottom--md padding--sm background-color--positive border-radius--md">
        {#each {length: 9} as _, i}
            <div class="fw-{i + 1}00">fw-{i + 1}00</div>
        {/each}
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode>
                {#each {length: 9} as _, i}
                    {
`<div class="fw-${i + 1}00">fw-${i + 1}00</div>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</div>